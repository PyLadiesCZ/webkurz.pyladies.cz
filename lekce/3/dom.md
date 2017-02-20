# DOM

----

Jak bylo už zmíněno, JavaScript umí přistupovat k HTML prvkům na stránce a měnit je. Jak to funguje?

Prohlížeč přečte HTML a zobrazí všechny tagy uživateli. Zároveň ale pro každý tag vytvoří i JavaScriptový objekt, se kterým můžeš pracovat ve svém programu. Pokud na něm uděláš jakékoliv změny, prohlížeč je okamžitě aplikuje i v tom, jak tag zobrazuje.

Tomuto systému se říká DOM, _Document Object Model_. Tato lekce tě naučí, jak s ním lze pracovat.

---

## První příklad

----

Vytvoř si HTML stránku s několika tagy a připojeným souborem `dom.js`:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>PyLadies</title>
        <script src="dom.js"></script>
    </head>
    <body>
        <h1>PyLadies</h1>
        <p></p>
    </body>
</html>
```

Náš první JavaScriptový program, který pracuje s DOMem, bude vypadat následovně:

```js
function addText() {
    var tags = document.getElementsByTagName('p');
    var p = tags[0];
    p.innerText = 'JavaScript je fajn!';
}
window.onload = addText;
```

V JavaScriptu je několik objektů, které máš k dispozici kdekoliv ve svém programu a proto se jim říká _globální_. Zpřístupňují určité věci z prohlížeče. S&nbsp;objektem `window` ses již setkala, ten představuje okno prohlížeče (nebo spíš prohlížeč jako takový). K tagům na stránce se můžeš dostat přes jiný globální objekt, `document`.

Jeho metoda `getElementsByTagName()` přijímá název tagu a vrátí pole všech tagů toho názvu, jaké najde na stránce. My víme, že máme na stránce jeden tag s názvem `p`, tak si z pole vytáhneme první prvek a změníme mu následně text, který obsahuje. To se dělá přiřazením do vlastnosti `innerText`.

---

### Čekání na prohlížeč

----

Kód, který manipuluje s DOMem, je dobré spouštět až ve chvíli, kdy má prohlížeč celé HTML přečtené a všechny tagy zobrazené. Když se prohlížeč snaží zobrazit HTML stránku, čte totiž HTML tagy postupně, shora dolů. JavaScript připojujeme ke stránce dřív, než se na ní vyskytuje tag `<p></p>`, takže by se mohlo stát, že v době spuštění našeho programu ještě prohlížeč o žádném `p` nebude vědět. Potom by metoda `getElementsByTagName('p')` mohla vrátit prázdné pole a program by nefungoval.

Naštěstí lze tomuto předejít. Ve chvíli, kdy má prohlížeč celou stránku zpracovanou, spustí funkci, která bude přiřazená do vlastnosti `windows.onload`. Toho je využito i v příkladu výše.

---

### Zobrazení změn v DOMu

----

Když si načteme stránku, objeví se nadpis a odstavec s naším dynamicky doplněným textem.

<div class="c-example">
<h1>PyLadies</h1>
<p>JavaScript je fajn!</p>
</div>

Když se podíváš do zdrojového kódu stránky (<kbd>Ctrl + U</kbd>, popřípadě <kbd>Cmd + Alt + U</kbd>), uvidíš stále své původní HTML, kde je `<p></p>` prázdné:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>PyLadies</title>
        <script src="hello.js"></script>
    </head>
    <body>
        <h1>PyLadies</h1>
        <p></p>
    </body>
</html>
```

Pokud bys chtěla vidět i změny, které provedl JavaScript, musíš si v prohlížeči otevřít vývojářské nástroje a přepnout se v menu na _Elements_.

<figure class="image"><img src="live-dom.png" style="max-height:70vh;width:auto;" alt="DOM naživo"></figure>

---

## Hledání prvků na stránce

----

### getElementsByTagName()

Tuto metodu už sis vyzkoušela. Hodí se, pokud chceš nějakým způsobem upravit např. všechny prvky stejného typu na stránce. Vrací pole objektů pro všechny nalezené tagy.

```html
<h1>O Popelce<h1>
<h2>Mluvila na zvířátka<h2>
<p>Doktor diagnostikoval samomluvu.</p>
<h2>Převlékala se za jiné lidi<h2>
<p>Podezření na mnohočetnou poruchu osobnosti.</p>
```

```js
// vrátí objekty pro všechny <h2>
document.getElementsByTagName('h2');
```

### getElementsByClassName()

Metoda vrací všechny tagy na stránce, které mají danou třídu.

```html
<ul>
    <li class="odd first">první</li>
    <li class="even">druhý</li>
    <li class="odd">třetí</li>
    <li class="even">čtvrtý</li>
</ul>
```

```js
// vrátí objekty pro první a třetí <li>
document.getElementsByClassName('odd');
```

### getElementById()

Kromě tříd lze tagům přiřadit i tzv. ID, tedy nějaký identifikátor. Ten musí být v rámci jedné HTML stránky jedinečný. Metoda, která hledá tagy podle ID, tedy nevrací pole, ale právě jeden výsledek.

```html
<h1>O Popelce<h1>
<div id="kapitola-mluvila-na-zviratka">
    <h2>Mluvila na zvířátka</h2>
    <p>Doktor diagnostikoval samomluvu.</p>
</div>
<div id="kapitola-prevlekala-se-za-jine-lidi">
    <h2>Převlékala se za jiné lidi<h2>
    <p>Podezření na mnohočetnou poruchu osobnosti.</p>
</div>
```

```js
// vrátí druhý tag <div>
var id = 'kapitola-prevlekala-se-za-jine-lidi';
document.getElementById(id);
```

### querySelector(), querySelectorAll()

S těmito metodami můžeme použít na hledání tagů celý CSS selektor.

```html
<h1 class="heading">O Popelce<h1>
<div>
    <h2 class="heading">Mluvila na zvířátka</h2>
    <p>Doktor diagnostikoval samomluvu.</p>
</div>
```

```js
// vrátí objekt pro právě jeden tag, nadpis <h2>
document.querySelector('div .heading');

// vrátí objekt pro právě jeden tag, nadpis <h1>
document.querySelector('.heading');

// vrátí pole objektů, nadpisy <h1> a <h2>
document.querySelectorAll('.heading');
```

---

## Měníme DOM

----

### změnit/přidat/odebrat třídy
čímž dostanou možnost vizuálně čarovat s tím

----

### Změnit nějaký kus HTML (vygenerovat/upravit/smazat)

---

## Knihovna jQuery

----

Dnes prohlížeče interpretují JavaScript každý vcelku stejně a navíc už existuje spousta užitečných metod na práci s DOMem. Jenže za dávných časů tomu tak nebylo. Svět programování v prohlížeči připomínal spíše nebezpečný divoký západ.

Jeden z kovbojů, John Resig, se pokusil o nastolení pořádku a vytvořil knihovnu [jQuery][], která se snažila práci s DOMem usnadnit a také ji sjednotit mezi jednotlivými prohlížeči. Získala si obrovskou popularitu mezi lidmi po celém světě a ovlivnila i vývoj jazyka samotného. Třeba metody `querySelector()` a `querySelectorAll()` v dnešním JavaScriptu jsou jednoznačně dědictvím jQuery.

Ačkoliv je jQuery stále to první, po čem mnoho lidí sáhne, dá se dnes již pohodlně programovat i bez této knihovny. Jednoznačně ale stále patří mezi základní okruh znalostí frontendového vývojáře. Je dobré vědět, že jQuery existuje, tušit, jak kód v jQuery vypadá, a umět jej alespoň trochu číst.

[jQuery]: https://jquery.com/

TBD

---

<!--
nejaky priklady a zakladni srandy ve vanilla js, ktery dneska uz umi skoro vsechno co jquery... pak zminit ze existuji veci, na ktery se muzou podivat dal - jquery, pripadne nejaky dnesni srandy

ale pak začít (asi) se základní magií, tedy vybrat prvek/prvky a změnit/přidat/odebrat třídu
čímž dostanou možnost vizuálně čarovat s tím

asi bych si představoval pak ukázat jQuery (možná v ní jen napsat skoro to samé)
-->
