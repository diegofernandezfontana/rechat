# My Project

This project is a Vite-powered web application using React, TypeScript, and Material-UI. It also utilizes Vitest for testing and ESLint for linting.

## Getting Started

Before you start, make sure you have [Node.js > 16](https://nodejs.org/) installed on your machine.

To get started, first clone the repository and install the dependencies:

```bash
git clone https://github.com/diegofernandezfontana/rechat
cd rechat
npm install
or
yarn
```

## To run the project in dev mode with npm or yarn:

```bash
npm run dev
or
yarn dev
```

This will open it on the [browser on port 5173](http://localhost:5173/)

## Testing:

This project is using vitest as a runner and the only test's are using React testing Library

```bash
npm run test
or
yarn test
```

## For building

the application you can run the following commands:

```bash
npm run build
or
yarn build
```

This can be easly extended [vite build](https://vitejs.dev/guide/build.html)

Final notes, on what can be improved and how would I improve.

- Configure eslint+prettier, right now there is an availalbe command `yarn lint`. This can and should be extended for a production like app.
- Extend tests, there is a only a very small unit test. Testing the domain could be highly valuable, since this is decoupled from the UI.
- Improve imports
- Extend build config for optimization.
