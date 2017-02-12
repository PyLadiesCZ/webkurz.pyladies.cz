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

<div class="c-example example-mutliple-selectors">
<h1>Já jsem nadpis první úrovně</h1>
<h2>Já jsem nadpis druhé úrovně</h2>
</div>

Jednotlivé selektory odděluj čárkou.

----

### Kontextový selektor

Někdy potřebuješ nastavit vlastnosti jen prvkům v určité části stránky, na to se hodí kontextový selektor. 

```css
.tip h2 { color: blue; }
```

Selektor říká: _všechny nadpisy h2, pokud je nějaký jejich rodič libovolný element s třídou h2_

Obarví se nadpisy 2. úrovně na modro, pokud jsou v prvku s třídou `.tip`


```html
<h2>Já jsem výchozí barvou</h2>
<div class="tip">
	<h2>Já jsem modrý</h2>
	<div>
		<h2>Já, já, já jsem taky modrý</h2>
	</div>
</div>
```
<div class="c-example example-context-selectors">
<h2>Já jsem výchozí barvou</h2>
<div class="tip">
	<h2>Já jsem modrý</h2>
	<div>
		<h2>Já, já, já jsem taky modrý</h2>
	</div>
</div>
</div>

Samozřejmě to funguje i jen s tagy nebo jen s třídami. 

```css
div h2 { color: red; }

.tip .nadpis { color: blue; }

```

```html
<h2>Já jsem výchozí barvou</h2>
<div class="tip">
	<h2 class="nadpis">Já jsem modrý</h2>
	<div>
		<h2 class="nadpis">Já, já, já jsem taky modrý</h2>
	</div>
</div>
```

<div class="c-example example-context-selectors">
<h2>Já jsem výchozí barvou</h2>
<div class="tip">
	<h2 class="nadpis">Já jsem modrý</h2>
	<div>
		<h2 class="nadpis">Já, já, já jsem taky modrý</h2>
	</div>
</div>
</div>

A taky lze definovat více zanořených prvků, ale tomu se radši vyhni. Nesnaž se kopírovat strukturu HTML do selektorů, není to dobrá praxe a přináší to spíš problémy, protože při každé změně HTML pak musíš měnit i CSS. 

Ostatně většina metodik pro psaní CSS doporučuje v maximální míře stylovat pouze přes třídy i kdyby vícenásobné.

```css
/* takto ne */
body .tip .jaja { color: blue; }
```

I zde platí ze _Zen of Python_: <q>Simple is better than complex.</q> a <q>Flat is better than nested</q>.

---

### Další selektory

----

Existují i další druhy selektorů, ale ve valné většině případů se bez nich obejdeš.
 
Lze vybírat pouze přímé potomky (`div > p`) nebo pouze prvky, které mají společného rodiče a před sebou nějaký jiný prvek těsně (`h2 + p`) nebo kdekoli (`h2 ~ p`).

Prvky lze také vybírat podle atributu (`img[alt]`), či hodnot atributů (`img[src="pylady.jpg"]`) nebo dokonce jen jejich částí.

Jde také pomocí pseudotříd vybrat každý druhý (`:nth-child(2n)`) nebo třetí nebo prostě n-tý prvek, to se může hodit třeba na stylování proužkovaných tabulek.

Pokud tě zajímají, podívej se na [český](http://jecas.cz/css-selektory) nebo [anglický](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector) přehled selektorů.