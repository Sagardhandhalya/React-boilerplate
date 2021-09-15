# react-boilerplate

front end boilerplate with react

## How to use

### project set up

```js
git clone -b main https://github.com/searce-labs/react-boilerplate.git
```

now cd into project folder and run this command.

```js
npm install
npm run start
```

your project is up and runnig. To support linting and formatting in vsCode you can install this extentions.[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Testing

to run test run

```js
npm run test
```

### code formatting

you can turn on formate on save functionality in vscode, and you can run this to formate your code.

```js
npm run formate
```

### Linting

vsCode will show lint error in problem section if you have installed ESlint extention, you can also run this command to check linting.

```js
npm run lint
```

### Build for production

to build production bundle use this command

```js
npm run build
```

## Implementtation Details that will help you to update template

### 1. React project with Typescript

you need 3 thing to run react project

1. [webpack](https://webpack.js.org/concepts/)
2. [babel](https://babeljs.io/)
3. [typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

all 3 has configuration file webpack.common.js,.babelrc and tsconfig.json you can edit this files to edit configuration.

> In the webpack folder we have 4 file so we can give configure dev and production environment from the script. here webpack.common.js file contain configuration that is common between both environment,and webpack.dev.js and webpack.prod.js is specific to that environment, when we run script we will use webpack.common.js as written in start script in package.json file, and then add other configuration depending on given environment.

### 2. Image,SVG and CSS loader for webpack

--- css file
We added babel-loader that teach webpack how to deal with TSX and ts file now we need to add loader for CSS and SVG do webpack can add those file into the bundle. So let add a loader for the CSS.

```js
npm i -D style-loader css-loader
```

For sass support use

```js
npm install sass-loader sass --save-dev
```

and add this rule.
{
test: /\.(css|scss)$/,
use: ['style-loader','css-loader','sass-loader'],
}

Now you can import CSS file into your component.

--- png git ico jpeg file

there is built-in support for all these file in webpack 5 you just have to add this file.

```js
{
test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
type : 'asset/resource'
}
```

---- SVG files
In webpack 4 you need to add a package for SVG but in webpack 5 you can use built in type asset/inline, for font also we can use this type add this rule.

```js
test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
type : 'asset/inline'
```

> Typescript will give error when you error when you import svg or png file so do solve it add a file in src folder custom.d.ts

content of the file will be

```js
declare module '*.svg'
declare module '*.png'
```

### 3. Linting [EsLint](https://eslint.org/docs/user-guide/getting-started)

These are the plugin you need to add Eslint with typescript in the project. install [this](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) vscode extention.

```js
npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y
```

after all this pkg is installed we can add .eslintrc.js file in root of the project and define the configuration in that file.

you can run this script to lint

```js
npm run lint
```

### 4. Code formatting prettier

To Add prettier install this pkg with command

```js
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

to edit config for prettier edit .prettierrc.js file.

install [this](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension and on formate on save setting in vscode.

### 5. Testing

install this pkgs to run test

```js
npm i -D  jest babel-jest react-test-renderer
```

we need babel jest to compile test file in lower version of java script and jest is core library and react test render is for snapshot render.

For dom testing, we need to add some react testing library utility

```js
npm i -D @testing-library/react
```

### 6. Add routing

```js
npm i react-router react-router-dom
```
