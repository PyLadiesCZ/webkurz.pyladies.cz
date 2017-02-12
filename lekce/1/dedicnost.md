# CSS

Zatím jsme si ukázali z CSS jen malou část. Dnes si znalosti CSS rozšíříme.

---

## Vlastnosti textu

----

```css
p {
	font-style: italic;  /* nebo normal */

	font-weight: bold; /* nebo normal */

	font-family: sans-serif; /* nebo serif */

	text-align: center; /* nebo left nebo right */
}
```

----
<!-- .slide: data-state="c-slide-task" -->


#### Cvičení

Zkus všechny použít na prvky v tvém `index.html`.

----

### Velikost textu

Velikost písma můžeš nastavit pomocí spousty jednotek, zatím si vystačíme s pixely (`px`) a procenty `%`.

Hodnota `100%` znamnená velikost písma rodiče.

```css
h1 { font-size: 20px; }

p { font-size: 150%; }
```

---

# Jak se aplikují styly

Zjednodušíme si zatím situaci tím, že všechno CSS máme jen v jednom souboru a nikde jinde.

----

## Na pořadí záleží

Platí poslední nastavená hodnota vlastnosti.

```css
p {
	color: red;
	background-color: pink;
}

p { color: green; }
```

<div class="c-example example-overriding">
<p>Jakou mám barvu?</p>
</div>

---

## Výchozí styly prohlížeče (User Agent stylesheet)

----

Každý prohlížeč má v sobě zabudované výchozí CSS.

Proto má každý HTML dokument „bez CSS“ například nadpisy, které jsou tučně a větším písmem než odstavce. 

Tvoje CSS se aplikuje až za nimi a tak vlastně přepisuješ vlastnosti zabudované v prohlížeči.

---

## Dědičnost _(inheritance)_

----

Rodič je element do kterého je nějaký element zanořen. Například rodičem `<body>` je `<html>`.

Některé vlastnosti se dědí, tedy přenášejí z rodičů na potomky. Typicky jsou to právě ty, které nastavují vlastnosti textu. Nastavíš-li například druh písma pro `<body>`, nastavuješ ho v podstatě celému dokumentu, protože všechny prvky v dokumentu jsou potomky `<body>`.
 
----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si zjistit a ověřit dědičnost vlastností, které jsme už probírali, v tvém dokumentu `index.html`.

---

## Prvek bez významu

----

Barvu pozadí už nastavit umíš: 

```css
p {
    background-color: green;
}
```

Co ale když chceš přidat pozadí pod několik elementů zároveň? K tomu je potřeba přidat extra prvek.
Protože tento prvek nemá žádný jiný význam, použij `<div>`, prvek bez významu.

```html
<div>
    <h2>Nejnovější novinka</h2>
    <p>Dnes je spoustu nového…</p>
    <a href="detail.html">celá novinka</a>
</div>
```
----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

V tvém dokumentu `index.html` obal několik prvků do `<div>` a dej mu nějaké pěkné pozadí nebo třeba všem nastav jiné písmo jen s pomocí dědičnosti.

