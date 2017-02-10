# Automatizace	

You can write everything front-end related manually. You don't even need anything else than a basic text editor.

But the right tools can save incredible amount of time and even though it takes some time to learn them and to set them up, it's well worth for proffesionals.

----

## Introduction to Front end devstack

### What will be the result?

We're going to set up a base for front-end development environment, that will save you probably hours of repetitive work just in the duration of this course.

And we'll do that with only one task, that will free you from endless page reloading in browser to see your changes.

During the course, we'll add more and more automation to your work, because our time and brains are too precious to waste them on something, that computers can already do better and faster.


---

## Node.js and npm

----

### Node.js

Node.js is a Javascript runtime to run programs written in Javascript programming language on your computer (not in a browser).

----


### Install Node.js

Download and install the lastest *Node.js* (7.4.0) from the [official website](https://nodejs.org/en/).

----

### npm

Along with *Node.js* you installed its package manager *npm*.

You can use it to install software packages that use *Node.js* to run.

Best way is to save information about used packages is to save them in `package.json` file.

----


### Create `package.json`

1.  Open Command Prompt / Terminal
1.  Navigate to the folder we created
1.  Open Command Prompt as an Administrator (PC) / Terminal (Mac)
1.  On command line type `npm init`
1.  Just follow the instruction and the *package.json* file will be created.

---


## Gulp

----

Gulp is a software, that runs tasks to save developer's time.

These tasks are written in javascript.

----


### Install the *gulp* command using *npm*

```shell
npm install gulp-cli -g
```

`-g` parameter makes the installation global, which means you don't have to install it again and again in every project

On Mac you might need it to prefix this with *sudo* command.

On Windows, close the Command Prompt and open it again as an Administrator. It's necessary because Command Prompt isn't aware of changes made during the installation.

----


### Install *gulp* as a *devDependency*

```shell
npm install gulp -D
```

`-D` parameter saves it to `package.json` we created earlier as a *devDependency*

----

### gulpfile.js

When you run `gulp` command, it looks for `gulpfile.js` and searches it for tasks to run.

----


### Create gulpfile.js

```javascript
    // this is a javascript line comment, everything after two slashes is not doing anything
    // line comments end with end of the line, so the next line is not commented out and is executed

    // load gulp
    var gulp = require('gulp');

    // define a task
    gulp.task(
        // name of the task
        'default', // task named default is ran by default
        // the second parameter is a function that contains everything that the task will do
        function() {
            console.log('Hello World'); // this just prints 'Hello world'
        }
    );
```

Now you can run your first *gulp* task.

```shell
gulp
```

---

## Browsersync

----

Browsersync is a software to make development faster and easier by refreshing browser automatically or injecting CSS.

----


### Install Browserync and save it to `package.json`

```shell
npm install browser-sync -D
```

Check `package.json`. You should se there line with browser-sync.

----


### Add *Browsersync* to `gulpfile.js`

To run *Browsersync* with *gulp*, you need to add to the `gulpfile.js`

#### First load it

```javascript
var browserSync = require('browser-sync').create();
```

#### Simply replace console.log… with the following code.

```javascript
browserSync.init({ // initalize Browsersync
        // set what files be served
        server: {
            baseDir: './' // serve from folder that this file is located
        },
        files: ['*.html'] // watch for changes all files named *anything*.css and *anything*.html in the same folder `gulpfile.js` is located
    });
```

----

#### If you're unsure about the result, your `gulpfile.js` content should look like this


```javascript
// this is a javascript line comment, everything after two slashes is not doing anything
// line comments end with end of the line, so the next line is not commented out and is executed

// load gulp
var gulp = require('gulp');
// load Browsersync
var browserSync = require('browser-sync').create();

// define a task
gulp.task(
    // name of the task
    'default', // task named default is ran by default
    // the second parameter is a function that contains everything that the task will do
    function() {
        browserSync.init({ // initalize Browsersync
            // set what files be served
            server: {
                baseDir: './' // serve from folder that this file is located
            },
            files: ['*.html'] // watch for changes all files named *anything*.css and *anything*.html in the same folder `gulpfile.js` is located
        });
    }
);
```

----

### Run Browsersync

Because we added Browsersync to the default task, all that is needed is to run

```shell
gulp
```

* position windows so you can see both editor and the browser
* try changing heading color
* try changing heading text

----

### Usage

Now you can just run `gulp` and browser will open with appropriate address which is *http://localhost:3000*

It will show you your `index.html` because if no file is specified, `index.html` is shown.

You can open any file you have in the folder and *Browsersync* will work with it.

Example: `example.html` will be available at *http://localhost:3000/example.html*.

Press <kbd>ctrl+c</kbd> or <kbd>cmd+c</kbd> to stop *gulp* from running.

----

### Repeatibility

You can share and reuse package.json file for your other projects: just type `npm install` wherever you place (copy) the file to install everything needed. Then just run `gulp`

---


# Automatizace 2: CSS

Automatické znovunačítání HTML při změně je fajn, ale co Browsersync umí opravdu skvěle, je vložení změněného CSS a to dokonce bez obnovování celé stránky.
  
Aby to fungovalo, stačí tam, kde máš v `gulpfile.js` napsáno `['*.html']` přidat ještě CSS soubory takto: `['*.html','*.css']` Takhle se v Javascriptu definuje další položka pole (array), je to vlastně stejné jako seznam (list) v Pythonu. 
