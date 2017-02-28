# Flexbox

----

V moderních prohlížečích je naštěstí podporovaná ještě jedna vlastnost a to `display: flex;`, díky které se dají snadno udělat layouty, které by jinak bylo nutné dělat pomocí floatů nebo pozicování.

---

### Příklad použití

----

V úplně základní podobě vypadá takto:

```html
<div class="testimonials">
    <div>Kurz byl ohromně přínosný.</div>
    <div>Kurz byl úplně nejvíc přínosný a dal mi nejvíc.</div>
    <div>Kurz byl rozhodně přínosný.</div>
</div>
```

```css
.testimonials {
    display: flex;
    background-color: skyblue;
}

.testimonials div {
    margin: 10px;
    padding: 10px;
    font-size: 70%;
    background-color: greenyellow;
}
```


<div class="c-example example-flexbox">
<div class="testimonials">
    <div>Kurz byl ohromně přínosný.</div>
    <div>Kurz byl úplně nejvíc přínosný a dal mi nejvíc.</div>
    <div>Kurz byl rozhodně přínosný.</div>
</div>
</div>


Všimni si, že prvky se roztahují podle obsahu. To lze, podobně jako další chování prvků v elementu s `display: flex;` změnit.


---

### Zdroje k flexboxu

----

* http://flexboxfroggy.com/
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://internetingishard.com/html-and-css/flexbox/