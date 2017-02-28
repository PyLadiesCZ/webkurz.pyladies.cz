# Knihovny

---

## Knihovna jQuery

----

Dnes prohlížeče interpretují JavaScript každý vcelku stejně a navíc už existuje spousta užitečných metod na práci s DOMem. Jenže za dávných časů tomu tak nebylo. Svět programování v prohlížeči připomínal spíše nebezpečný divoký západ.

Jeden z kovbojů, John Resig, se pokusil o nastolení pořádku a vytvořil knihovnu [jQuery][], která se snažila práci s DOMem usnadnit a také ji sjednotit mezi jednotlivými prohlížeči. Získala si obrovskou popularitu mezi lidmi po celém světě a ovlivnila i vývoj jazyka samotného. Třeba metody `querySelector()` a `querySelectorAll()` v dnešním JavaScriptu jsou jednoznačně dědictvím jQuery.

Ačkoliv se dnes dá mnoho věcí v prohlížeči programovat pohodlně i bez této knihovny, stále je mnohdy jQuery to první, po čem spousta lidí sáhne. Je to balíček základních věcí, díky kterým lze bez velkých znalostí rozpohybovat webové stránky.

Proto by se snad i dalo říci, že v jQuery umí pracovat víc lidí, než kolik jich doopravdy zná JavaScript. Jednoznačně tedy jQuery patří mezi základní okruh znalostí frontendového vývojáře. Je dobré vědět, že existuje, tušit, jak kód v jQuery vypadá, umět jej číst.

[jQuery]: https://jquery.com/

----

### Ukázka JavaScriptu s jQuery

Nejdříve je potřeba jQuery načíst. 
Jedna z možností je si soubor s jQuery stáhnout a připojit ho:


```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PyLadies</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <input type="submit" value="Přepni barvu">
        <p>
            Žilo jednou jedno děvčátko
            a to dostalo od babičky
            k narozeninám dárek – červenou
            čepičku. Rádo ji nosilo, a proto
            jí říkali Červená karkulka.
        </p>
        <script src="jquery-3.1.1.min.js"></script>
        <script src="dom.js"></script>
    </body>
</html>
```

Všimni si, že soubory s JavaScriptem dáváme až před uzavírací tag `</body>`. To je vhodnější způsob 
než v `<head>`, protože prohlížeč v takovém případě nečeká s vykreslením stránky na stažení JavaScriptu, které může znamenat pomalejší zobrazení pro uživatele.

Ostatní HTML už znáš z posledního cvičení v kapitole o DOM. Jak by vypadal JavaScript, který bude dělat to samé co v tomtéž cvičení, tedy měnit barvu elementu po kliku na tlačítko, ale s využitím jQuery?


```js
$(document).ready(function(){
    $('input').first().on('click', function(){
        $('p').first().toggleClass('red');
    })
});
```

Jen stručný popis toho, co se v kódu výš děje: `$(document).ready(function(){` je ekvivalent `window.addEventListener('load', function() {`, tedy ošetření toho, aby se kód spustil až když je DOM v prohlížeči připravený. 

Základem je funkce `$()`, která má jako parametr selektor, tedy ekvivalent `document.querySelectorAll()`, proto následuje metoda `.first()`, která dál předá jen první prvek, který byl nalezen pomocí selektoru. 

Metoda `.on()` přidává k elementu čekání na událost (event handler), tady konkrétně na `click`, na který se má vykonat anonymní funkce. Ta dělá jen dvě věci: opět pomocí funkce `$()` vybere všechny odstavce, z nich vezme jen první a odebere nebo přidá mu třídu `red`, podle toho, zda ji má nebo nemá přiřazenou. 

Pokud bys odebrala `.first()`, tak by to fungovalo pro stránku s jedním inputem a jedním odstavcem stejně. Pokud by ale stránka obsahovala víc inputů nebo odstavců, kód v jQuery bez použití `.first()` by se aplikoval na všechny inputy a všechny odstavce. V čistém JavaScriptu by taková funkčnost byla pracnější.


---

## Lightbox

----

Pro zvětšování obrázků se používá často tzv. lightbox, kdy z malého náhledu kliknutím otevřeš obrázek přes celé okno.

Není to jistě nejtěžší věc, kterou v JavaScriptu můžeš napsat, ale je zbytečné programovat něco, co už je v mnoha verzích hotovo. Hotové a mnoha lidmi používáné knihovny jsou navíc důkladně otestované mnoha lidmi a tedy odladěné a také mají kvalitní dokumentaci.


Klasickou knihovnou, která lightbox umí vytvořit je _Lightbox2_. Neobsahuje jen JavaScriptový kód, ale i potřebné obrázky a CSS.

----

### Obyčejné HTML


Nejdřív si vytvoř stránku, do které galerii přidáme.

Pěkné a velké obázky s vhodnou licencí najdeš na [Unsplash](https://unsplash.com/), několik si jich vyber a stáhni si do složky kde máš soubor s HTML.

Přidej si do HTML **odkazy** na jednotlivé obrázky.


```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Galerie</title>
    </head>
    <body>
        <h1>Galerie</h1>
        <p><a href="kocicka.jpg">Kočička</a></p>
        <p><a href="krajina.jpg">Krajina</a></p>
    </body>
</html>
```

----

### Lightbox2

Na stránce projektu [Lightbox2](http://lokeshdhakar.com/projects/lightbox2/) si stáhni vše v jednom archívu _zip_ a obsah složky `dist` si zkopíruj do složky, kde máš html a obrázky.

Dál můžeš postupovat podle návodu přímo na stránce knihovny.

Všimni si, že pro incializaci knihovny vlastně nepotřebuješ znát vůbec JavaScript i když pro pokročilejší konfiguraci chování se nějaká znalost hodí. 

Jde to protože se potřebná nastavení (co se má stát prvkem s lightbox efektem, které prvky tvoří galerii nebo jaký mají popisek) provádí přes atributy `data-`, které umožňují si nadefinovat pro prvky vlastní atributy a pak je lze číst třeba právě pomocí JavaScriptu, což Lightbox2 využívá.
