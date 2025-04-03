import { execSync } from 'child_process';
import { readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, join, basename } from 'path';

// Define components directory and index.ts path
const componentsDir = resolve('src/components');
const indexPath = join(componentsDir, 'index.ts');

// Ensure the components directory exists
if (!existsSync(componentsDir)) {
	console.log('📁 Components directory not found. Creating it...');
	mkdirSync(componentsDir, { recursive: true });
}

// Ensure index.ts exists
if (!existsSync(indexPath)) {
	console.log('📄 index.ts not found. Creating it...');
	writeFileSync(indexPath, ''); // Create an empty index.ts file
}

// Get the component name from CLI args
const componentName = process.argv[2];

if (!componentName) {
	console.error('❌ Please provide a component name. Usage: pnpm run add-component button');
	process.exit(1);
}

// Function to convert kebab-case to PascalCase (e.g., dropdown-menu → DropdownMenu)
const toPascalCase = (str: string) =>
	str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');

try {
	console.log(`🚀 Adding component: ${componentName} (with overwrite)`);

	// Use `--overwrite` to force update existing components
	execSync(`pnpm dlx shadcn@latest add ${componentName} --overwrite`, { stdio: 'inherit' });

	// Read all `.tsx` component files (excluding index.ts)
	const files = readdirSync(componentsDir).filter((file) => file.endsWith('.tsx'));

	// Generate named exports with PascalCase
	const exportStatements = files
		.map((file) => {
			const originalName = basename(file, '.tsx');
			const pascalCaseName = toPascalCase(originalName);
			return `export { ${pascalCaseName} } from './${originalName}';`;
		})
		.join('\n');

	// Write the updated exports to index.ts (always update)
	writeFileSync(indexPath, exportStatements + '\n');

	console.log(`✅ Successfully added ${componentName} and updated index.ts with ${files.length} components.`);
} catch (error) {
	console.error('❌ Error adding component:', error);
	process.exit(1);
}
