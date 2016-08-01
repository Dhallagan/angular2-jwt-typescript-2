# Angular 2 TypeScript Web Client Application: With REST API via jwt token auth

[![Build Status](https://travis-ci.org/dantullis/angular2-jwt-typescript-2.svg?branch=master)](https://travis-ci.org/dantullis/angular2-jwt-typescript-2)

Angular2 / TypeScript front-end web application. Connects to separate back-end server for authentication and secure REST API calls via Jason Web Token. This is an upgrade from https://github.com/dantullis/angular2-jwt-typescript-1.git. This front-end project has a command to build the project for deployment. It is based off of Angular CLI, with some adjustments for the new Router and the New Forms API.

### TECHNOLOGIES:
- Angular 2: (https://angular.io/)
- Bootstrap: (http://getbootstrap.com/)
- HTMLHint:(https://github.com/yaniswang/HTMLHint)
- JWT:(https://jwt.io/)
- New Angular Forms:(https://angular.io/docs/ts/latest/guide/forms.html)
- New Angular Router:(https://angular.io/docs/ts/latest/guide/router.html)
- TSLint:(https://palantir.github.io/tslint/)
- TypeScript:(http://www.typescriptlang.org/)

### FEATURES:
* Catch syntax issues inline with TypeScript, TSLint, and HTMLHint
* Authenticate with back-end server
* Jason Web Token stored in Local Storage
* Build product for production deployment
* New Router implementation
* New Forms API implementd

### REQUIREMENTS:
You will need to install the following tools:

- Git - For source repository access. This is a good resource on how to install and use: (https://help.github.com/articles/set-up-git/#platform-all)
- Node.js - Used to run a development web server, run tests, and generate distributable files. (https://nodejs.org/en/)
- A TypeScript editor - I have tried several but have really liked Visual Studio Code. (https://code.visualstudio.com/Download) or (https://en.wikipedia.org/wiki/TypeScript#IDE_and_editor_support)

### SETUP / INSTALL:
- Follow instructions to install Node.js, pay attention to permissions

To install project dependencies open a console / terminal and run the following:
```
npm install
```

### START / RUN PROJECT:
1. Make sure your REST API back-end server is up and running. Here is one that yo ucan use: (https://github.com/dantullis/spring-sec-rest-jwt-2.git)

2. Start the front-end web server by opening a new console / terminal tab and run:
```
ng serve
```
In a web browser navigate to: (http://localhost:4200). The app will automatically reload if you change any of the source files.

### LINT PROJECT:
You can lint files in the project. A linter is a small program that checks code for stylistic or programming errors. We will be alble to lint the TypeScript files with tslint. We will be able to lint the html files with htmlhint.
```
ng lint
```

```
npm run htmlhint
```

### ADDITIONAL COMMANDS:

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### NEXT STEPS:
TBD

### CREDITS: 
These projects will build on parts of the fine work found in the following places:

(https://github.com/angular/angular-cli)

(https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.1atlsvhw1)

(https://github.com/brandonroberts)

(http://plnkr.co/edit/gQcyGu?p=preview)


License
----

MIT