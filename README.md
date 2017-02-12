# webkurz.pyladies.cz


## Install

With node.js installed run

```shell
sudo npm i gulp-cli -g
```

```shell
npm i
```


## Development

Enjoy automatic refreshing of everything by running.

```shell
gulp develop
```

## Content writing

There is no automatic generation of pages. You have to specify which .md file get's loaded where and all the links.

Top sections are divided by `\n---\n` while subsections are divided by `\n----\n`.
 
For tasks add `<!-- .slide: data-state="c-slide-task" -->` at the beggining of the section.

Put HTML examples into `<div class="c-example example-foo">` where `example-foo` is a name of your choice and add styling to `examples.scss` file.



## Deployment

With installed surge client (`npm i surge -g`) run

```shell
gulp deploy
```

Note: you need to have access to surge account (just ask Dan Srb).
