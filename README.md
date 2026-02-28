# Figma MCP Playground — Angular Workspace

## 🚀 Project Stack

| Tool           | Version                               |
| -------------- | ------------------------------------- |
| **Angular**    | 19.x (latest compatible with Node 22) |
| **Bootstrap**  | 5.x                                   |
| **DevExtreme** | Latest                                |
| **Figma MCP**  | @figma/mcp                            |

---

## 📁 Project Structure

```
Figma MCP Playground/
├── .vscode/
│   └── mcp.json          ← Figma MCP server config
└── seetru-app/           ← Angular 19 application
    ├── src/
    │   ├── app/
    │   │   ├── app.component.ts
    │   │   ├── app.component.html
    │   │   └── app.component.scss
    │   ├── styles.scss
    │   └── index.html
    └── angular.json
```

---

## ⚡ Getting Started

```bash
cd seetru-app
npm install
ng serve
```

Open http://localhost:4200

---

## 🎨 Bootstrap 5

Bootstrap is configured globally via `angular.json`:

- **CSS**: `node_modules/bootstrap/dist/css/bootstrap.min.css`
- **JS**: `node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`
- **SCSS**: imported in `src/styles.scss` for customisation via `@import 'bootstrap/scss/bootstrap'`

---

## 📊 DevExtreme

DevExtreme is installed as `devextreme` + `devextreme-angular`. Import modules per component:

```typescript
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

@Component({
  imports: [DxDataGridModule, DxButtonModule],
  ...
})
```

DevExtreme light theme CSS is included in `angular.json` styles:

- `node_modules/devextreme/dist/css/dx.light.css`

---

## 🖌️ Figma MCP Server

The Figma MCP server is configured in `.vscode/mcp.json`. It requires a **Figma Personal Access Token**.

### Getting your Figma Access Token

1. Log in to [figma.com](https://figma.com)
2. Go to **Settings → Security → Personal access tokens**
3. Click **Generate new token**, give it a name, and copy the token

### Using with GitHub Copilot Chat

Once the MCP server is running, you can:

- Ask Copilot to convert Figma designs to Angular components
- Get design context, colours, spacing and layout from Figma nodes
- Reference Figma URLs directly in chat: `https://figma.com/design/:fileKey/...?node-id=1-2`

---

## 🛠️ VS Code Extensions (Recommended)

- **Angular Language Service** — `angular.ng-template`
- **GitHub Copilot** — `github.copilot`
