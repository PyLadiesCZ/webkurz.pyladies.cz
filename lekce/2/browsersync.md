# Flask a Browsersync

----

Od začátku lekce platí, že pokud chceme vidět změny, které jsme provedli v našich
souborech, musíme jít do prohlížeče a obnovit stránku. Z minulých lekcí ale víme,
že s nástrojem Browsersync to není nutné.

Aby Browsersync správně fungoval s Flaskem, musíme změnit jeho konfiguraci
v souboru `gulpfile.js`:

```js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;

gulp.task('runserver', function() {
  var proc = exec('python web.py');
});

gulp.task('default', ['runserver'], function() {
  browserSync({
    proxy: '127.0.0.1:5000'
  });
  gulp.watch([
    'templates/*.*',
    'static/*.*',
  ], browserSync.reload);
});
```

První část znamená, že když napíšeme `gulp runserver`, spustí Gulp náš vývojový server
z Flasku. Vlastně udělá totéž, jako jsme dělali my, když jsme psali `python web.py` do konzole.

V části označené jako `default` Gulp nejdřív jakoby zavolá `gulp runserver`, čímž spustí
Flask server, a potom se na něj pokusí napojit (to je ten řádek s `proxy`). Zbytek znamená,
že Gulp bude sledovat soubory jakéhokoliv typu ve složkách `templates` a `static` a pokud se
něco změní, automaticky obnoví stránku i v prohlížeči.

Nyní už nebudeme naši Flask aplikaci pouštět přes `python web.py`, ale napíšeme pouze `gulp`.
Mělo by se vše správně načíst a naše stránka rovnou otevřít v prohlížeči.
