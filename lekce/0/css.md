# CSS

CSS je jazyk popisující vzhled a někdy i chování _elementů_ webové stránky.

Elementy jsou části stránky, které už umíš definovat pomocí tagů v HTML, takže třeba nadpisy, odstavce ale i celé body.

V HTML je obsah stránky a také je v něm popsáno, jaká je struktura tohoto obsahu. Dále se v něm definuje, jaké má stránka obsahovat obrázky a případné další součásti. Naproti tomu CSS říká, jak mají jednotlivé prvky stránky vypadat, tedy jaká bude jejich forma. Díky tomu dochází k oddělení formy od obsahu, i když v praxi se ta hranice občas stírá.

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

```css
selektor { 
    vlastnost: hodnota;
    property: value; /* tohle je komentar v CSS */
}
```

_Selektor_ je část, kterou říkáme, čemu (tj. jakému elementu, příp. skupině elementů) chceme měnit vlastnosti: selektujeme = vybíráme.

Ve složených závorkách jsou jednotlivé _deklarace_. V příkladu jsou dvě, každá na svém řádku. Taková úprava opět není nutné, ale vhodná, stejně jako odsazení. Každá deklarace se skládá ze dvou částí:

1. _vlastnost_ je jedna ze standardem definovaných vlastností třeba barva nebo velikost písma.
1. _hodnota_ se píše za název vlastnosti a dvojtečku, každá vlastnost má různé povolené hodnoty, za hodnotu vždy piš středník.


----

## CSS vlastnosti

### Barva

Zkusme si rovnou obarvit text.

```css
p { 
    color: white;
    background-color: black;
}
```

Selektor říká, co chceme měnit, v tomto případě odstavec. Deklarace pak říká, kterou vlastnost chceme měnit, a také na jakou hodnotu. V tomto případě nastavujeme barvu textu na bílou a barvu pozadí na černou (aby text byl vůbec vidět).


----
<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si sama připojit vlastní CSS soubor k dříve vytvořenému HTML dokumentu `index.html`.

Nastyluj si odstavec a hlavní nadpis jinou barvou.

Zkus taky nastavit jinou barvu pozadí celé stránce.

Nezapomeň na čitelnost textu.