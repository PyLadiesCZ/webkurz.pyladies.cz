# Preprocesory

----

Protože CSS nemá například možnost jak nastavit proměnné, rozhodli se programátoři vytvořit syntaxi, která by to umožnila.
  
Vzhledem k tomu, že to není podporováno v prohlížečích, je třeba z takového kódu
 
Tři nejpoužívanější preprocesory jsou _SASS_, _less_ a _Stylus_.


---

## K čemu se hodí

Ukázky jsou v syntaxi _scss_ (SASS).

----

### Využití proměnných 

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

Výsledné CSS.

```css
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}
```

----

### Vnořování a Media queries


```scss
.foo {
    color: red;
    
    @media (min-width:300px){
        color: blue;
    }
}
```

Výsledné CSS.

```css
.foo {
    color: red;
}

@media (min-width: 300px) {
    .foo {
        color: blue;
    }
}
```

----

## Vyzkoušej si online

http://www.sassmeister.com/