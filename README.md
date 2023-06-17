
<div align="center">
<h1 align="center">
<br>
rast-mobile-task
</h1>
<h3 align="center">🚀 Developed with the software and tools below.</h3>
<p align="center">

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/SASS-CC6699.svg?style=for-the-badge&logo=sass&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/PNPM-F69220.svg?style=for-the-badge&logo=pnpm&logoColor=white" />
<img src="https://img.shields.io/badge/Material--UI-0081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white" />
<img src="https://img.shields.io/badge/DevExtreme-73BFB8.svg?style=for-the-badge" />
<img src="https://img.shields.io/badge/Formik-61DAFB.svg?style=for-the-badge" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" />
<a href="https://fontawesome.com" target="_blank">
  <img src="https://img.shields.io/badge/Font%20Awesome-5C2D91.svg?style=for-the-badge&logo=font-awesome&logoColor=white">
</a>
  
</p>

</div>

---
## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📍 Overview](#overview)
- [⚙️ Project Structure](#️-project-structure)
- [💻 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [✅ Prerequisites](#-prerequisites)
  - [💻 Installation](#-installation)
  - [🤖 Using rast-mobile-task](#-using-rast-mobile-task)

---

## 📍Overview

rast-mobile-task is a task for a job interview.

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## ⚙️ Project Structure

```bash
.
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public
└── src
    ├── assets
    │   ├── images
    │   │   └── logo.png
    │   ├── sass
    │   │   ├── _datatable.scss
    │   │   ├── _dialog.scss
    │   │   ├── _global.scss
    │   │   ├── _variables.scss
    │   │   └── layout.scss
    │   └── theme
    │       └── index.ts
    ├── components
    │   ├── DataTable.tsx
    │   ├── Dialog.tsx
    │   ├── Header.tsx
    │   ├── index.ts
    │   └── Logo.tsx
    ├── constants
    │   └── initialValues.ts
    ├── mock
    │   └── mockData.ts
    ├── model
    │   ├── index.ts
    │   └── ISocialMedia.ts
    ├── pages
    │   ├── Dashboard.tsx
    │   └── index.ts
    ├── services
    │   ├── index.ts
    │   └── socialMediaServices.ts
    ├── App.tsx
    ├── Main.tsx
    └── vite-env.d.ts

12 directories, 32 files
```
---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 💻 Modules

<details closed>
<summary>src</summary>
<br/>
<details closed>
<summary>assets</summary>
<br/>
<details closed>
<summary>images</summary>

| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [logo.png](src/assets/images/logo.png)         | Logo for company name. |
      
</details>
    
<details closed>
<summary>sass</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [_datatable.scss](src/assets/sass/_datatable.scss)         | This code defines styles for a container and a data grid component, including its header, search input, and pager. |
| [_dialog.scss](src/assets/sass/_dialog.scss)         |  This code defines styles for a dialog container, including its positioning, background color, button and input containers, and close icon. |
| [_global.scss](src/assets/sass/_global.scss)         |  This code sets the global font family for all elements using a variable defined in the "_variables" file. |
| [_variables.scss](src/assets/sass/_variables.scss)         | This code defines variables for primary color, secondary color, global font family, and breakpoints. |
| [layout.scss](src/assets/sass/layout.scss)         | This code imports styles from "_datatable", "_variables", "_dialog", and "_global" files. |
      
</details>
    
<details closed>
<summary>theme</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](src/assets/theme/index.ts)         | This code creates a MUI theme with custom palette and button styles overrides. |
      
</details>
<br/>
</details>
  
<details closed>
<summary>components</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DataTable.tsx](src/components/DataTable.tsx)         | This code defines a functional component called DataTable, which renders a DataGrid component with filtering, pagination, and a dialog. It utilizes various MUI and DevExtreme components and manages state using React hooks. |
| [Dialog.tsx](src/components/Dialog.tsx)         | This code defines a dialog component called Dialog, which is a modal form used for adding social media information. It uses MUI components such as Modal, TextField, Button, and icons. The form data is managed using Formik and onSubmit, the form data is submitted and saved using an API call. |
| [Header.tsx](src/components/Header.tsx)         | This code defines a header component called Header, which includes an AppBar and a responsive Drawer. It uses MUI components such as AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography, and icons from MUI and FontAwesome. The header displays a logo, navigation buttons, and social media icons. The Drawer is used for mobile devices to display a collapsible menu. |
| [index.ts](src/components/index.ts)         | This code exports the components Header, Logo, DataTable, and Dialog. |
| [Logo.tsx](src/components/Logo.tsx)         | This code defines a Logo component that renders an image using the LogoImage. |
      
</details> 

<details closed>
<summary>constants</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [initialValues.tsx](src/constants/initialValues.ts)  | This code defines an initialSocialMedia constant that represents an instance of the ISocialMedia interface. |
      
</details> 
  
<details closed>
<summary>mock</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [mockData.ts](src/mock/mockData.ts)  | This code defines a mockData constant that represents an array of objects conforming to the ISocialMedia interface. |
      
</details> 
  
<details closed>
<summary>model</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](src/model/index.ts)  | This code exports the ISocialMedia interface using ES module syntax. |
| [ISocialMedia.ts](src/model/ISocialMedia.ts)  | This code defines and exports an interface named ISocialMedia. |
      
</details> 
  
<details closed>
<summary>pages</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Dashboard.tsx](src/pages/Dashboard.tsx)  | This code defines a Dashboard component that renders a Box container with a background gradient and a DataTable component in the center. |
| [index.ts](src/pages/index.ts)  | This code exports the Dashboard component. |
      
</details> 
  
<details closed>
<summary>services</summary>
      
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](src/services/index.ts)  | This code exports the addSocialMedia function from the socialMediaServices module. |
| [socialMediaServices.ts](src/services/socialMediaServices.ts)  | This code defines the addSocialMedia function, which takes in newData and setData as parameters and updates the state with the new social media data. It also stores the updated data in the local storage. |
  
</details> 
  
| File                     | Summary                                                                                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [App.tsx](src/App.tsx)  | This code imports necessary CSS files for styling and sets up the main structure of the application. It uses Material-UI's Container component to wrap the Header and Dashboard. |
| [main.tsx](src/main.tsx)  | This code renders the App component into the root element of the HTML document. It wraps the App component with a ThemeProvider and a StyledEngineProvider for applying the MUI theme and styling. The rendering is done using ReactDOM.createRoot method. The code enforces strict mode during development. |
  
</details>

<hr />

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> `📌  Node.js`
> `📌  npm`
> `📌  pnpm`
> `📌  Typescript`

### 💻 Installation

1. Clone the rast-mobile-task repository:
```sh
git clone https://github.com/TalhaBaysal/rast-mobile-task
```

2. Change to the project directory:
```sh
cd rast-mobile-task
```

3. Install the dependencies:
```sh
pnpm install
```

### 🤖 Using rast-mobile-task

```sh
pnpm run dev
```

<hr />
