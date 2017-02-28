# Pozicování

----

Vlastnost `position` umožňuje nastavit nebo změnit pozici elementu.

* `static`
* `relative`
* `absolute`
* `fixed`

Často je používáme společně se 4 vlastnostmi, které určují souřadnice: `left`, `right`, `top` a `bottom`. Obvykle využíváme jen jednu pro svislou pozici a druhou pro vodorovnou.

---

## `position: static`

----

Výchozí hodnota, prvky s tímhle pozicováním fungují přirozeně a jsou součástí toku dokumentu.

---

## `position: relative`

----

Když nastavíš hodnotu na `relative`, element se pohne vzhledem ke svojí stávající pozici.


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

Vyzkoušej si pomocí inspektoru _Developer Tools_ (<kbd>Ctrl+Shift+C</kbd> nebo na <kbd>Cmd+Shift+C</kbd> na Macu), jak se budou prvky chovat, když zkusíš prvnímu odstavci změnit hodnoty `top` a `left`. Tip: lze to i pomocí šipky nahoru a dolů na klávesnici a to ve chvíli, kdy hodnotu edituješ.

Všimni si, že ostatní odstavce jsou tam, kde by byly, kdyby první neměl nastavenou relativní pozici. Ostatní prvky jako by nevěděly, že se něco změnilo.

Změna pozice pomocí `position: relative;` nemá na tok dokumentu vliv. 


---

## `position: absolute`

----

```html
<div>
    Já jsem relativně pozicovaný.
    <p>
        Já jsem pozicován absolutně.
    </p>
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

Protože oranžový odstavec je pozicován absolutně, můžeš ho umístit kam chceš a je to všechno absolutně vůči modrému divu.

Opět si zkus změnit nastavené hodnoty souřadnic, tentokrát pro oba elementy.

Zkus si také jiné jednotky, třeba procenta.


---

## `position: fixed`

----

Tahle pozice funguje jako absolutní, ale rozdíl je v tom, že souřadnicovým systémem je _viewport_, tedy vnitřek okna prohlížeče. Prvek tedy zůstane zafixovaný v daném místě bez ohledu na to, jestli se díváš na začátek nebo konec dokumentu.
