import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '..', 'src', 'icons');

const modifyIcon = (filePath: string) => {
  let content = fs.readFileSync(filePath, 'utf-8');

  const propsRegex = /SVGProps<SVGSVGElement>/;
  if (propsRegex.test(content)) {
    content = content.replace(
      propsRegex,
      `(SVGProps<SVGSVGElement> & { size?: string | number; color?: string })`
    );
  }

  const svgTagRegex = /<svg([^>]*)>/;
  const svgMatch = content.match(svgTagRegex);
  if (svgMatch) {
    const svgAttributes = svgMatch[1];

    let newSvgAttributes = (svgAttributes ?? '')
      .replace(/width="[^"]*"/, '{...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}')
      .replace(/height="[^"]*"/, '');

    newSvgAttributes += ' fill={props.color || "currentColor"}';

    content = content.replace(svgTagRegex, `<svg${newSvgAttributes}>`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
};

const main = () => {
  fs.readdir(ICONS_DIR, (err, files) => {
    if (err) {
      console.error('Error reading icons directory:', err);
      process.exit(1);
    }

    files.forEach((file) => {
      const filePath = path.join(ICONS_DIR, file);
      if (path.extname(file) === '.tsx') {
        try {
          modifyIcon(filePath);
          console.log(`Modified: ${file}`);
        } catch (error) {
          console.error(`Error modifying ${file}:`, error);
        }
      }
    });
  });
};

main();