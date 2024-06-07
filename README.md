# Prism Admin app - React App

React.js admin application to manage restaurants & admin users..

## Development Setup

- Clone Repository: `git clone HTTPS/SSH Url`
- Move to root directory: `cd extramile-app`
- Install dependency: `npm install`
- Starting Proejct: `npm start`
- Open link in browser: [http://localhost:3000/](http://localhost:3000/)

## Folder Structure

    extramile-app
    │
    └───src
    │   │
    │   └───assets
    │       └───images (Director to store all image files)
    │   |
    │   └───components (Parent directory for app components)
    │   │   └───resource folder (Resource folder for each specific component with CSS properties)
    │   |
    │   └───containers (Parent directory for app pages)
    │   │   └───resource folder (Each specific resource folder with CRUD operations)
    │   |
    │   └───routes (Parent directory for react pages)
    │       └───index.js (Router structure & settings)
    │       └───private-routes.js (Private route configuration & settings)
    │   |
    │   └───styles (Director to wrap all style dependencies of the application)
    │           └───lib (Folder to all external library dependencies)
    │           └───common.css (Parent style sheet where application level common styles are mentioned)

## Deployment

- Staging Deployment: run command on terminal `npm run testdeploy`

## Testing Server

[Start Testing](http://extramile-dev.s3-website.ap-south-1.amazonaws.com)

## Developer Best Practice

- Maintain proper namespacing for folders, files, variable and function declarations.
- Format code using [Prettier](https://www.npmjs.com/package/prettier) package.
- Always create feature or bug branches and then merge with stable master branch.
- Provide proper commit messages & split commits meaningfully.
