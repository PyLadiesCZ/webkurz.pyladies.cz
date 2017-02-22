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
     	<meta charset="UTF-8">
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
function pridejText() {
    var odstavce = document.getElementsByTagName('p');
    var prvniOdstavec = odstavce[0];
    prvniOdstavec.innerText = 'JavaScript je fajn!';
}
window.onload = pridejText;
```

V JavaScriptu je několik objektů, které máš k dispozici kdekoliv ve svém programu a proto se jim říká _globální_. Zpřístupňují určité věci z prohlížeče. S&nbsp;objektem `window` ses již setkala, ten představuje okno prohlížeče (nebo spíš prohlížeč jako takový). K tagům na stránce se můžeš dostat přes jiný globální objekt, `document`.

Jeho metoda `getElementsByTagName()` přijímá název tagu a vrátí pole všech tagů toho názvu, jaké najde na stránce. My víme, že máme na stránce jeden tag s názvem `p`, tak si z pole vytáhneme první prvek a změníme mu následně text, který obsahuje. To se dělá přiřazením do vlastnosti `innerText`.

---

### Čekání na prohlížeč

----

Kód, který manipuluje s DOMem, je dobré spouštět až ve chvíli, kdy má prohlížeč celé HTML přečtené a všechny tagy zobrazené. Když se prohlížeč snaží zobrazit HTML stránku, čte totiž HTML tagy postupně, shora dolů. JavaScript připojujeme ke stránce dřív, než se na ní vyskytuje tag `<p></p>`, takže by se mohlo stát, že v době spuštění našeho programu ještě prohlížeč o žádném `p` nebude vědět. Potom by metoda `getElementsByTagName('p')` mohla vrátit prázdné pole a program by nefungoval.

Naštěstí lze tomuto předejít. Ve chvíli, kdy má prohlížeč celou stránku zpracovanou, spustí funkci, která bude přiřazená do vlastnosti `window.onload`. Toho je využito i v příkladu výše.

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
     	<meta charset="UTF-8">
        <title>PyLadies</title>
        <script src="dom.js"></script>
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

----

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

----


### getElementById()

Kromě tříd lze tagům přiřadit i tzv. ID, tedy nějaký identifikátor. Ten musí být v rámci jedné HTML stránky jedinečný, tedy dva prvky nesmí mít stejné ID. 

Metoda, která hledá tagy podle ID, tedy nevrací pole, ale právě jeden výsledek.

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

#### Identifikátor

Malá odbočka: atribut `id` se dá použít i pro odkazování na část stránky.

Odkaz v rámci jedné stránky na nadpis z příkladu výše by vypadal takto:  

```html
<a href="#kapitola-mluvila-na-zviratka">…</a>
```
Kdybychom odkazovali z jiné stránky a tato se jmenovala `o-popelce.html`, vypadalo by to takto.

```html
<a href="o-popelce.html#kapitola-mluvila-na-zviratka">…</a>
```

Po otevření takového odkazu, prohlížeč odskroluje stránku tak, aby byl vidět začátek elementu s daným ID.

ID lze použít i v selektorech v CSS `#nejake-id { color: red; }`, ale má to spoustu nevýhod a proto to se tomu vyhni. 

----

### querySelector(), querySelectorAll()

S těmito metodami můžeme použít na hledání tagů celý CSS selektor.

```html
<h1 class="nadpis">O Popelce<h1>
<div>
    <h2 class="nadpis">Mluvila na zvířátka</h2>
    <p>Doktor diagnostikoval samomluvu.</p>
</div>
```

```js
// vrátí objekt pro právě jeden tag, nadpis <h2>
document.querySelector('div .nadpis');

// vrátí objekt pro právě jeden tag, nadpis <h1>
document.querySelector('.nadpis');

// vrátí pole objektů, nadpisy <h1> a <h2>
document.querySelectorAll('.nadpis');
```

----

<!-- .slide: data-state="c-slide-task" -->

## Cvičení

Jdi na stránky [pyladies.cz](http://pyladies.cz/), otevři si v prohlížeči konzoli a zkoušej vybírat různé prvky na stránce. Jako první můžeš zkusit najít například všechny odkazy, které se nacházejí v menu:

```js
document.querySelectorAll('.nav a');
```

Kolik jich je na stránce? Délka pole se dá zjistit přes vlastnost `length`:

```js
document.querySelectorAll('.nav a').length;
```

Kolik je na stránce obrázků `<img>`?

---

## Reagujeme na události

----

V JavaScriptu existují tzv. události (angl. _event_), na které může tvůj program čekat a když se stanou, může něco vykonat. Je to dobré na to, abys mohla stránku ovlivňovat i v jiný okamžik, než když se načte.

Už jsi se setkala s událostí `window.onload`. Vlastnost `onload` je ale jen taková zkratka. Standardně se s událostmi pracuje následovně:

```js
function poNacteni() {
    console.log('Načetla se stránka!');
}
window.addEventListener('load', poNacteni);
```

Tedy na objektu, u kterého chceš na událost číhat, použiješ metodu `addEventListener()` se dvěma parametry, a to názvem události a funkcí, která má událost obsloužit, když nastane. Zajímavější událost může vypadat takto:

```html
<input type="submit" value="Klikni na mě">
```

```js
function vystrasUzivatele() {
    window.alert('Baf!');
}

function poNacteni() {
    var cudlik = document.querySelector('input');
    cudlik.addEventListener('click', vystrasUzivatele);
}

window.addEventListener('load', poNacteni);
```

Na stránce máš tlačítko. Samo o sobě nic nedělá, protože není ve formuláři. Pomocí JavaScriptu ale můžeme nastavit, že pokud na něj uživatel stránek klikne (událost `click`), spustí se tvoje funkce `vystrasUzivatele()`. Celý kód pak bylo opět potřeba spustit až ve chvíli, kdy na objektu `window` proběhne událost `load`.

----

<!-- .slide: data-state="c-slide-task" -->

## Cvičení

Událostí je na stránce k dispozici [mnoho][events-doc]. Zkus vymyslet, jak bys mohla využít událost `keyup` (uživatel stiskl libovolnou klávesu) s tagem `<textarea>`.

[events-doc]: https://developer.mozilla.org/en-US/docs/Web/Events

---

### Anonymní funkce

----

Program, který je v předešlé sekci, by se dal zapsat i následovně:

```js
window.addEventListener('load', function () {
  var cudlik = document.querySelector('input');

  cudlik.addEventListener('click', function () {
      window.alert('Baf!');
  });
});
```

V JavaScriptu lze totiž funkce vytvářet i bez toho, abychom jim dávali jméno. Jsou to potom tzv. _anonymní funkce_, jednorázové.

---

## Měníme DOM

----

### Změna třídy

Umět změnit třídu HTML tagu je zásadní, protože tím můžeš ovlivnit, jaká CSS pravidla se na něj budou aplikovat. Ulož si následující HTML:

```html
<!DOCTYPE HTML>
<html>
    <head>
    	<meta charset="UTF-8">
        <title>PyLadies</title>
        <script src="dom.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>
            Žilo jednou jedno děvčátko
            a to dostalo od babičky
            k narozeninám dárek – červenou
            čepičku. Rádo ji nosilo, a proto
            jí říkali Červená karkulka.
        </p>
    </body>
</html>
```

Do připojeného souboru `dom.js` vytvoř program, který přidá odstavci třídu `red`, pokud na něj uživatel stránky najede kurzorem:

```js
window.addEventListener('load', function () {
    var odstavec = document.querySelector('p');

    odstavec.addEventListener('mouseover', function () {
        odstavec.className = 'red';
    });

    odstavec.addEventListener('mouseout', function () {
        odstavec.className = '';
    });
});
```

Když si stránku načteš v prohlížeči a zkusíš jezdit kurzorem na odstavec a z něj, neuvidíš žádnou změnu. Ale pokud si otevřeš vývojářské nástroje a přepneš se na záložku _Elements_, uvidíš, že se hodnota atributu `<p class="...">` s pohybem kurzoru mění.

Možná sis všimla, že k HTML v tomto příkladu byl připojen i CSS soubor `style.css`, ale ten zatím neexistuje. Vytvoř ho tedy a přiřaď v něm třídě `red` nějaké vlastnosti.

```css
p {
    padding: 10px;
    background-color: skyblue;
}

.red {
    background: red;
    color: white;
}
```

Aby se po odstavci trochu lépe jezdilo myší, přidali jsme mu nějakou vnitřní výplň po okrajích (`padding`) a pozadí, aby bylo vidět, kde končí. Nyní zkus stránku obnovit v prohlížeči. 
Najetí a odjetí kurzoru myši by mělo měnit barvu odstavce.

----

### Více tříd

Často elementy nemají jen jednu třídu, ale několik. 
Vlastnost `className` je potom poněkud nepraktická:

```html
<p class="big warning">Nesahat!</p>
```

```js
var odstavec = document.querySelector('p');
console.log(odstavec.className); // 'big warning'
```

Proto je v moderních prohlížečích k dispozici i jiný způsob pro práci s třídami:

```js
var odstavec = document.querySelector('p');
console.log(odstavec.classList); // ['big', 'warning']
```

[Vlastnost `classList`][classlist] má navíc metody na přidávání (`add`), odebírání (`remove`). 
Metoda `toggle` dělá to co `add`, pokud třída není a to co `remove`, když třída je.

Metoda `contains` pak vrací `true` nebo `false` podle toho, zda element třídu má nebo ne, to se může hodit třeba pro zjištění, v jakém stavu nějaký prvek je. 

```js
var odstavec = document.querySelector('p');

odstavec.classList.add('red'); // ['big', 'warning', 'red']

odstavec.classList.remove('big'); // ['warning', 'red']

odstavec.classList.toggle('warning'); // ['red']
odstavec.classList.toggle('warning'); // ['warning', 'red']

odstavec.classList.contains('big'); // false
```

[classlist]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


---

<!-- .slide: data-state="c-slide-task" -->

## Cvičení 

----

<!-- .slide: data-state="c-slide-task" -->

Přechozí příklad, kdy jsi měnila třídu přímo na prvku by šel snadněji udělat jen pomocí CSS takto:

```css
p {
    padding: 10px;
    background-color: skyblue;
}

p:hover {
    background: red;
    color: white;
}
```

Co by ale jen pomocí CSS udělat už nešlo, je tlačítko, na které klikneš a změní se barva jiného prvku.

----

<!-- .slide: data-state="c-slide-task-solution" -->

### Řešení

Přidej si tedy do dokumentu tlačítko:

```html
<!DOCTYPE HTML>
<html>
    <head>
    	<meta charset="UTF-8">
        <title>PyLadies</title>
        <script src="dom.js"></script>
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
    </body>
</html>
```

JavaScript, který na klik bude přidávat a odebírat třídu a tedy měnit vzhled odstavce bude vypadat takto:

```js
window.addEventListener('load', function () {
	var cudlik = document.querySelector('input');
	var odstavec = document.querySelector('p');

	cudlik.addEventListener('click', function () {
		odstavec.classList.toggle('red');
	});
});
```

Pro zajímavost, úplně stejnou funkčnost by měl i tento kód. 

```js
window.addEventListener('load', function() {
    document
        .querySelector('input')
        .addEventListener('click', function() {
            document
                .querySelector('p')
                .classList
                .toggle('red');
        });
});
```

Pro větší přehlednost je před tečkou zalomeno a odsazeno. 