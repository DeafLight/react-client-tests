Initialize the project
npm init -y

Declare the folder as a Typescript project by creating a tsconfig.json file
- watch : compiles each time a file changes
- compileOnSave : compiles each time a file changes. Not handled by VSC, only VS and atom. Leaving it here for reference
- declaration : generates typings during compilation. How to avoid duplicate identifiers without having to maintain a tsconfig files list for instance ?

To be able to compile on save, create a basic tasks.json file

Install jspm to manage the packages
According to the doc (http://jspm.io/docs/getting-started.html), better to install jspm locally to be able to lock jspm version
npm install jspm --save-dev

Initialize jspm. Default options, except for the use of a transpiler, not needed here as TS already compiles to ES5
jspm init

Create a .gitignore file to exclude some files from versioning.
Typically, /node_modules, /jspm_packages and maybe the folder holding all generated files

To simply serve static files, just install http-server
npm install http-server -g

whatwg-fetch : polyfill for fetch (available in chrome). Waiting to use it

Install typings for d.ts files
npm install typings -g

Install React
jspm install react react-dom

Some errors due to typings:
https://github.com/blakeembrey/popsicle/issues/39
https://github.com/Microsoft/TypeScript/issues/6427
Wait and see

Install React typings
typings install dt~react dt~react-dom --save --global
