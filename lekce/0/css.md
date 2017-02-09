# CSS

CSS je jazyk popisující vzhled a někdy i chování elementů webové stránky.

Elementy jsou také všechny části stránky, které už umíš definovat pomocí tagů v HTML, takže třeba nadpisy, odstavce ale i celé body.

V HTML je zanesen obsah stránky a také je v něm popsáno, jaká je struktura tohoto obsahu. Dále se v něm definuje, jaké má stránka obsahovat obrázky a případné další součásti. Naproti tomu CSS říká, jak mají jednotlivé prvky stránky vypadat, tedy jaká bude jejich forma. Díky tomu dochází k oddělení formy od obsahu, i když v praxi se ta hranice občas stírá.

----

## Připojení CSS

Je více způsobů jak aplikovat CSS, my použijeme nejběžnější a nejpraktičtější, a to samostatný CSS soubor, připojený pomocí tagu `<link>` v hlavičce (`<head>`).

```html
<link rel="stylesheet" href="nazevsouboru.css">
```
<!-- .element: class="c-text-lg stretch" contenteditable="true" -->

`link` je další nepárový tag (nemá co obalovat, pouze říká, odkud se má soubor s CSS načíst)

----

## Anatomie CSS

Takto vypadá jeden _rule-set_, v CSS píšeme rulesety jeden za druhým.

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">selektor</span><span class="fragment" data-fragment-index="30"> { </span>
	<span class="fragment" data-fragment-index="40">vlastnost</span><span class="fragment" data-fragment-index="50">:</span><span class="fragment" data-fragment-index="60"> hodnota</span><span class="fragment" data-fragment-index="70">;</span><span class="fragment" data-fragment-index="100">
	property: value;</span> /* tohle je komentar v CSS */
<span class="fragment" data-fragment-index="80">}</span>
</code></pre>

_Selektor_ je část, kterou říkáme, čemu (tj. jakému elementu, příp. skupině elementů) chceme měnit vlastnosti: selektujeme = vybíráme.

Ve složených závorkách jsou jednotlivé _deklarace_. V příkladu jsou dvě, každá na svém řádku. Taková úprava opět není nutné, ale vhodná, stejně jako odsazení. Každá deklarace se skládá ze dvou částí:

1. _vlastnost_ je jedna ze standardem definovaných vlastností třeba barva nebo velikost písma.
1. _hodnota_ se píše za název vlastnosti a dvojtečku, každá vlastnost má různé povolené hodnoty, za hodnotu vždy piš středník.


----

## CSS vlastnosti

### Barva

Zkusme si rovnou obarvit text.

<pre class="c-text-md fragment" contenteditable data-fragment-index="10"><code class="lang-css" data-noescape><span class="fragment" data-fragment-index="20">p</span><span class="fragment" data-fragment-index="30"> { </span>
	<span class="fragment" data-fragment-index="40">color</span><span class="fragment" data-fragment-index="50">:</span><span class="fragment" data-fragment-index="60"> white</span><span class="fragment" data-fragment-index="70">;</span><span class="fragment" data-fragment-index="100">
	background-color: black;</span>
<span class="fragment" data-fragment-index="80">}</span>
</code></pre>

Selektor říká, co chceme měnit, v tomto případě odstavec. Deklarace pak říká, kterou vlastnost chceme měnit, a také na jakou hodnotu. V tomto případě nastavujeme barvu textu na bílou a barvu pozadí na černou (aby text byl vůbec vidět).


----
<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si sama připojit vlastní CSS soubor k dříve vytvořenému HTML dokumentu `index.html`.

Nastyluj si odstavec a hlavní nadpis jinou barvou.

Zkus taky nastavit jinou barvu pozadí celé stránce.

Nezapomeň na čitelnost textu.