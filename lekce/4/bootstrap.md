# Bootstrap

[Bootstrap](https://getbootstrap.com) je knihovna především CSS (ale i JavaScriptu), která umožňuje vytvořit stránky snadno, rychle a s jistotou fungování napříč podporovanými prohlížeči.

----

Kromě toho, že dává lepší výchozí podobu většině HTML prvků, obsahuje i komplexnější komponenty, z nichž můžeš weby snadno poskládat, aniž bys napsala jediný řádek CSS.

Velkou výhodou je detailní dokumentace a také k němu najdeš hotové komponenty od dalších autorů.

Bootstrap je ideální tam, kde se není příliš nutné zabývat vzhledem, třeba u administračních rozhraní nebo u prototypů. 
Poslouží ale velmi dobře i jako základ vizuálně komplexnějších webů.

---

## Boostrap&nbsp;3 nebo&nbsp;4?

----

Aktuální stabilní verze je 3, která je sice stále funkční a lze na ní stále weby stavět, ale protože od jejího vydání už uplynulo na webové poměry hodně času, budeme se zabývat modernější verzí 4, je aktuálně v beta verzi, takže už se nebude měnit tolik, abys na ní dnes nemohla začít stavět nové stránky. 

Proti verzi 3 je zatím dokumentace o něco méně dokonalá a také hotových komponent dalších autorů není zatím tolik, ale pro naše účely to není důležité.

Dalším rozdílem je to, že _Bootstrap 4_ neřeší fungování v Internet Explorerech 8 a 9 a v Safari na iOS 6, což ale není velký problém, protože se jedná, například v ČR, cca o 1 % uživatelů a toto číslo se stále zmenšuje.

---

## Jak začít

Protože Bootstrap má opravdu dobrou dokumentaci popíšeme si jen nejkratší cestu k cíli. Ty ostatní už najdeš na [webu Bootstrapu](https://getbootstrap.com/docs/4.0/getting-started/).

----

### CSS

Stačí připojit CSS soubor Bootstrapu z cizího, k tomu účelu zřízeného, serveru:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
```

Aktuální odkaz najdeš vždy v [dokumentaci Bootstrapu](https://getbootstrap.com/docs/4.0/getting-started/), stačí ho zkopírovat tak jak je. Novým attributům `crossorigin` a `integrity` rozumět nemusíš, stačí je zachovat.

Samozřejmě nic ti nebrání si soubor přidat tam, kde máš ostatní soubory tvého webu a připojit ho odsud.

```html
<link rel="stylesheet" href="bootstrap.min.css">
```

----

### HTML

Bootstrap počítá s tím, že HTML stránky, na které ho používáš má nějakou konkrétní strukturu. Takhle vypadá kód minimální stránky:

```html
<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Dva předchozí tagy mají být první, ostatní obsah hlavičky následuje za nimi. -->
        <title>Základní HTML stránka</title>
    
        <!-- Připojení CSS Bootstrapu -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    </head>
    <body>
        <h1>Hello, world!</h1>
    </body>
</html>
```

---

## Grid

[Grid](https://getbootstrap.com/docs/4.0/layout/grid/) je asi nejčastěji využívaná komponenta. V BS4 je postaven na využití _flexboxu_ a přístupu _mobile-first_.

----

### Základní použití

Vždy je potřeba začít kontejnerem, do něj dát řádek (řádky) a teprve do této struktury umisťovat sloupce. Nejjednodušší layout se dvěma sloupci tedy vypadá takto: 

```html
<div class="container">
    <div class="row">
        <div class="col">sloupec (column)</div>
        <div class="col">sloupec (column)</div>
    </div>
</div>
```

Pokud bys chtěla, aby byl kontejner vždy až do kraje, použij třídu `container-fluid`.

----

### Šířka sloupců

Výchozí chování sloupců je nastaveno tak, že jsou stejně široké, pokud bys chtěla nějaký sloupec užší nebo širší než ostatní, přidává se k třídě `col` ještě šířka.

```html
<div class="container">
    <div class="row">
        <div class="col-3">úzký sloupec</div>
        <div class="col">sloupec</div>
    </div>
</div>
```

Pokud mají sloupce zůstat na jednom řádku, musí být součet takto nastavených šířek maximálně 12.

----

### Responzivita gridu

Bootstrap má předdefinované následující breakpointy: 576px je _Small (sm)_, 768px _Medium (md)_, 992px _Large (lg)_ a 1200px _Extra large (xl)_.

Přidáním zkratky názvu breakpointu do definice šířky sloupce definuješ, že od této šířky okna prohlížeče má mít sloupec jinou šířku. V příkladu níže bude _sloupec A_ do šířky obrazovky 767 pixelů zabírat 2/3 šířky kontejneru a od 768 pixelů pak 4/5 šířky kontejneru.

```html
<div class="container">
    <div class="row">
        <div class="col-8 col-md-10">sloupec A</div>
        <div class="col-4 col-md-2">sloupec B</div>
    </div>
</div>
```

----

### Vnořování

Složitější layouty jde také vytvářet pomocí vnořování. Stačí nadefinovat nový řádek (`row`) uvnitř sloupce (`col`).

```html
<div class="container">
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">vnořený sloupec</div>
                <div class="col">vnořený sloupec</div>
            </div>
        </div>
        <div class="col">sloupec</div>
    </div>
</div>
```

----

Grid má i další možnosti, které najdeš v [dokumentaci](https://getbootstrap.com/docs/4.0/layout/grid/).

---

## Další komponenty

----

Bootstrap obsahuje další typické součásti webů jako jsou [tlačítka](https://getbootstrap.com/docs/4.0/components/buttons/), [formuláře](https://getbootstrap.com/docs/4.0/components/forms/), [navigační menu](https://getbootstrap.com/docs/4.0/components/navbar/), [drobečkové navigace](https://getbootstrap.com/docs/4.0/components/breadcrumb/), [stránkování](https://getbootstrap.com/docs/4.0/components/pagination/) a mnohé další. Určitě si je všechny projdi v [dokumentaci](https://getbootstrap.com/docs/4.0/components/), abys o nich měla tušení, až budeš něco takového potřebovat na webu. 

---

## Utilities

----

[Utilities](https://getbootstrap.com/docs/4.0/utilities/) jsou pomocné třídy, díky kterým často není potřeba psát příliš vlastního CSS.

Umožňují nastavovat barvy, padding i margin, vlastnosti flexboxu, pozicování, šířky a mnohé další vlastnosti a to i často responzivně podobně jako u gridu.

```html
<div class="container">
    <div class="row">
        <div class="col pt-1 text-danger">
            sloupec s horním paddingem velikosti 1 
            a textem s barvou označující nebezpečí (výchozí je červená)
            </div>
        <div class="col p-1 p-md-3">
            sloupec s paddingem velikosti 1, 
            od šířky okna 768 px nahoru s paddingem velikosti 3
        </div>
    </div>
</div>
```

Samozřejmě možnosti těchto tříd jsou omezeny na předdefinované barvy a velikosti, ale na z pohledu designu je konzistence často žádoucí a proto omezený výběr vadit nemusí. Pokud tyto třídy nestačí, je vždy možnost si přidat vlastní CSS.

Opět si projdi v [dokumentaci utilit](https://getbootstrap.com/docs/4.0/utilities/) jaké možnosti mají.

---

## Úpravy Bootstrapu

Základní vzhled Bootstrapu je sice v pořádku, ale často nechceš, aby tvoje stránka vypadala přesně tak, jak to nadesignovali jeho autoři. Jsou v podstatě dvě možnosti jak toho docílit a lze je i kombinovat.

----

### Dodatečné CSS

Protože CSS, které sis připojila, je pořád jen CSS, lze libovolnou vlastnost přepsat tvým vlastním CSS. Můžeš, a běžně se to dělá, měnit jak vlastnosti prvků, které Bootstrap nastavuje, tak samozřejmě přidávat nové vlastnosti (včetně nových tříd) pro vlastní prvky, které Bootstrap neobsahuje.

Stačí když bude soubor s tvým CSS připojený za tím od Bootstrapu: 

```html
        …
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" href="vlastni-styly.css">
        …
```

`bootstrap.css` obsahuje definici velikosti nadpisu takto:

```css
.h1, h1 { font-size: 36px; }
```

Ve vlastním CSS můžeš tuto vlastnost přepsat a třeba i doplnit o nějakou novou.  

```css
.h1, h1 { 
    font-size: 48px;
    font-style: italic;
}
```

Tip: Jakými selektory a co Bootstrap nastavuje nejsnadněji zjistíš pomocí _Developer Tools_.

----

### Vygenerovaní vlastní verze

Při rozsáhlejších změnách je praktičtější si vygenerovat vlastní verzi Bootstrapu. Protože je Bootstrap napsaný v preprocesoru Sass, jde hlavně kompilací CSS nastavit jinak proměnné na základě kterých se celé CSS generuje. 

Je potřeba si stáhnout zdrojové soubory v _sass_ a zprovoznit si kompilaci výsledného CSS. Umožňuje to nejen přepsat výchozí hodnoty proměnných vlastními dle libosti, ale i pěkně verzovat tyto změny v gitu.

Tato varianta je mimo rozsah tohoto kurzu, ale pokud tě zajímá, můžeš se podívat na [projekt, který tento přistup používá](https://github.com/benabraham/bs4-nodejs-static) a který je zamýšlen jako základ (boilerplate) pro tvorbu statického webu na Bootstrapu.

---

## JavaScript

----

Pokud chceš využít některý z JavaScriptových pluginů Bootstrapu, je potřeba přidat na konec dokumentu, před `</body>` připojení tří souborů s JavaScriptem: nejdřív knihovny _jQuery_ a _Popper_, kterou JavaScript Bootstrapu využívá a potom samotný soubor s JavaScriptem Bootstrapu.

Opět využij cizí server a nemusíš tak nic stahovat. 

```html
        …
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    </body>
</html>
```

Skoro všechny javascriptové funkce lze aktivovat snadno přes `data-` atributy, podobně jako jsme používali knihovnu _Lightbox_, jiné je třeba volat pomocí vlastního JavaScriptu. Ten v případě jeho potřeby připoj jako poslední.

```html
        …
        <script src="vlastni-javascript.js"></script>
    </body>
</html>
```

Detaily k použití jednotlivých pluginů už si najdi v [dokumentaci](https://getbootstrap.com/docs/4.0/).