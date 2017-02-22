# Automatizace    

Celý web můžeš napsat ručně a nepotřebuješ k tomu nic jiného, než základní textový editor, ale jsou tu nástroje, které ti ušetří spoustu času a i když dá nějakou práci se je naučit a nakonfigurovat, dlouhodobě se to vyplatí. 

Rozchodíme si tedy základní automatizaci, která ti ušetří ruční opakování stále stejných úkolů.

----

## Automatické obnovení stránky 

Nejčastějším úkonem při psaní frontendu je asi obnovování stránky v prohlížeči. Po každé změně se musíš přepnout do prohlížeče a stránku obnovit. To je nejen otravné, ale i pomalé.

Nástroj, který umí stránku obnovit za tebe tak, že v podstatě okamžitě po uložení změnu uvidíš, se jmenuje _Browsersync_.

---

## _Node.js_ a _npm_

----

### Node.js

Protože je _Browsersync_ napsaný v _JavaScriptu_, potřebuješ si nejdřív nainstalovat prostředí pro jeho běh na tvém počítači, které se jmenuje _Node.js_.

Stáhni si a nainstaluj si nejnovější _Node.js_ (aktuálně 7.5.0) z [oficiálních stránek](https://nodejs.org/).

Pokud používáš pro instalace balíčkovací systém (apt-get, Homebrew apod.), můžeš si Node.js nainstalovat přes něj ([najdi si návod pro ten tvůj](https://nodejs.org/en/download/package-manager/)).


----

### npm

Společně s _Node.js_ se ti nainstaloval i jeho balíčkovací systém (package manager) _npm_.

Používá se na instalaci balíčků (programů) pro _Node.js_. Taky je s jeho pomocí můžeš aktualizovat a odinstalovávat.

---

## Instalace _Gulp_

----

Teď už bys mohla nainstalovat _Browsersync_ a přes _Node.js_ ho spustit. Není to ale tak pohodlné jako využít _Gulp_, který je určen právě na spouštění takových úkolů.

Nainstaluj si tedy nejprve příkaz *gulp* pomocí *npm*:

Otevři si příkazovou řádku (na Windows jako Administrátor), a spusť příkaz `install` takto.

```shell
npm install gulp-cli -g
```

Parametr `-g` jeho instalaci udělá globální, to znamená, že gulp bude dostupný všude v tvém systému a nebudeš ho muset instalovat znovu. 

Na Macu je potřeba v tomto případě, tedy při globální instalaci, před celý příkaz dát ještě `sudo`.

Je možné, že při instalaci uvidíš nějaká varování `WARN …`, to je v pořádku. Problém je pouze pokdu se objeví chyba `ERR …`. V tom případě se zeptej kouče.

Po instalaci na Windows je potřeba zavřít a otevřít příkazovou řádku (raději znovu jako Administrátor). Je to nutné, protože o změnách, které proběhly v systému, ta otevřená nemá tušení.


Instalaci si můžeš ověřit pomocí spuštění příkazu `gulp`, tohle by měl být výsledek:

```shell
gulp
[11:55:00] Local gulp not found in …
[11:55:02] Try running: npm install gulp
```

Je třeba ještě nainstalovat lokální Gulp.

---

## `package.json`

Informace o tom, jaké balíčky má pro daný projekt _npm_ nainstalovat, se ukládají do souboru `package.json`. Je nejprve nutné ho vytvořit.

----

Mohla bys ho napsat ručně, je to textový soubor, ale znamenalo by to naučit se dost o jeho struktuře a nebudeme to potřebovat. Proto je snazší použít příkaz `init`, který na to v _npm_ je. 

1. Příkazovou řádku už máš otevřenou.
1. Otevři v ní složku, kde je tvůj `index.html`.
1. Zadej příkaz `npm init`.
1. Vyplň jednotlivé hodnoty. Na většině teď nezáleží, stačí potvrdit výchozí hodnotu Enterem. 
1. Nakonec ti ukáže jak *package.json* bude vypadat a potvrď opět Enterem jeho vytvoření.

---

## Instalace lokálního Gulpu

----

```shell
npm install gulp --save-dev
```

Parametr `--save-dev` zajistí, že se uloží informace do `package.json`. To se bude hodit později, až budeš chtít stejné balíčky použít v jiném projektu.

Všimni si, že ti vedle `index.html` přibyla složka `node_modules`, do které _npm_ ukládá všechny nainstalované balíčky. Pokud bys používala pro takový projekt _git_, určitě si přidej `node_modules` do `.gitignore`, je to spousta dat, která verzovat v gitu nechceš.

---

## `gulpfile.js`

Když spustíš příkaz `gulp`, hledá soubor `gulpfile.js` ve stejné složce, aby zjistil, jaké jsou v něm zadané úkoly, a spustil je.

----

Vytvoř si `gulpfile.js` ve stejné složce, kde máš `index.html`.

Úkoly v Gulpu se píšou v JavaScriptu, kterému se budeme věnovat v jedné z příštích lekcí, tak si zatím zkopíruj tuhle předpřipravenou konfiguraci, není potřeba rozumět každé závorce. Přesto v něm najdeš komentáře, které vysvětlují, co se v něm zhruba děje.

```javascript
// Tenhle řádek je řádkový komentář v JavaScriptu
// cokoli za // nic nedělá 

// načteme gulp
var gulp = require('gulp');

// nadefinujeme úkol
gulp.task(
    
    // nadefinujeme jméno úkolu
    'default', // úkol, který se jmenuje default se spouští implicitně
    
    // další parametr je funkce, která obsahuje vše, co má daný úkol udělat
    function() {
         // zatím do ní dáme jen javascriptový ekvivalent print,
         // vypíše do konzole Hello World
        console.log('Hello World');
    }
);
```

Teď si můžeš spustit první úkol v gulpu.

```shell
gulp
```

Vypsání _Hello World_ je dobré pro kontrolu, že vše funguje jak má, ale teď ho konečně nahradíme spuštěním _Browserync_.

---

## Browsersync

----


### Instalace 

Už známým příkazem nainstaluj Browsersync a ulož informaci do `package.json` 

```shell
npm install browser-sync --save-dev
```

----

### _Browsersync_ do `gulpfile.js`

Abys mohla spustit _Browsersync_ pomocí _gulpu_, musíme ho přidat do `gulpfile.js`


Nejdříve ho načti

```javascript
var browserSync = require('browser-sync').create();
```

A pak umísti celé spuštění Browsersyncu místo `console.log('Hello World')`

```javascript
browserSync.init({ // inicializace Browsersync
    // nastavit jaké soubory se budou používat
    server: {
        baseDir: './' // ./ znamená stejná složka, ve které se nachází gulpfile.js
    },
    files: ['*.html'] // zde se definují soubory, jejichž změnu má browsersync sledovat
});
```

Soubory ke sledování jsou pole (array), syntaxe je stejná jako list v Pythonu.

`*` znamená cokoli, takže bude sledovat změny v `index.html` i `necojineho.html`


Pokud si nejsi jistá, celý výsledek má vypadat takto (tento má vynechány komentáře).

```javascript
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task(
    'default',
    function() {
        browserSync.init({
            server: {
                baseDir: './'
            },
            files: ['*.html']
        });
    }
);
```

----

### Spusť Browsersync

Protože máš Browserync jako výchozí (default) úkol, stačí spustit takto 

```shell
gulp
```

Otevře ti automaticky v tvém výchozím prohlížeči adresu, typicky http://localhost:3000.

Uspořádej si okna editoru a prohlížeče tak, abys viděla obě a zkus si něco změnit změnit v `index.html`. Změny by se měly projevit okamžitě po uložení souboru.

Pokud máš i další soubory, například `example.html`, najdeš ho na adrese `http://localhost:3000/example.html`.

Pro ukončení běhu _gulpu_ zmáčkni <kbd>ctrl+c</kbd> v příkazové řádce.

----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Přidej si do sledování kromě HTML souborů i CSS soubory.

<details>
  <summary>Řešení</summary>
  <p>Tam, kde máš v `gulpfile.js` napsáno `['*.html']` přidej ještě CSS soubory takto: `['*.html','*.css']`</p>
</details>

Zkus si teď něco změnit v tvém CSS souboru. Browserync dokonce ani neobnovuje celou stránku, ale jen vymění CSS za nové.

----


## Opakovatelnost

Tvůj `package.json` si můžeš zkopírovat do jakéhokoli projektu a jen napsat `npm install` a vše potřebné se nainstaluje. Stejně tak si zkopíruješ `gulpfile.js` a pak už stačí spustit `gulp` a vše bude fungovat stejně.

Lze tak vše snadno sdílet se spolupracovníky pomocí gitu. Pokud by se stalo, že kolegyně přidá nový balíček, stačí opět napsat `npm install` a vše potřebné se nainstaluje.

 
