# Float

----

Float je asi nejdivnější vlastnost. To, co co se stane, když ji použiješ nedává často na první pohled smysl a není to co chceš.

Přesto to je, a hlavně po léta byl, hlavní způsob jak dělat layouty (rozložení) stránek. Naštěstí dnes jde layout vytvořit pomocí _flexboxu_.

Float je komplikovaný v tom, že mění nejen chování samotného prvku, který ho má nastavený, ale ovlivňuje předky, sourozence, potomky a prvky, které následují po něm. 

Vlastnost `float` má jen 3 možné hodnoty: 

* `left` a `right` floatování zapnou 
* `none` floatování vypne

---

### Floatování zapne `display: block;`

----

Floatované prvky jsou automaticky blokové.

---

## Kdy float použít

----

Float je stále často používán pro tvorbu layoutů. To se ale pomalu stává minulostí, díky poměrně široké podpoře _flexboxu_ ve většině dnešních prohlížečů.

Hlavním smyslem floatu zůstává umístění prvku na jednu stranu a nechat text, aby ho obtékal. 

```html
<p>
    <img src="http://satyr.io/200x200/orange?text=Verča Š.">
    Kurz Pythonu u pražských Pyladies byl skvělý - komplexní, dobře vystavěný a srozumitelně prezentovaný. Vyžadoval pozornou účast a aktivní domácí práci, ale nikdy jsme v tom nebyly samy; k dispozici byli koučové, kteří ochotně zodpověděli všechny dotazy a pomohli překonat nástrahy učení, online i offline. Super způsob, jak se seznámit se základy programování a začlenit se do místní pythonovské komunity.
</p>
```

```css
p { background-color: skyblue; }

img { float:left; }
```

<div class="c-example example-float">
<p>
    <img src="http://satyr.io/200x200/orange?text=Verča Š.">
    Kurz Pythonu u pražských Pyladies byl skvělý - komplexní, dobře vystavěný a srozumitelně prezentovaný. Vyžadoval pozornou účast a aktivní domácí práci, ale nikdy jsme v tom nebyly samy; k dispozici byli koučové, kteří ochotně zodpověděli všechny dotazy a pomohli překonat nástrahy učení, online i offline. Super způsob, jak se seznámit se základy programování a začlenit se do místní pythonovské komunity.
</p>
</div>

---

## Clearfix

----

Zatím to vypadá celkem v pohodě, ne? A co kdyby textu bylo méně?

<div class="c-example example-float">
<p>
    <img src="http://satyr.io/200x200/orange?text=Pavlína F.">
    Kurz byl pro mě ohromně přínosný.
</p>
</div>

Uf. Protože floatovaný prvek je z toku dokumentu vyjmut, jeho rodič o něm „neví“ a proto se roztáhne jen na výšku obsahu. 

----

Teď je na řadě představit vlastnost `clear`, která umožňuje nastavit chování prvku tak, že se posune až za floatovaný prvek. Pozor: funguje to jen pro blokový element.

Pokud na tom záleží a chceš, aby rodič vždy „věděl“ o svém potomku, je potřeba za něj tedy potřeba umístit další blokový element s vlastností `clear: both;`. 
 
Ve skutečnosti bude „vědět“ právě o tomhle novém elementu, který bude vždy za tím floatovaným, ale výsledek bude stejný.

----

Protože nechceš do HTML přidávat nové prvky, dělá se to v praxi pomocí generovaného obsahu takto:

```css
.clearfix::after {
    display: block;
    content: '';
    clear: both;
}
```

```html
<p class="clearfix">
    <img src="http://satyr.io/200x200/orange?text=Pavlína F.">
    Kurz byl pro mě ohromně přínosný.
</p>
```

<div class="c-example example-float">
<p class="clearfix">
    <img src="http://satyr.io/200x200/orange?text=Pavlína F.">
    Kurz byl pro mě ohromně přínosný.
</p>
</div>

Třídu `clearfix` přiřadíš libovolnému prvku, který je rodičem a tím je hotovo.
