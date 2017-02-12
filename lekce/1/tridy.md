## Třídy

----

### Jak odlišit elementy?

Udělat text všech odstavců modře už umíš.

```html
<p>A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```

```css
p { color: blue; }
```

<div class="c-example example-classes-1">
<p>A víte, že…?</p>
<p>Ještě jeden odstavec</p>
</div>


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

<div class="c-example example-classes-2">
<p class="tip">A víte, že…?</p>
<p>Ještě jeden odstavec</p>
</div>

----

### Jednu třídu lze použít pro více elementů

Třídu můžeš přiřadit libovolnému počtu prvků.


```html
<h1 class="tip">Tip</h1>

<p class="tip">A víte, že…?</p>

<p>Ještě jeden odstavec</p>

```

```css
.tip { color: blue; }
```

<div class="c-example example-classes-2">
<h1 class="tip">Tip</h1>
<p class="tip">A víte, že…?</p>
<p>Ještě jeden odstavec</p>
</div>


Třída se tedy použije pokud má nějaký prvek speciální vlastnosti nebo se skupina vlastností opakuje a chceme si tak ušetřit opakovaný zápis v CSS.

----

## Třída jen pro určitý element

Můžeš se setkat i s tímto zápisem:

```css
h1.tip { color: blue; }

p.tip { color: deepskyblue; }
```

<div class="c-example example-classes-3">
<h1 class="tip">Tip</h1>
<p class="tip">A víte, že…?</p>
</div>

První selektor vybere pouze `<h1>` s třídou `tip` a druhý pouze odstavce s toutéž třídou. Je dobré o tom vědět, ale příliš nepoužívat, protože se snadno stane, že je potřeba typ prvku v HTML změnit a pak musíš přepisovat i CSS.

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
<div class="tip cool">To je toho, já taky.</div>
```

<div class="c-example example-multiple-classes">
<p class="tip">Jsem Tip</p>
<p class="cool">Já jsem cool</p>
<p class="cool tip">Já jsem oboje, heč.</p>
<div class="tip cool">To je toho, já taky.</div>
</div>

----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Zkus si změnit stylování v tvém dokumentu pomocí elementů na stylování pouze pomocí tříd.

---

## Pseudotřídy

Pseudotřídy vybírají prvky v různých stavech.

----

```css
a { color: navy; }

a:link { color: blue; } /* nenavštívený */

a:visited { color: purple; } /* navštívený */

a:hover { color: red; } /* najetí myší */

a:focus { color: green; } /* aktivace klávesnicí nebo myší */

a:active { color: yellow; } /* při aktivaci (např. kliknutím) */
```

<div class="c-example example-link" id="link"><a href="#link">Zkus si mě</a></div>


Zatímco třídy si definuješ jako autor kódu ty, pseudotřídy jsou dané.

Narozdíl od tříd se zapisují jen do CSS, na HTML není třeba sahat.

Je potřeba dodržet pořadí jejich zápisu v CSS, aby fungovaly správně.

---

## Pseudoelementy

Podobný zápis mají i pseudoelementy, tedy selektory, které vybírají specifikací definované části elementu. 

----

Jejich syntaxe je podobná jako u pseudotříd, jen se u nich píšou dvě dvojtečky.

Například jde vybrat první písmeno (`::first-letter`). 

Asi nejpraktičtější je ale generovaný obsah přes `::after` a `::before` a využití definice obsahu pomocí vlastnosti `content`: 

```html
<p>Haló</p>
```

```css
.example-before-after::before {
    content: '☎';
    color: red;
    margin-right: 0.3em;
}

.example-before-after::after {
    content: '';
    height: 1em;
    width: 10em;
    display: inline-block;
    background-color: green;
    vertical-align: middle;
}
```

<div class="c-example example-before-after"><p>Haló</p></div>

Přes `::before` je vložen element s obsahem ikony a je obarven červeně.

Přes `::after` je vložen prázdný element, který je obarvený a má nastaveny rozměry.

Můžeš díky tomu mít čistý HTML kód, do kterého tyto vizuální prvky přidáváš jen pomocí CSS. 