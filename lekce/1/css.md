# CSS

Posledně jsme si ukázali z CSS jen malou část. Dnes si znalosti CSS rozšíříme.

---

## Výchozí styly prohlížeče (User Agent stylesheet)

----

Každý prohlížeč má v sobě zabudované výchozí CSS.

Proto každý HTML dokument „bez CSS“ má nadpisy, které jsou tučně a větším písmem než odstavce. 

Tvoje CSS se aplikuje až za nimi a tak vlastně přepisuješ vlastnosti zabudované v prohlížeči.

---

## Vlastnosti textu

----

```css
p {
	font-style: italic;  /* nebo normal */

	font-weight: bold; /* nebo normal */

	font-family: sans-serif; /* nebo serif */

	text-align: center; /* nebo left nebo right */
}
```

----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus všechny použít na prvky v tvém `index.html`.

----

## Dědičnost (inheritance)

Rodič je element do kterého je nějaký element zanořen. Například rodičem `<body>` je  `<html>`.

Některé vlastnosti se dědí, tedy přenášejí z rodičů na potomky. Typicky jsou to právě ty, které nastavují vlastnosti textu. Nastavíš-li například druh písma pro `<body>`, nastavuješ ho v podstatě celému dokumentu.  
 
----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si zjistit a ověřit dědičnost vlastností, které jsme už probírali, v tvém dokumentu `index.html`.

----

## Velikost textu

Velikost písma můžeš nastavit pomocí spousty jednotek zatím si vystačíme s pixely (`px`) a procenty `%`, kdy se velikost určuje dle velikosti písma rodiče.

```css
h1 { font-size: 20px; }

p { font-size: 150%; }
```

---

## Barva pozadí

----

Barvu pozadí už nastavit umíš: 

```css
p {
    background-color: green;
}
```

Co ale když chceš přidat pozadí pod několik elementů zároveň? K tomu je potřeba přidat extra prvek.
Protože tento prvek nemá žádný jiný význam, použij `<div>`, prvek bez významu.

```html
<div>
    <h2>Nejnovější novinka</h2>
    <p>Dnes je spoustu nového…</p>
    <a href="detail.html">celá novinka</a>
</div>
```
----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

V tvém dokumentu `index.html` obal několik prvků do `<div>` a dej mu nějaké pěkné pozadí nebo třeba všem nastav jiné písmo jen s pomocí dědičnosti.

---

## Třídy

----

### Jak odlišit elementy?

```html
<p>A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```

Co kdybych chtěl zobrazit text odstavců modře?

```css
p { color: blue; }
```

Ale co kdybych chtěl udělat jen první odstavec modrý?

Řešením je přidat třídu, která umožňuje se zaměřit v CSS přesněji. Třída se v HTML přidává jako atribut `class`…

```html
<p class="tip">A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```
… a v CSS se zapíše s tečkou na začátku

```css
.tip { color: blue; }
```

----

### Třída lze použít pro více elementů

Třídu můžeš přiřadit libovolnému počtu prvků.


```html
<h1 class="tip">Tip</h1>

<p class="tip">A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```

```css
.tip { color: blue; }
```

Třída se tedy použije pokud má nějaký prvek speciální vlastnosti nebo se skupina vlastností opakuje a chceme si tak ušetřit opakovaný zápis v CSS.

----

## Vícenásobné třídy

Tříd můžeme jednomu prvku přiřadit více najednou, oddělujeme je mezerou.

```css
.tip { color: red; }
.cool { background-color: skyblue; }
```

```html
<p class="tip">Jsem Tip</p>
<p class="cool">Já jsem cool</p>
<p class="cool tip">Já jsem oboje, heč.</p>
```

----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Zkus si změnit stylování v tvém dokumentu pomocí elementů na stylování pouze pomocí tříd.  

---

# Box-model

Na stránce je každý element reprezentovaný jako obdélníková krabice. Tvar nemusí být vidět, ale je tam.

----

Podívej se na video, které velmi zpomaleně zachycuje vykreslování stránky v prohlížeči, tak jak si ji postupně skládá, je tam spousta krabic. 

<iframe data-autoplay width="100%" height="400px" src="https://www.youtube.com/embed/ZTnIxIA5KGw" frameborder="0" allowfullscreen></iframe>

---

## [box-sizing](https://devdocs.io/css/box-sizing)

----

`box-sizing` je vlastnost, která určuje jaký druh box-modelu použít. 

Ve většině případů chceš bohužel použít ten, který není v CSS v prohlížeči jako výchozí, proto hned na začátek tvého CSS dej následující kód.


```css
*, 
*:before, 
*:after { 
	box-sizing: border-box; 
}
```

Vysvětlení jaký je rozdíl nechme na později, teď jen chceme aby to prohlížeč vykresloval tak, jak potřebujeme.

Hvězdička `*` je selektor, který znamená libovolný element. Co znamená ten zápis dál, si řekneme později.

---

## Výška a šířka

Každá krabice na webu má dva rozměry: šířku a výšku. 

----

```css
div {
	width: 300px;
	height: 100px;
}
```

<img src="box-model-width-height.svg">

---

## Ohraničení

Rámeček kolem prvku.

----

```css
div {
	border-width: 2px;
	border-style: solid; /* taky dotted, dashed nebo inset */
	border-color: black;
}
```

Zkrácený zápis (tzv. shorthand):

```css
div {
	border: 2px solid black;
}

```

<img src="box-model-border.svg">


---

## Odsazení obsahu od okraje (od rámečku)

Je to „vycpávka“. 

----

```css
div {
	padding: 25px;
}
```

<img src="box-model-padding.svg">

Jedna hodnota nastaví shodné odsazení na všech 4 stranách prvku.

---

## Odsazení od ostatních prvků

Určuje to, jak daleko mají být ostatní prvky od rámečku (i kdyby byl nulový).

----

```css
div {
	margin: 10px;
}
```

<img src="box-model-margin.svg">

### Slučování odsazení (margin collapsing)

Ke slučování hodnot margin-top a margin-bottom dochází v některých případech a znamená to, že se aplikuje jen větší ze dvou hodnot nebo pokud jsou stejné, tak jen libovolná z nich.

```html
<p>Spodní margin tohoto odstavce se sloučí s…</p>
<p>… s horním marginem tohoto odstavce.</p>

```

```css
p { margin: 20px; }
```

Výsledná mezera mezi odstavci nebude 40px, ale 20px.

Pokud by ale odstavce měly např. nastaveny nějaký `padding` nebo `border`, ke slučování nedojde. Jsou i další okolnosti za kterých ke slučování nedochází, ale o těch jsme si zatím neříkali. Důležité je o tomto chování vědět a případně si zjistit víc, pokud bude potřeba. Třeba v [https://www.sitepoint.com/web-foundations/collapsing-margins/](tomto článku Collapsing Margins na Sitepoint.com).

---

## Shrnutí

----

Všechny prvky na stránce bez ohledu na vizuální tvar jsou krabice/boxy.

<img src="box-model-all.svg">

Vlastnosti `width` a `height` určují, jak má být prvek široký a vysoký *včetně* ohraničení (`border`) a výplně (`padding`), to platí v případě, že prvky mají nastaveno `box-sizing: border-box;`. 

Pokud ne, tak `width` i `height` znamenají jen velikost místa pro obsah a jak ohraničení (`border`), tak výplně (`padding`) velikost elementu zvětšují. Toto výchozí chování je obvykle nežádoucí, proto ho na začátku CSS měníme.

`margin` se do šířky ani výšky nezapočítává, ale ovlivňuje, kolik místa prvek ve výsledku zabere.

<!--
**Pozor při výpočtech**: nezpomeňte násobit dvěma, pokud 
	`margin: 5px;` ubere na šířku (resp. výšku) úhrnem `10 px` => vlevo a vpravo (resp. nahoře a dole). Platí i pro `padding` a `border`.
-->

---

## Druhy elementů (vlastnost `display`)

----

### Blokové elementy

Zaberou celou dostupnou šířku => řadí se pod sebe, lze jim nastavovat hodnoty margin, padding atd.

----

### Řádkové elementy

* zaberou jen tolik místa, kolik potřebují
* nejsou samostatně na řádku => řadí se za sebou jako slova ve větě
* nejde jim nastavit některé vlastnosti z box modelu (šířka, výška, horní/dolní okraj)
* na tvojí stránce jsou to například odkazy, nebo důležitý text  (`strong`)

----

### Řádkově-blokové elementy

* hybrid: řádkový s některými vlastnostmi blokového
* řadí se za sebou, ale lze mu nastavit šířku, výšku a okraje
* na vaší stránce se tak chovají obrázky

----

### Typ elementu v&nbsp;CSS

```css
a { display: block; }

div { display: inline; }

li { display: inline-block; }
```

* každý element má výchozí typ
* pomocí CSS lze ale změnit chování prvku na jiný typ
----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Zkus nastavit všechny vlastnosti pro jeden element.

Zkus mu změnit hodnotu display z block na ostatní. Při inline rámeček a další vlastnosti „zmizí“. 

---

## Pokročilé selektory

Základní jednoduchý selektor, tedy to, co napíšeš v CSS před složené závorky, už znáš. 

Často se ale hodí použít i komplexnější varianty, které umožňují jednodušeji nebo přesněji zacílit na elementy, které potřebuješ nastylovat.

----

### Vícenásobný selektor

Při psaní CSS jsou způsoby, jak si ušetřit opakování znovu a znovu.

```css
h1,
h2 { color: green; }
```

Selektor říká: _všechny nadpisy h1 a všechny nadpisy h2_ 

Obarví nadpisy 1. a 2. úrovně na zeleno.

Jednotlivé selektory odděluj čárkou.

----

### Kontextový selektor

Někdy potřebuješ nastavit vlastnosti jen prvkům v určité části stránky, na to se hodí kontextový selektor. 

```css
.tip h2 { color: blue; }
```

Selektor říká: _všechny nadpisy h2, pokud je nějaký jejich rodič libovolný element s třídou h2_

Obarví se nadpisy 2. úrovně na modro, pokud jsou v prvku s třídou `.tip`

Samozřejmě to funguje i jen pro tagy nebo jen pro třídy. A taky lze definovat více zanořených prvků, ale tomu se radši vyhni. Není to dobrá praxe a přináší to spíš problémy.

---

## Pseudotřídy

Pseudotřídy vybírají prvky v různých stavech.

----

```css
a { color: navy; }

a:link {color: blue;} /* nenavštívený */

a:visited {color: purple;} /* navštívený */

a:hover {color: red;} /* najetí myší */

a:focus {color: green;} /* aktivace klávesnicí */

a:active {color: yellow;} /* při kliknutí */
```

Zatímco třídy si definuješ jako autor kódu ty, pseudotřídy jsou dané.

Narozdíl od tříd se zapisují jen do CSS, na HTML není třeba sahat.

Je potřeba dodržet pořadí jejich zápisu v CSS, aby fungovaly správně.

---

# Jak se aplikují styly

Zjednodušíme si zatím situaci tím, že všechno CSS máme jen v jednom souboru a nikde jinde.

----

## Na pořadí záleží

```css
p {
	color: red;
	background-color: pink;
}

p { color: green; }
```

Platí poslední nastavená hodnota vlastnosti.

----

## Na specificitě selektoru záleží víc

Specificita je síla selektoru. Pokud nějakou vlastnost nastavuješ v CSS víckrát tomu samému elementu, tak platí hodnota nastavená pomocí silnějšího (specifičtějšího) selektoru. Teprve pokud je specificita selektorů stejná, aplikuje se pravidlo o tom, že platí poslední nastavená hodnota. 
 
Silnější selektor má více tříd, než selektor slabší.

Pokud mají dva selektory stejný počet tříd, tak je silnější ten s větším počtem tagů.


Pokud budeme mít takovéhle HTML, …
```html
<div>
    <p class="tip">obsah</p>
</div>
```
… tak element odstavce lze vybrat pomocí těchto tří selektorů:

```css
.tip { color: red; }
p { color: green; }
div p { color: blue; }
```



Specificita může být ještě složitější, ale my bychom si zatím měli vystačit s tímto.
