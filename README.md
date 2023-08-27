# Vite + React Starter Template

A minimal starter to scaffold your react project quickly.

| Starter                                                                                 | Tools                                              |
| --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [The Basics](https://github.com/fm-anderson/react-starter#readme)                       | React, TailwindCss, Tilg                           |
| [Router V6](https://github.com/fm-anderson/react-starter/tree/router-v6-config#readme)  | React, TailwindCss, Tilg, Router v6                |
| [One Page App](https://github.com/fm-anderson/react-starter/tree/one-page#readme)       | React, TailwindCss, Tilg, Router v6                |
| [Firebase Auth](https://github.com/fm-anderson/react-starter/tree/firebase-auth#readme) | React, TailwindCss, Tilg, Router v6, Firebase Auth |

## Feature

- Starter Template for [React Project](https://react.dev/).
- [Prettier + TailwindCSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) configured.
- [React Router v6](https://reactrouter.com/en/main/routers/picking-a-router#using-v64-data-apis) configured.
- [Loader function](https://reactrouter.com/en/main/route/loader) ready to fetch and return API data.

## Getting Started

### Prerequisites

- Ensure you have Node.js and `npm` (or other package manager) installed.
- `git` should be installed (recommended v2.4.11 or higher)

### Installation (using [degit](https://github.com/Rich-Harris/degit))

[Why degit](https://github.com/Rich-Harris/degit#wait-isnt-this-just-git-clone---depth-1) instead of git clone?

1. Create project directory from last commit
   ```sh
   npx degit fm-anderson/react-starter#one-page myappname
   ```
2. Navigate to the project directory
   ```sh
   cd myappname
   ```
3. Initialize git repository
   ```sh
   git init
   ```
4. Install dependencies
   ```sh
   npm install
   ```
5. Run the react dev environment
   ```sh
   npm run dev
   ```
6. The dev environment should be running on http://localhost:5173

### Installation (using git)

1. Clone this repo
   ```sh
   git clone -b one-page https://github.com/fm-anderson/react-starter.git
   ```
2. Navigate to the project directory
   ```sh
   cd react-starter
   ```
3. Delete repository and keep cloned files
   ```sh
   rm -rf .git
   ```
4. Install dependencies
   ```sh
   npm install
   ```
5. Run the react dev environment
   ```sh
   npm run dev
   ```
6. The dev environment should be running on http://localhost:5173

### Available scripts

#### `npm dev`

1. Runs the app in development mode.
2. Open https://localhost:5173 to view it in the browser.
3. The page will automatically reload if you make changes to the code.

#### `npm build`

1. Builds the app for production to the `dist` folder.
2. It correctly bundles React in production mode and optimizes the build for the best performance.
3. The build is minified and the filenames include the hashes.
4. Your app is ready to be deployed.
