# Box-model

Na stránce je každý element reprezentovaný jako obdélníková krabice. Tvar nemusí být vidět, ale vždy tam je.

----

Podívej se na video, které velmi zpomaleně zachycuje vykreslování stránky v prohlížeči. Jak vidíš je tam spousta „krabic“. Pro ilustraci jsou všechny jen obarvené, s rámečkem a poloprůhledné a jejich obsah je skrytý. Na pozadí je jak vypadá výsledná stránka.

<iframe data-autoplay width="100%" height="400px" src="https://www.youtube.com/embed/cFxFY0NFCqk" frameborder="0" allowfullscreen></iframe>

---

## [box-sizing](https://devdocs.io/css/box-sizing)

----

`box-sizing` je vlastnost, která určuje jaký druh box-modelu použít. 

Ve většině případů chceš bohužel použít ten, který není v CSS v prohlížeči jako výchozí, proto hned na začátek tvého CSS dej následující kód.


```css
*, 
*::before, 
*::after { 
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
**Pozor při výpočtech**: nezpomeň násobit dvěma, pokud 
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
