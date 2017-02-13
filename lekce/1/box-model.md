## Druhy elementů

V HTML se převážně potkáš se dvěma typy elementů: _blokovými_ a _řádkovými_.

----------

<small>Poznámka: V HTML 5 došlo k rozdělení elementů ještě jiným způsobem, ale starší dělení, které tady je tu použito, je snazší na pochopení a hlavně ve většině případů dostatečné.</small>   

----

### Blokové elementy

Patří mezi ně `<p>`, `<h1>` a další nadpisy a taky `<div>`.

* zaberou všechno dostupné místo
* řadí se pod sebe

```css
div {
	background-color: orange;
}

p {
	background-color: cyan;
}
```

```html
<div>div</div>
<p>p</p>
```

<div class="c-example example-block-elements">
<div>div</div>
<p>p</p>
</div>

----

### Řádkové elementy

Většinou vyznačují jen část textu, patří mezi ně odkazy `<a>`, `<strong>`, ale i `<img>` a řádkový ekvivalent bezvýznamového `<div>`: element `<span>`.

* chovají se jako obyčejný text: zaberou jen tolik místa, kolik potřebují
* nejsou samostatně na řádku: řadí se za sebou jako slova ve větě

Je zakázáno do řádkových elementů vkládat blokové.


```css
span {
	background-color: orange;
}

strong {
	background-color: cyan;
}
```

```html
<span>span A</span>
<strong>strong A</strong>

<span>span B</span><strong>strong B</strong>
```

<div class="c-example example-inline-elements">
<span>span A</span>
<strong>strong A</strong>

<span>span B</span><strong>strong B</strong>
</div>

Všimni si mezery mezi elementy. Je tam, protože je mezi nimi alespoň jeden _whitespace_ znak (v tomto případě znak nového řádku).

----

### Další typy

Je několik výjimek, které se chovají jinak, například položky seznamů nebo prvky tabulek, ale ani jedno není potřeba zatím řešit.

---

# Box-model

Na stránce je každý element reprezentovaný jako obdélníková krabice. Tvar nemusí být vidět, výchozí pozadí většiny prvků je průhledné (`transparent`), ale vždy tam je.

----

Podívej se na video, které velmi zpomaleně zachycuje vykreslování stránky v prohlížeči. Jak vidíš, je tam spousta „krabic“. Pro ilustraci jsou všechny jen obarvené, s rámečkem a poloprůhledné a jejich obsah je neviditelný. Na pozadí vidíš, jak vypadá výsledná stránka.

<iframe data-autoplay width="100%" height="400px" src="https://www.youtube.com/embed/cFxFY0NFCqk" frameborder="0" allowfullscreen></iframe>

---

## [box-sizing](https://devdocs.io/css/box-sizing)

----

`box-sizing` je vlastnost, která určuje jaký druh box-modelu použít. 

Ve většině případů chceš bohužel použít variantu `border-box`, která není v CSS prohlížeče jako výchozí, proto hned na začátek tvého CSS dej následující kód.


```css
* { box-sizing: border-box; }
```

Vysvětlení toho, jaký je v tom rozdíl nechme na později. Teď je jen třeba, aby to prohlížeč vykresloval tak, jak čekáš.

Hvězdička `*` je selektor, který znamená libovolný, tedy každý, element.

---

## Výška a šířka

----

Každá krabice na webu má dva rozměry: šířku a výšku. Ty jsou ve výchozím stavu dynamické: přizpůsobují se obsahu nebo rodiči. Je ale možné je nastavit pomocí CSS.

<img src="box-model-width-height.svg">

----

### Přetékání

Pokud si nastavíš dostatečně malé rozměry, zjistíš, že text přetekl ven. To je sice překvapivé, ale správné chování. Přece nechceš schovávat před uživatelem obsah. 

```css
div {
	background-color: orange;
	width: 500px;
	height: 110px;
}
```

```html
<div>Zajímá tě programování v Pythonu? Chtěla by ses to naučit? PyLadies pořádají pravidelné odpolední srazy a kurzy.</div>
```

<div class="c-example example-overflow">
<div>Zajímá tě programování v Pythonu? Chtěla by ses to naučit? PyLadies pořádají pravidelné odpolední srazy a kurzy.</div>
</div>


Pomocí `overflow: hidden;` ale můžeš obsah přeci jen skrýt. To se hodí v případě, že počítáš se zobrazením obsahu jiným způsobem. 

<div class="c-example example-overflow-hidden">
<div>Zajímá tě programování v Pythonu? Chtěla by ses to naučit? PyLadies pořádají pravidelné odpolední srazy a kurzy.</div>
</div>


Další možností je `overflow: auto;`, který zobrazí scrollbary v případě, že je obsah větší, než se vejde do elementu.

<div class="c-example example-overflow-auto">
<div>Zajímá tě programování v Pythonu? Chtěla by ses to naučit? PyLadies pořádají pravidelné odpolední srazy a kurzy.</div>
</div> 

----

### Pevné a fluidní rozměry

Aplikovat pevné rozměry můžeš, ale je třeba si dát si pozor jak se vše vejde. Proto je často lepší nastavit fluidní rozměry v `%`, kde `100%` znamená stejný rozměr jako má rodič.  


```css
div {
	width: 50%;
	height: 100px;
	background-color: orange;
}

p {
	width: 400px;
	height: 100px;
	background-color: cyan;
}
```

```html
<div>div má šířku v %</div>
<p>odstavec v pixelech</p>
```

<div class="c-example example-fluid">
<div>div má šířku v %</div>
<p>odstavec v pixelech</p>
</div>

Tady si musíš změnit šířku okna, abys viděla rozdíl.

----

### Omezení rozměrů

Zvlášť při vytváření stránek, které fungují i na mobilech i na velkých displejích (responzivních) se hodí možnost omezit minimální nebo maximální velikost rozměrů.

To se dělá pomocí _přidání_ vlastností `max-width` a `min-width` pro šířku a `max-height` a `min-height` pro výšku. 

```css
div {
	background-color: cyan;
	width: 50%;
	min-width: 100px;
	max-width: 300px;
}
```

Tento element by tedy byl široký 50%, ale pokud by 50% vyšlo méně, než 100px, nastaví se mu šířka právě těch 100px. Obdobně by nikdy nebyl širší než 300px.

---

## Ohraničení

Nebo rámeček kolem prvku se nastavuje pomocí vlastnost `border`.

----

<img src="box-model-border.svg">

Rámeček má 3 základní vlastnosti:

1. šířku (nebo tloušťku) čáry
1. typ čáry (plná, tečkovaná, čárkovaná, dvojitá apod.)
1. barvu čáry

```css
div {
	border-width: 2px;
	border-style: solid; /* taky dotted, dashed nebo inset */
	border-color: black;
}
```

To samé se dá zapsat zkráceným zápisem (tzv. shorthand)

```css
div {
	border: 2px solid black;
}

```

<div class="c-example example-border-simple"><div>Mám černý okraj</div></div>


Funguje to tak, že je určeno v jakém pořadí se hodnoty zapisují, v tomto případě je to `border-width border-style border-color`.

### Různé hodnoty pro různé strany

Pomocí vlastností `border-top` `border-right` `border-bottom` nebo `border-left` lze nadefinovat různé rámečky pro různé strany elementu.

```css
div {
	background-color: silver;
	
	border-top: 20px solid red;
	
	border-bottom-width: 10px;
	border-bottom-style: dotted;
	border-bottom-color: black;
}
```

<div class="c-example example-border"><div>Mám různé okraje, o já se mám.</div></div>

---

## Odsazení obsahu od okraje (od rámečku)

Obvykle se nastavuje, aby obsah nebyl „nalepený“ na viditelný rámeček nebo pokud má element pozadí.

----

<img src="box-model-padding.svg">


```css
div {
	border: 2px solid black;
	padding: 25px;
}
```
<div class="c-example example-padding-simple"><div>Můj obsah není nalepený</div></div>

### Různé hodnoty pro jednotlivé strany elementu

Jedna hodnota nastaví shodné odsazení na všech 4 stranách prvku, ale opět funguje `padding-top` `padding-right` `padding-bottom` i `padding-left`.

Další možností je využít shorthand, který umožnuje zapsat všechny hodnoty přímo k `padding`

```css
div {
	border: 2px solid black;
	padding: 10px 100px;
}
```

<div class="c-example example-padding-2"><div>Nahoře a dole 10px a vpravo a vlevo 100px.</div></div>

Pokud uvedeš 3 hodnoty

```css
div {
	border: 2px solid black;
	padding: 10px 100px 50px;
}
```

<div class="c-example example-padding-3"><div>Nahoře 10px a vpravo a vlevo 100px a dole 50px.</div></div>

A pro úplnost i všechny 4

```css
div {
	border: 2px solid black;
	padding: 10px 100px 50px 200px;
}
```

<div class="c-example example-padding-4"><div>Nahoře 10px a vpravo 100px, dole 50px a vlevo 200px.</div></div>

Poslední zápis je totéž, jako tento:

```css
div {
	border: 2px solid black;
	padding-top: 10px;
	padding-right: 100px; 
	padding-bottom: 50px;
	padding-left: 200px;
}
```

---

## Odsazení od ostatních prvků

Určuje to, jak daleko mají být ostatní prvky od rámečku (i kdyby byl nulový).

----

<img src="box-model-margin.svg">

```css
div {
	border: 2px solid black;
	padding: 25px;
	margin: 40px;
}
```

```html
<div>první</div>
<div>druhý</div>
```

<div class="c-example example-margin-1"><div>první</div><div>druhý</div></div>

### Slučování odsazení (margin collapsing)

Pokud by sis změřila přechozí ukázku, zjistila bys, že mezi okraji je jen na výšku jen 20px a ne 40px. Margin tak vlastně znamená: chci aby od dané strany byly ostatní elementy alespoň tolik. 

Říká se tomu slučování a dochází k němu za některých okolností, kdy se z hodnot margin-bottom horního prvku a margin-top dolního prvku aplikuje jen ta větší nebo pokud jsou stejné, tak jen jedna z nich.

Za chvíli si ukážeme vlastnosti, jejichž změnou se vypne i slučování.

---

## Box-model a řádkové elementy

----

Co se stane, když zkusíš nastavit tyhle vlastnosti řádkovému elementu?

```css
span {
	width: 100%;
	height: 100px;
	background-color: cyan;
	margin-top: 1000px;
	margin-bottom: 1000px;
	padding-bottom: 50px;
}
```

```html
<span>Řádkovému elementu šířku ani výšku nenastavíš!</span>
<span>O margin-top a margin-bottom nemluvě.</span>
<span>Ostatní ale jde, jen nezmění tok textu</span>
```

<div class="c-example example-inline-dimensions">
<span>řádkovému elementu šířku ani výšku nenastavíš</span>
<span>O margin-top a margin-bottom nemluvě.</span>
<span>Ostatní ale jde, jen nezmění tok textu</span>
</div>

---

## Vlastnost `display`

----

Typ elementu můžeš změnit pomocí vlastnosti: `display`.
 
Element se pak bude zobrazovat jako by byl jiného typu. 

Pozor, nenamená to možnost vložit `<div>` do `<span>`, změna se týká jen zobrazení.

----

### `display: block;`

Libovolný element se začne chovat jako blokový.

Lze jim nastavit všechny vlastnosti z box-modelu.


```css
span { 
	display: block;
	background-color: yellow;
	margin-bottom: 20px;
}
```

```html
<span>Narodil jsem jako obyčejný řádkový prvek, ale pak ze mě udělali blok.</span>
```

<div class="c-example example-inline2block">
<span>Narodil jsem jako obyčejný řádkový prvek, ale pak ze mě udělali blok.</span>
</div>

----

### `display: inline;`

Libovolný element se začne chovat jako řádkový.

Nejde jim pak nastavit některé vlastnosti: šířku, výšku, `margin-top` a `margin-bottom`.


```css
div {
	display: inline;
	background-color: yellow;
	margin: 20px;
}
```

```html
<div>Narodil jsem jako blokový prvek, ale pak ze mě udělali řádkový.</div>
```

<div class="c-example example-block2inline">
<div>Narodil jsem jako blokový prvek, ale pak ze mě udělali řádkový.</div>
</div>

----

### `display: inline-block;`

Libovolný element se začne chovat jako řádkový s některými vlastnostmi blokového-

Řadí se za sebou, ale lze mu nastavit šířku, výšku a všechny hodnoty `margin`.


```css
p {
	display: inline-block;
	width:30%;
	background-color: yellow;
	margin: 10%;
}
```

```html
<p>Jsem blokový prvek, ale chovám se jako řádkově blokový.</p><p>To já taky, nic si z toho nedělej.</p><p>Výchova není co bývala.</p>
```

<div class="c-example example-inline-block">
<p>Narodil jsem jako blokový prvek, ale pak ze mě udělali řádkově blokový.</p><p>To já taky, nic si z toho nedělej.</p><p>Výchova není co bývala.</p>
</div>


Všimni si, že `margin` je už stejný na šířku i na výšku pixelů, v tomto případě nedochází ke slučování.

Také není náhoda, že jsme vymazali jakoukoli mezeru mezi prvky, protože jinak by se při menších hodnotách zobrazila a marginy by nebyly tak jak čekáš. Jde to vyřešit i v&nbsp;CSS, ale ne úplně snadno a teď si tím nemusíme zabývat. 

----

### `display: none;`

Nastavením na `none` element zmizí. Je to jako by vůbec v dokumentu nebyl, nic neovlivňuje. Čtečky pro nevidomé ho ignorují a stejně tak třeba Google.


#### Viditelnost

Jedná se sice o jinou vlastnost, ale hodí se ji zmínit, protože dělá něco podobného jako `display:none`. Nastavením `visibility: hidden;` se také element schová, ale zůstane po něm místo přesně tak velké, jaké by zabíral, kdyby měl `visibility: visible;`.

```css
span { 
	visibility: hidden;
	background-color: yellow;
}

p { 
	display: none;
	background-color: red;
}
```

```html
<div>Jsem div a jsem vidět.</div>
<p>Já jsem odstavec o kterém ani netušíte, že tu je.</p>
<div>Já mám v sobě <span>neviditelného</span> muže</div>
```

<div class="c-example example-display-none-visibility-hidden">
<div>Jsem div a jsem vidět</div>
<p>Já jsem odstavec o kterém ani netušíte, že tu je.</p>
<div>Já mám v sobě něco <span>neviditelného</span>, to koukáte.</div>
</div>

---

### Zpět k `box-sizing`

----

Možná sis všimla, že šířka i výška elementu zahrnuje i `padding` a `border`. 

<img src="box-model-all.svg">

To ale platí pouze pro elementy s `box-sizing: border-box;`. 

Pokud by tam byla výchozí hodnota, tedy `content-box`, tak by `width` a `height` byly rozměr pouze obsahu a hodnoty `padding` a `border` by prvek zvětšovaly a to je většinou chování, které se v praxi nehodí, proto ten reset na začátku.
 
```css
div { 
	background-color: yellow;
	display: inline-block;
	width: 50%;
	border: 10px solid black;
	padding: 10px;
}
```

```html
<div>první</div><div>druhý</div>
```

<div class="c-example example-border-box">
<div>první</div><div>druhý</div>
</div>

Ten samý kód s `content-box`.

<div class="c-example example-content-box">
<div>první</div><div>druhý</div>
</div>
