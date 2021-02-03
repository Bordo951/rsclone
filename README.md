# Eisenhower Planner

Eisenhower Planner is build using Babel, PostCSS and Sass with a hot dev server and an optimized production build.

### Description
This planner allows you to schedule tasks and manage your time efficiently.It is a system that basically makes you separate all your activities into four priority levels, one of which(Not Important/Not Urgent) is immediately dropped, so really it’s only three categories of attention-worthy tasks to focus on.

### Authors

- [Anastasiya](https://github.com/fatykhava)
- [Angelika](https://github.com/kozlovaangelika)
- [Denis](https://github.com/denispostnikov)
- [Irina](https://github.com/Bordo951)

### Installation

Clone this repo and npm install.

```bash
npm i
```

### Development server

```bash
npm run start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

### Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

### Dependencies

- `@babel/core`
- `@babel/plugin-proposal-class-properties`
- `@babel/preset-env`
- `babel-loader`
- `clean-webpack-plugin`
- `copy-webpack-plugin`
- `cross-env`
- `css-loader`
- `css-minimizer-webpack-plugin`
- `html-loader`
- `html-webpack-plugin`
- `jquery`
- `mini-css-extract-plugin`
- `node-sass`
- `postcss-loader`
- `postcss-preset-env`
- `sass-loader`
- `style-loader`
- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `webpack-merge`

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
