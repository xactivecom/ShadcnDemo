# Setup React/shadcn 

### Create React Project
From the root folder, create vite-based project:
```bash
npm create vite@latest
```

Prompts
-	Project name: shadcn-react
-	Framework: React
-	Variant: TypeScript

```bash
cd shadcn-react
npm install
```

### Install Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

### Configure Config for Tailwind
- Edit src/index.css with this at top:
	@import "tailwindcss";

- Edit tsconfig.json to set compiler options:
	"compilerOptions": {
	  "baseUrl": ".",
	  "paths": {
	    "@/*": ["./src/*"]
	  }
	}
- Edit tsconfig.app.json to include compiler options:
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },

- Edit vite.config.ts to set:
	import { defineConfig } from 'vite'
	import react from '@vitejs/plugin-react'
	import tailwindcss from '@tailwindcss/vite'
	import path from 'path'

	// https://vite.dev/config/
	export default defineConfig({
	  plugins: [react(), tailwindcss()],
	  resolve: {
	    alias: {
	      "@": path.resolve(__dirname, "./src")
	    }
	  }
	})

### Install Shadcn
```bash
npx shadcn@latest init
```

Prompt:
-	Base color: Neutral

Install some shadcn components:
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
```

### Code changes
- Edit src/App.css to remove all content
- Edit App.tsx:
	import { Button } from './components/ui/button'

### Run the project
```bash
npm run dev
```
