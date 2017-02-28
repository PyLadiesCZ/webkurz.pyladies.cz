# Tok dokumentu

----

Výchozí chování elementů na HTML stránce je v podstatě logické a přirozené. 

---

## Tekutý obsah (fluid)

----

Obsah se sám přizpůsobuje rozměrům prohlížeče. Všechny blokové elementy jsou fluidní.

Výchozí šířka je `width: 100%;`, proto se element roztáhne na celou šířku.

Zalamování řádků je povoleno: `word-wrap: normal;`

Výška je automatická: `height: auto`, přizpůsobuje se podle toho, kolik obsahu element má.


---

## Řazení

----

Obsah se řadí tak, jak je v kódu napsaný. První element v `<body>` je první zobrazen na stránce.

---

## Skládání

----

Elementy se řadí nad sebe.

```html
<div>
    Rodič v pozadí
    <p>
		Jsem vnořený element 
		<strong>a ještě vnořený</strong>
		element.
	</p>
</div>
```

<div class="c-example example-stacking">
<div>
    Rodič v pozadí
    <p>
		Jsem vnořený element 
		<strong>a ještě vnořený</strong>
		element.
	</p>
</div>
</div>

Potomci se zobrazují nad jejich rodiči. Čím je tedy prvek víc zanořený, tím je výše.

---

## Rozbití toku dokumentu

----

Ne všechno by se ale takto dalo udělat, proto máme nástroje, tedy CSS vlastnosti, které tok naruší.

* `height` a `width` mění fluiditu
* `float` naruší chování prvku i jeho okolí
* `position: absolute` a `position: fixed` odeberou element z toku
* `z-index` umí změnit pořadí v kterém jsou elemnty naskládány na sebe