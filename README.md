## Usage

in the root directory run:

```bash
pnpm install
pnpm dev
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@canary add button -c apps/appname

pnpm dlx shadcn@canary add button -c packages/ui

```

This will place the ui components in the `packages/ui/src/components` directory.


## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from '@workspace/ui/components/ui/button';
```


