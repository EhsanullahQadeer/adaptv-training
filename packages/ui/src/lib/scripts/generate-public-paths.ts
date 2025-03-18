import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the root directory of the monorepo
const ROOT_DIR = path.join(__dirname, '..', '..', '..', '..', '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'apps', 'marketing-website', 'public', 'assets');
const OUTPUT_DIR = path.join(ROOT_DIR, 'apps', 'marketing-website', 'lib', 'public-assets-paths');

// Function to recursively generate paths for a directory
function generatePaths(directory: string, basePath: string = ''): { [key: string]: string | object } {
    const items = fs.readdirSync(directory);
    const paths: { [key: string]: string | object } = {};
  
    items.forEach((item) => {
      const itemPath = path.join(directory, item);
      const relativePath = path.join(basePath, item);
      const stat = fs.statSync(itemPath);
  
      if (stat.isDirectory()) {
        // If it's a directory, recursively generate paths for its contents
        paths[item] = generatePaths(itemPath, relativePath);
      } else {
        // If it's a file, add the relative path
        paths[item] = `/${relativePath}`;
      }
    });
  
    return paths;
  }
  
  // Function to convert a string to lowerCamelCase
  function toLowerCamelCase(str: string): string {
    return str
      .replace(/\.[^/.]+$/, '') // Remove file extension
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase()) // Convert kebab-case or snake_case to camelCase
      .replace(/^(.)/, (_, char) => char.toLowerCase()); // Ensure the first character is lowercase
  }
  
  // Function to create a TypeScript file with exported paths
  function createExportFile(fileName: string, paths: { [key: string]: string }, outputDir: string) {
    const filePath = path.join(outputDir, `${fileName}-paths.ts`);
  
    // Normalize paths to use forward slashes and format keys
    const normalizedPaths: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(paths)) {
      const formattedKey = toLowerCamelCase(key); // Convert key to lowerCamelCase
      normalizedPaths[formattedKey] = value.replace(/\\/g, '/'); // Normalize the path
    }
  
    // Export as default
    const content = `const ${fileName}Paths = ${JSON.stringify(normalizedPaths, null, 2)};\n\nexport default ${fileName}Paths;\n`;
  
    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${filePath}`);
  }
  
  // Function to create an index.ts file that re-exports all paths
  function createIndexFile(outputDir: string, assetTypes: string[]) {
    const indexPath = path.join(outputDir, 'index.ts');
  
    // Generate re-export statements
    const reExports = assetTypes
      .map((assetType) => `export { default as ${assetType}Paths } from './${assetType}-paths';`)
      .join('\n');
  
    // Write the index.ts file
    fs.writeFileSync(indexPath, reExports);
    console.log(`Generated: ${indexPath}`);
  }
  
  // Main function to generate paths for all asset types
  function main() {
    if (!fs.existsSync(PUBLIC_DIR)) {
      console.error(`Public assets directory not found: ${PUBLIC_DIR}`);
      process.exit(1);
    }
  
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
  
    const assetTypes = fs.readdirSync(PUBLIC_DIR);
  
    assetTypes.forEach((assetType) => {
      const assetTypePath = path.join(PUBLIC_DIR, assetType);
      const stat = fs.statSync(assetTypePath);
  
      if (stat.isDirectory()) {
        // Generate paths for the asset type (including nested directories)
        const paths = generatePaths(assetTypePath, `assets/${assetType}`);
  
        // Flatten the nested paths into a single object
        const flatPaths: { [key: string]: string } = {};
        for (const [key, value] of Object.entries(paths)) {
          if (typeof value === 'string') {
            // Format the key and add it to the flatPaths object
            const formattedKey = toLowerCamelCase(key);
            flatPaths[formattedKey] = value.replace(/\\/g, '/');
          }
        }
  
        // Create the export file for the asset type
        createExportFile(assetType, flatPaths, OUTPUT_DIR);
      }
    });
  
    // Create the index.ts file
    createIndexFile(OUTPUT_DIR, assetTypes);
  
    console.log('All paths generated successfully!');
  }
  
  // Run the script
  main();
  