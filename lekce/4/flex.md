# Flexbox

----

V moderních prohlížečích je naštěstí podporovaná ještě jedna vlastnost a to `display: flex;`, díky které se dají snadno udělat layouty, které by jinak bylo nutné dělat pomocí floatování nebo pozicování.

---

### Příklad použití

----

V úplně základní podobě vypadá takto:

```html
<div class="doporuceni">
    <div class="prvni">Kurz byl ohromně přínosný.</div>
    <div>Kurz byl úplně nejvíc přínosný a dal mi nejvíc.</div>
    <div>Kurz byl rozhodně přínosný.</div>
</div>
```

```css
.doporuceni {
    display: flex;
    background-color: skyblue;
}

.doporuceni div {
    margin: 10px;
    padding: 10px;
    font-size: 70%;
    background-color: gold;
}
```


<div class="c-example example-flexbox">
<div class="doporuceni">
    <div class="prvni">Kurz byl ohromně přínosný.</div>
    <div>Kurz byl úplně nejvíc přínosný a dal mi nejvíc.</div>
    <div>Kurz byl rozhodně přínosný.</div>
</div>
</div>


Všimni si, že prvky se roztahují podle obsahu.

----

Výchozí chování lze, podobně jako další chování prvků v elementu s `display: flex;` změnit.

```css
.doporuceni div {
    …
    flex: 1;
}

.doporuceni .prvni { flex: 2; }
```


<div class="c-example example-flexbox-extended1">
<div class="doporuceni">
    <div class="prvni">Kurz byl ohromně přínosný.</div>
    <div>Kurz byl úplně nejvíc přínosný a dal mi nejvíc.</div>
    <div>Kurz byl rozhodně přínosný.</div>
</div>
</div>

----

Nebo napřklad změnit pořadí zobrazení prvků

```css
.doporuceni {
    …
    flex-direction: row-reverse;
}
```


<div class="c-example example-flexbox-extended2">
<div class="doporuceni">
    <div class="prvni">Kurz byl ohromně přínosný.</div>
    <div>Kurz byl úplně nejvíc přínosný a dal mi nejvíc.</div>
    <div>Kurz byl rozhodně přínosný.</div>
</div>
</div>


---

### Zdroje k flexboxu

----

Možnosti flexboxu jsou široké a i proto je jejich pokrytí nad rámec tohoto kurzu. 

Určitě si je ale vyzkoušej sama, dále najdeš odkazy na stránky, které ti s tím pomůžou.


#### Česky

[Článek o flexboxu na Vzhůru dolů](http://www.vzhurudolu.cz/prirucka/css3-flexbox) a především tamtéž o [položkách](http://www.vzhurudolu.cz/prirucka/css3-flexbox-polozky) a [kontejnerech](http://www.vzhurudolu.cz/prirucka/css3-flexbox-kontejner).


#### Anglicky

[Flexbox Froggy](http://flexboxfroggy.com/) je hra, při které se naučíš jednotlivé vlastnosti, kterými můžeš ovlivňovat chování prvků ve flexible boxu.

[Flexy Boxes](http://the-echoplex.net/flexyboxes/) je nástroj, kde si můžeš interaktivně měnit vlastnosti a zkoumat co to dělá. Vygenerovaný kód s prefixy pro jednotlivé prohlížeče nepoužívej, lepší je využít [autoprefixer](https://github.com/postcss/autoprefixer).

[A Complete Guide to Flexbox na _css-tricks.com_](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox tutorial na _Interneting Is Hard_](https://internetingishard.com/html-and-css/flexbox/)

[Flexbox na _cssreference.io_](http://cssreference.io/flexbox/)