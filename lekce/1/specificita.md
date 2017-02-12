# Jak se aplikují styly 2

To, která hodnota platí, je o něco složitější, než jen pravidlo, že poslední nastavení hodnoty přepisuje předchozí. Záleží to totiž ještě na _specificitě_.

----

## Specificita

Specificita je síla selektoru.

Pokud nějakou vlastnost nastavuješ v CSS tomu samému elementu víckrát, tak platí hodnota nastavená pomocí silnějšího (specifičtějšího) selektoru. 

Teprve pokud je specificita selektorů, kterými si vybrala nějaký prvek, stejná, aplikuje se pravidlo o tom, že platí poslední nastavená hodnota. 

----

### Jak určit specificitu selektoru?
 
Silnější selektor má více tříd, než selektor slabší.

Pokud mají dva selektory stejný počet tříd, tak silnější je ten s větším počtem tagů.


Pokud budeme mít takovéhle HTML, …
```html
<div>
    <p class="tip">obsah</p>
</div>
```
… tak element odstavce lze vybrat pomocí těchto tří selektorů:

```css
.tip { color: red; }

p { color: green; background-color: lightgray; }

div p { color: blue; font-style: italic; }
```

<div class="c-example example-specificity">
<div><p class="tip">obsah</p></div>
</div>


Nejsilnější je ten první (jedna třída), pak ten třetí (žádná třída a dva tagy) a nakonec ten druhý (žádná třída a jeden tag), proto je text červeně, přestože je ta hodnota pro ten samý element přepsána ještě dvakrát.

Specificita může být ještě složitější, ale zatím by sis měla vystačit s tímto.
