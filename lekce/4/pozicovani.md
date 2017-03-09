# Pozicování

----

Vlastnost `position` umožňuje nastavit nebo změnit pozici elementu.

* `static`
* `relative`
* `absolute`
* `fixed`

Často se používají společně se 4 vlastnostmi, které určují souřadnice: `left`, `right`, `top` a `bottom`. 

Obvykle se ale využívá jen dvě zároveň: jedna pro svislou pozici a druhá pro vodorovnou.

---

## `position: static`

----

Výchozí hodnota: prvky s tímhle pozicováním se chovají „přirozeně“: jsou součástí toku dokumentu.

---

## `position: relative`

----

Když nastavíš hodnotu na `relative`, element se pohne relativně vzhledem ke svojí původní pozici.


```html
<p class="uvod">Hlavní organizátorka musí mít přehled o tom, jak kurzy PyLadies fungují. Proto by to měla být bývalá účastnice/koučka, nebo někdo, kdo je v kontaktu s organizátorkami z ostatních měst.</p>

<p>Urči den a čas, kdy se budete scházet. Každý sraz trvá dvě hodiny a srazy se opakují každý týden.</p>

<p>Domluv místo, kde se bude kurz konat. Jestli nevíš, zeptej se v místních IT firmách a školách, jestli by nějaký prostor nezapůjčili.</p>

```

```css
p { background-color: silver; }

.uvod {
    background-color: skyblue;
    position: relative;
    left: -1em;
    top: 0.5em;
}
```

<div class="c-example example-relative">
<p class="uvod">Hlavní organizátorka musí mít přehled o tom, jak kurzy PyLadies fungují. Proto by to měla být bývalá účastnice/koučka, nebo někdo, kdo je v kontaktu s organizátorkami z ostatních měst.</p>

<p>Urči den a čas, kdy se budete scházet. Každý sraz trvá dvě hodiny a srazy se opakují každý týden.</p>

<p>Domluv místo, kde se bude kurz konat. Jestli nevíš, zeptej se v místních IT firmách a školách, jestli by nějaký prostor nezapůjčili.</p>
</div>

První odstavec je posunutý doleva, protože má zleva nastavenou negativní pozici a taký dolů, protože shora je kladná hodnota `top`.


----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Vyzkoušej si pomocí inspektoru _Developer Tools_ (<kbd>Ctrl+Shift+C</kbd> nebo na <kbd>Cmd+Shift+C</kbd> na Macu), jak se budou prvky chovat, když zkusíš prvnímu odstavci změnit hodnoty `top` a `left`. Tip: lze to i pomocí šipky nahoru a dolů na klávesnici a to ve chvíli, kdy hodnotu edituješ.


----

Všimni si, že ostatní odstavce jsou tam, kde by byly, kdyby první neměl nastavenou relativní pozici. Ostatní prvky jako by nevěděly, že se něco změnilo.

Změna pozice pomocí `position: relative;` nemá na tok dokumentu vliv. 


---

## `position: absolute`

----

```html
<div>
    Já jsem relativně pozicovaný.
    <p>Já jsem pozicován absolutně.</p>
</div>
```

```css
div {
    background: skyblue;
    height: 200px;
    
    position: relative;
}

p {
    background: orange;
    
    position: absolute; 
    bottom: 10px; 
    left: 30px; 
}
```

<div class="c-example example-absolute">
<div>
    Já jsem relativně pozicovaný.
    <p>
        Já jsem pozicován absolutně.
    </p>
</div>
</div>

Modrý `div` je pozicovaný relativně. To kromě možnosti ho posunout znamená ještě jednu věc: vytvoření nového souřadnicového systému, který platí pro všechny jeho potomky.

Protože odstavec je pozicován absolutně, můžeš ho umístit kam chceš a je to všechno absolutně vůči modrému divu.


----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Opět si zkus pomocí _Developer Tools_ změnit nastavené hodnoty souřadnic, tentokrát pro oba elementy.

Zkus si také jiné jednotky, třeba procenta.


---

## `position: fixed`

----

Tahle pozice funguje jako absolutní, ale rozdíl je v tom, že souřadnicovým systémem je _viewport_, tedy vnitřek okna prohlížeče. Prvek tedy zůstane zafixovaný v daném místě bez ohledu na to, jestli se díváš na začátek nebo konec dokumentu.

----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

Zkus si v inspektoru _Developer Tools_ změnit pozici odstavce v předchozím cvičení na `fixed`.

---

## `z-index`

----

Prvky skládají nad sebe v pořadí, v jak jsou v kódu napsané a to by znamenalo, že má-li něco být pozicováno 

```html
<div>
    <p class="prvni">První!</p>
    <p class="druhy">Druhý!</p>
</div>
```

```css
div {
    background-color: forestgreen;
    position: relative;
    height:6em;
}

p {
    position: absolute;
    width: 5em;
    height: 3em;
}

.prvni {
    background-color: orange;
    left: 1em;
    top: 1em;
}

.druhy {
    background-color: skyblue;
    left: 2em;
    top: 2em;
}
```

<div class="c-example example-zindex">
<div>
    <p class="prvni">První!</p>
    <p class="druhy">Druhý!</p>
</div>
</div>

----

<!-- .slide: data-state="c-slide-task" -->

### Cvičení

V inspektoru _Developer Tools_ změň z-index druhého odstavce tak, aby se zobrazil pod prvním.