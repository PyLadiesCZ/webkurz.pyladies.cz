# Float

----

Float je asi nejdivnější vlasnost. Co se stane, když ho nastavíš nedává často smysl a není to co chceš.

Přesto to je, a po léta byl, hlavní způsob jak dělat layouty (rozložení) stránek.

Float je komplikovaný v tom, že mění nejen chování samotného prvku, který ho má zaplý, ale ovlivňuje předky, sourozence, potomky a prvky, které následují po něm. 

Přestože je s ním tolik legrace, `float` má jen 3 možné hodnoty: 

* `left` a `right` floatování zapnou 
* `none` floatování vypne

---

## Kdy float použít

----

Hlavním smyslem floatu je prvek dát na jednu stranu a nechat text, aby ho obtékal. Pro tvorbu layoutů byl spíš zneužíván díky nedostatku lepších nástrojů. 


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

Uf. Protože floatovaný prvek je z toku dokumentu vyjmut, jeho rodič o něm neví.

Pokud na tom záleží a chceš, aby rodič vždy „věděl“ o svém potomku, je potřeba za něj umístit další blokový element s vlastností `clear: left;`.

Protože nechceš do HTML přidávat nové prvky, dělá se to v praxi pomocí generovaného obsahu.

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

Třídu `clearfix` přiřadíš libovolnému prvku, který je rodičem a tím máš hotovo.
