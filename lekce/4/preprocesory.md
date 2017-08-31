# Pre&shy;pro&shy;cesory

----

Protože v CSS nejde programovat, nemá například proměnné nebo cykly, rozhodli se programátoři vytvořit syntaxi, která by to umožnila a usnadnila tak psaní komplexnějšího CSS. Říkáme jim _preprocesory_, protože vzhledem k tomu, že taková syntaxe není v prohlížečích podporována, je třeba z takového kódu CSS nejdřív vytvořit (zkompilovat).

Díky tomu jde některé věci dělat snáz, ale je potřeba se naučit navíc něco o preprocesorech. Nezapomeň, že vytvořit CSS pro web můžeš samozřejmě i bez preprocesoru.
  
Tři nejpoužívanější preprocesory jsou [Sass](http://sass-lang.com/), [less](http://lesscss.org/) a [Stylus](http://stylus-lang.com/) a svým způsobem k nim patří i [post-css](http://postcss.org/).  

Ukážeme si nejrozšířenější preprocesor _Sass_ a to v syntaxi _SCSS_ (má ještě druhou syntaxi, kterou se zabývat nebudeme).

Tato syntaxe má tu výhodu, že je nadstavbou, takže píšeš standardní CSS a _můžeš_ využívat funkce, které přidává preprocesor. 

---

## K čemu se hodí

_Sass_ je mocný nástroj, který umožňuje CSS generovat pomocí opravdu složitého kódu, ale nenech se jeho silou příliš zlákat. 

**Pro naprostou většinu běžných webů stačí využít funkcionalitu popsanou níže.** 

----

### Spojování do jednoho CSS souboru

Není příliš přehledné mít rozsáhlejší CSS v jednom dlouhém souboru a tak se nabízí ho rozdělit do více menších tak, aby například všechno CSS pro patičku webu bylo spolu v jednom souboru. CSS soubory lze připojit do stránky takto:

```html
<link rel="stylesheet" href="zaklad.css">
<link rel="stylesheet" href="hlavicka.css">
<link rel="stylesheet" href="formulare.css">
<link rel="stylesheet" href="paticka.css">
```

Takový zápis ale zpomalí načítání stránky, proto je lepší mít všechno CSS v jednom souboru. (Výjimkou jsou weby na serverech, které využívají _http/2_.)

Proto je lepší využít rozšíření _Sass_ pro standardní CSS `@import` a jediném souboru (např. `index.scss`) mít:

```scss
@import 'zaklad';
@import 'hlavicka';
@import 'formulare';
@import 'paticka';
```

Výsledné CSS pak bude vypadat jako bys postupně ručně zkopírovala obsah jednotlivých souborů `_zaklad.scss`,  `_hlavicka.scss`,  `_formulare.scss` a  `_paticka.scss`.

----

### Využití proměnných

Někdy se hodnoty opakují a může tak být vhodné je nadefinovat jednou a pak jen odkazovat na tuto definici. 

```scss
$zakladni-pismo: Helvetica, sans-serif;
$zakladni-barva: #333;
$standardni-sirka-okraje: 2px;

body {
  font: 100% $zakladni-pismo;
  color: $zakladni-barva;
}

input {
    border-style: solid;
    border-color: $zakladni-barva;
    border-width: $standardni-sirka-okraje;
}
```

Výsledné CSS.

```css
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}

input {
    border-style: solid;
    border-color: #333;
    border-width: 2px;
}
```

Využívej proměnné pouze tam, kde se daná hodnota opakuje a kde spolu hodnoty skutečně souvisí.  

----

### Výpočty

Občas se hodí něco spočítat. Například si nastavíš do proměnné základní velikost mezery mezi prvky a někde je potřeba dvojnásobná.

```scss
$mezera: 20px;

body { padding: $mezera; }

p { padding: 2*$mezera; }
``` 

```css
body { padding: 20px; }

p { padding: 40px; }
```

----


### Vnořování (nesting)

Pomocí vnořování si lze usnadnit psaní a zvýšit přehlednost kódu. 

```scss
.anketa {
    h2 { font-size: 80%; }
    
    p { margin-bottom: 0; }
    
    a { 
        color: red;
        
        &:hover { color:blue; }
    }
}
``` 

```css
.anketa h2 { font-size: 80%; }

.anketa p { margin-bottom: 0; }

.anketa a { color: red; }

.anketa a:hover { color: blue; }
```

S vnořováním to ale nepřeháněj! Tři úrovně, jako jsou v ukázce, jsou většinou dostatečné, s dalším vnořováním se přehlednost kódu spíš ztrácí.  

----

### Media queries

Sass umožňuje i pohodlnější a přehlednější zápis media queries.  

Media queries v CSS vyžadují nejprve napsat samotnou media query a dovnitř pak CSS, které se za té podmínky má splnit. 
To je poměrně nepohodlné, protože je nutno znovu kopírovat selektory. 

V Sassu je to snazší, stačí vnořit media query.

```scss
.foo {
    color: red;
    
    @media (min-width:300px){
        color: blue;
    }
}
```

Výsledné CSS.

```css
.foo {
    color: red;
}

@media (min-width: 300px) {
    .foo {
        color: blue;
    }
}
```

----

### Manipulace s barvami

Barvy lze ztmavit, zesvětlit, zvětšit nebo zmenšit jejich sytost atd.

```scss
$zakladni-barva: #eeeeee;

body { 
    background-color: $zakladni-barva;
    color: darken($zakladni-barva, 20%); 
}
``` 

```css
body {
  background-color: #eeeeee;
  color: #bbbbbb;
}
```

### Některé funkce na změnu barev

#### `lighten($color, $amount)`

Vrátí světlější odstín, např. `lighten(red, 30%)`<i class="c-color-swatch" style="background-color:red;"></i> je `#ff9999`<i class="c-color-swatch" style="background-color:#ff9999;"></i>.

#### `darken($color, $amount)`

Vrátí tmavější odstín, např. `darken(red, 20%)`<i class="c-color-swatch" style="background-color:red;"></i> je `#990000`<i class="c-color-swatch" style="background-color:#990000;"></i>.

#### `saturate($color, $amount)`

Vrátí sytější barvu, např. `saturate(steelblue, 40%)`<i class="c-color-swatch" style="background-color:steelblue;"></i> je `#1487e6`<i class="c-color-swatch" style="background-color:#1487e6;"></i>.

#### `desaturate($color, $amount)`

Vrátí méně sytou barvu, např. `desaturate(magenta, 80%)`<i class="c-color-swatch" style="background-color:magenta;"></i> je `#bf40bf`<i class="c-color-swatch" style="background-color:#bf40bf;"></i>.

#### `grayscale($color)`

Odebere úplně barevnou složku, např. `grayscale(red)`<i class="c-color-swatch" style="background-color:red;"></i> je `gray`<i class="c-color-swatch" style="background-color:gray;"></i>.

#### `complement($color)`

Vrátí komplementární barvu, např. `grayscale(red)`<i class="c-color-swatch" style="background-color:red;"></i> je `cyan`<i class="c-color-swatch" style="background-color:cyan;"></i>.


---

## Vyzkoušej si online

----

Online nástroj [Sassmeister](http://www.sassmeister.com/) ti umožní zkusit si napsat něco v scss a hned vidět výsledné CSS.

_Poznámka: funkce pracující se soubory jako `@import` ti tam fungovat nebudou, protože tam není možnost dát další soubor, ale ostatní věci si vyzkoušet můžeš._

---

## Sass a automatizace

----

V praxi se pro kompilaci CSS z scss využívá automatizace, kdy se při každé změně v scss provede automaticky kompilace.  

Jak konkrétně se to udělá, si ukážeme na závěrečném workshopu. 
