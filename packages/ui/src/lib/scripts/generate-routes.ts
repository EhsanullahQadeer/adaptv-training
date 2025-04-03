import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the root directory of the project
const ROOT_DIR = path.join(__dirname, '..', '..', '..', '..', '..');
const APP_DIR = path.join(ROOT_DIR, 'apps', 'marketing-website', 'app'); // Adjust this path as needed
const LIB_ROUTES_DIR = path.join(ROOT_DIR, 'apps', 'marketing-website', 'lib', 'routes'); // Output directory

// Function to recursively search for page.tsx and route.ts/route.tsx files
function findRouteFiles(directory: string): { pageFiles: string[]; routeFiles: string[] } {
	const pageFiles: string[] = [];
	const routeFiles: string[] = [];

	const items = fs.readdirSync(directory);

	items.forEach((item) => {
		const itemPath = path.join(directory, item);
		const stat = fs.statSync(itemPath);

		if (stat.isDirectory()) {
			// Recursively search in subdirectories
			const { pageFiles: subPageFiles, routeFiles: subRouteFiles } = findRouteFiles(itemPath);
			pageFiles.push(...subPageFiles);
			routeFiles.push(...subRouteFiles);
		} else if (stat.isFile()) {
			// Check if the file is a page.tsx or route.ts/route.tsx
			if (item === 'page.tsx' || item === 'page.jsx') {
				pageFiles.push(itemPath);
			} else if (item === 'route.ts' || item === 'route.js' || item === 'route.tsx' || item === 'route.jsx') {
				routeFiles.push(itemPath);
			}
		}
	});

	return { pageFiles, routeFiles };
}

// Function to convert a string to lower camelCase
function toLowerCamelCase(str: string): string {
	return str
		.replace(/[-_](.)/g, (_, char) => char.toUpperCase()) // Convert kebab-case or snake_case to camelCase
		.replace(/^(.)/, (_, char) => char.toLowerCase()); // Ensure the first character is lowercase
}

// Function to generate clean route paths and names
function generateRouteObject(files: string[], baseDir: string): { [key: string]: string } {
	const routes: { [key: string]: string } = {};

	files.forEach((filePath) => {
		const relativePath = path.relative(baseDir, filePath);
		const routePath = `/${relativePath
			.replace(/\\/g, '/') // Replace backslashes with forward slashes
			.replace(/\/page\.tsx$/, '') // Remove /page.tsx suffix
			.replace(/\/route\.ts$/, '') // Remove /route.ts suffix
			.replace(/\/route\.tsx$/, '') // Remove /route.tsx suffix
			.replace(/\/index$/, '') // Remove /index suffix
			.replace(/\([^)]*\)\//g, '') // Remove group routes (e.g., /(home)/about -> /about)
			.replace(/\([^)]*\)/g, '') // Remove standalone group routes (e.g., /(home) -> /)
			.replace(/\[\[\.\.\.([^\]]+)\]\]/g, ':$1?') // Handle optional catch-all routes ([[...slug]] -> :slug?)
			.replace(/\[\.\.\.([^\]]+)\]/g, ':$1*') // Handle catch-all routes ([...slug] -> :slug*)
			.replace(/\[([^\]]+)]/g, ':$1')}`; // Replace brackets with colon for dynamic segments

		// Special case for root or home route
		if (routePath === '/') {
			routes['home'] = '/';
			return;
		}

		// Generate a route name
		let routeName = routePath
			.replace(/^\//, '') // Remove leading slash
			.replace(/:[^/]+/g, (match) => match.slice(1)) // Remove colon from dynamic segments for the key
			.replace(/\*/g, '') // Remove asterisks from catch-all keys
			.replace(/\?/g, '') // Remove question marks from optional catch-all keys
			.replace(/[/]/g, '_') // Replace slashes with underscores
			.replace(/_+/g, '_') // Replace multiple underscores with a single one
			.replace(/_$/, ''); // Remove trailing underscore

		// Convert route name to lower camelCase
		routeName = toLowerCamelCase(routeName);

		routes[routeName] = routePath;
	});

	return routes;
}

// Function to create a file with exported routes
function createExportFile(fileName: string, routes: { [key: string]: string }, outputDir: string) {
	const formattedFileName = fileName === 'apiRoutes' ? 'api-routes.ts' : 'pages-routes.ts';
	const filePath = path.join(outputDir, formattedFileName);

	// Generate the content for the file
	const content = `// Auto-generated routes
export const ${fileName} = ${JSON.stringify(routes, null, 2)};\n`;

	// Write the file
	fs.writeFileSync(filePath, content);
	console.log(`Generated: ${filePath}`);
}

// Main function to generate routes
function main() {
	if (!fs.existsSync(APP_DIR)) {
		console.error(`App directory not found: ${APP_DIR}`);
		process.exit(1);
	}

	if (!fs.existsSync(LIB_ROUTES_DIR)) {
		fs.mkdirSync(LIB_ROUTES_DIR, { recursive: true });
	}

	// Find all page.tsx and route.ts/route.tsx files
	const { pageFiles, routeFiles } = findRouteFiles(APP_DIR);

	// Generate routes as objects
	const apiRoutes = generateRouteObject(routeFiles, APP_DIR);
	const pagesRoutes = generateRouteObject(pageFiles, APP_DIR);

	// Create the export files
	createExportFile('apiRoutes', apiRoutes, LIB_ROUTES_DIR);
	createExportFile('pagesRoutes', pagesRoutes, LIB_ROUTES_DIR);

	console.log('Route generation completed!');
}

// Run the script
main();
