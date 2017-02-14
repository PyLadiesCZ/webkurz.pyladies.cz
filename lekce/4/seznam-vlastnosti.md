----

### Box properties

* [height](https://devdocs.io/css/height)
* [width](https://devdocs.io/css/width)

* [margin](https://devdocs.io/css/margin)
* [border](https://devdocs.io/css/border)
* [padding](https://devdocs.io/css/padding)

* [overflow](https://devdocs.io/css/overflow)

* [max-width](https://devdocs.io/css/max-width)
* [min-width](https://devdocs.io/css/min-width)
* [max-height](https://devdocs.io/css/max-height)
* [min-height](https://devdocs.io/css/min-height)

----

### [display](https://devdocs.io/css/display) property

Important values are:

* none (hides element completely, even from screenreaders)
* block
* inline
* inline-block
* flex (see CSS Flexible Box Layout)
* inline-flex (see flexbox)

See [display on cssreference.io](http://cssreference.io/property/display/)

----

### [visibility](https://devdocs.io/css/visibility) property

Only hides element visually. This is still read by screenreaders.

----

### CSS Flexible Box Layout or short *flexbox*

[A guide to flexbox on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[flexboxfroggy.com](http://flexboxfroggy.com) is a interactive website to learn basics of flexbox

[Free course on flexbox](https://flexbox.io) (free account required)


<!-- .slide: data-state="c-slide-inter" -->
----

----

### [Pseudo-classes](https://devdocs.io/css/pseudo-classes)

The following are especially useful when styling links

* [:link](https://devdocs.io/css/:link)
* [:visited](https://devdocs.io/css/:visited)
* [:hover](https://devdocs.io/css/:hover)
* [:active](https://devdocs.io/css/:active)

Note: the order in which you use them in CSS matters and this is the correct order.

----

## Pseudoelementy

### [Pseudo-elements](https://devdocs.io/css/pseudo-elements) and generated content

The following are especially useful in combination with [generated content](https://devdocs.io/css/css_generated_content)

* [::after](https://devdocs.io/css/::after)
* [::before](https://devdocs.io/css/::before)


----

## Odrážkový seznam

```html
<ul>
    <li>odrážkový</li>
    <li>seznam</li>
</ul>
```

>
* `ul` = unordered list
* `li` = list item
* Pamatujeme na správné zanořování a odsazování vnořených prvků.
* `li` vždy musí být přímo zanořené v `ul` (nebo `ol`)
* Uvnitř `li` mohou být další prvky (nadpis, odstavec, dokonce další odrážkový seznam). My si vystačíme s odkazy.

----

----

<!-- .slide: data-state="c-slide-inter" -->

# Shorthand
## zkrácený zápis

----

## Jedna hodnota

```css
.foo { padding: 10px; }

.bar {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
}
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>
* `.foo` i `.bar` dělají to samé

----

## Dvě hodnoty

```css
.foo { padding: 10px 5px; }

.bar {
    padding-top: 10px;
    padding-right: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
}
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>
* `.foo` i `.bar` dělají to samé

----

## Čtyři hodnoty

```css
.foo { padding: 10px 20px 30px 40px; }

.bar {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>
* `.foo` i `.bar` dělají to samé

----

## Ohraničení

```css
.foo { border: 1px dotted red; }

.bar {
    border-width: 1px;
    border-style: dotted;
    border-color: red;
}
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

>
* `.foo` i `.bar` dělají to samé

----

# Developer Tools

----

## Inspektor

----

## Změna vlastností

----

# Domácí úkol

## Jednoduchá stránka


----


### Comments

[CSS comments](https://devdocs.io/css/comments)

[HTML comments](https://devdocs.io/dom/comment)

----

### [CSS properties inheritance](https://devdocs.io/css/inheritance)

----

### [CSS Selector Specificity](https://devdocs.io/css/specificity)

[Specificity calculator](https://specificity.keegan.st/)

Don't forget, that using `!important` is a bad, bad thing to do.

----

### [CSS Shorthand properties](https://devdocs.io/css/shorthand_properties)

----

### New unit

#### [% (percent)](https://devdocs.io/css/percentage)

----

### Use classes for styling

Never use IDs. Causes problem with specificity.

Styling elements directly is ok, but mostly in simple and special cases.

----

### Multiple classes for one element

One of the advantages of classes over ids is, that you can set multiple classes on one element.

```html
<div class="foo bar"></div>
```

----

## Float

----

Before flexbox practical availability in browsers, float was used to create layouts. Nowadays it should be used mostly as it was intended to be used originaly: to float text around boxes (usually images). But most of current websites use float to create layout so you will definitely run into it.

See [more float on Learnlayout.com](http://learnlayout.com/float.html) (note: don't use the clearfix hack from there)

See [more about float on devdocs.io](https://devdocs.io/css/float)

[clear](https://devdocs.io/css/clear) is a property often used with float.

----

### Clearfix

Apply to an element containing floated elements to fix usually unwanted behavior.

```css
.clearfix:after {
    content: "";
    display: table;
    clear: both;
}
```


----

## [position](https://devdocs.io/css/position) property

----

* relative
* absolute
* fixed

See [position on cssreference.io](http://cssreference.io/property/position/)

----

### Properties used with position property

* [top](https://devdocs.io/css/top)
* [left](https://devdocs.io/css/left)
* [right](https://devdocs.io/css/right)
* [bottom](https://devdocs.io/css/bottom)
* [z-index](https://devdocs.io/css/z-index)

----


## This is a subset of properties you should know about sooner or later.

That doesn't mean you have to remember syntax and values of every single one. But if you know what they do, it will help immensely.

Links are to cssreference.io if available

----

### Most important

In no particular order

[color](http://cssreference.io/property/color/)

[background](http://cssreference.io/property/background/)

[font](http://cssreference.io/property/font/)

[line-height](http://cssreference.io/property/line-height/)

[text-align](http://cssreference.io/property/text-align/)

[display](http://cssreference.io/property/display/)

[visibility](https://devdocs.io/css/visibility)

[padding](http://cssreference.io/property/padding/)

[border](http://cssreference.io/property/border/)

[margin](http://cssreference.io/property/margin/)

[width](http://cssreference.io/property/width/) and [max-width](http://cssreference.io/property/max-width/) and [min-width](http://cssreference.io/property/min-width/)

[height](http://cssreference.io/property/height/) and [max-height](http://cssreference.io/property/max-height/) and [min-height](http://cssreference.io/property/min-height/)

[overflow](http://cssreference.io/property/overflow/)

[top](http://cssreference.io/property/top/), [bottom](http://cssreference.io/property/bottom/), [left](http://cssreference.io/property/left/) and [right](http://cssreference.io/property/right/)

[position](http://cssreference.io/property/position/)

[z-index](http://cssreference.io/property/z-index/)

[box-sizing](http://cssreference.io/property/box-sizing/)

[content](http://cssreference.io/property/content/)

[float](http://cssreference.io/property/float/)

[clear](http://cssreference.io/property/clear/)

[text-decoration](http://cssreference.io/property/text-decoration/)

----

### You might need these but you can go long way without them

In no particular order

[vertical-align](https://devdocs.io/css/vertical-align)

[list-style](http://cssreference.io/property/list-style/)

[table-layout](https://devdocs.io/css/table-layout/)

[cursor](http://cssreference.io/property/cursor/)

[white-space](http://cssreference.io/property/white-space/)

[text-transform](http://cssreference.io/property/text-transform/)

[opacity](http://cssreference.io/property/opacity/)

[text-indent](http://cssreference.io/property/text-indent/)

[outline](http://cssreference.io/property/outline/)

[transform](http://cssreference.io/property/transform/)

[text-shadow](http://cssreference.io/property/text-shadow/)

[box-shadow](http://cssreference.io/property/box-shadow/)
