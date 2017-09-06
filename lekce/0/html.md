# Speciální znaky (nejen) pro psaní webů

<!-- .slide: data-background="img/keyboard-cs-html.svg" -->

Protože jsou pro psaní HTML potřeba některé méně obvyklé znaky, máš na stole pomůcku pro jejich nalezení na klávesnici. Spoustu z nich už asi znáš, ale pro jistotu je máš takto po ruce. 

<figure class="image"><img src="keyboard-cs-html.svg" width="100%" style="border:1px solid black;max-height:70vh;width:auto;" alt="mapa klávesnice se zvýrazněnými znaky"></figure>

Na české klávesnici je zásadní klávesa <kbd>AltGr</kbd>, s kterou napíšeš většinu znaků.

Pokud se k tobě výtisk z nějakého důvodu nedostal, můžeš si [stáhnout PDF s klávesnicí](klavesnice-a4.pdf) a vytisknout si ji sama.

---

# HTML

HTML není programovací jazyk: nejde v&nbsp;něm programovat, nemá žádné proměnné ani cykly.

HTML (Hyper Text Mark-up Language) je jazyk značkovací. Definujeme s jeho pomocí význam částí dokumentu, a to pomocí značek, anglicky tagů.

HTML budeme psát ve verzi 5, která má v&nbsp;současnosti velmi dobrou podporu v&nbsp;běžně používaných prohlížečích.

----

## Tag/značka

```html
<názevtagu>
    Obsah tagu
</názevtagu>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->

Tag se skládá ze špičatých závorek a názvu tagu mezi nimi.

Většina tagů je párových: první tag je otevírací a druhý zavírací a liší se jen lomítkem za první špičatou závorkou.

Mezi tagy je jeho obsah, tedy to, co obaluje. To může být obyčejný text nebo další tag či tagy.

Existují i nepárové tagy, k nim se dostaneme za chvíli, ale není to věda, prostě jen nemají uzavírací tag.

----

## Základní struktura HTML

Každý HTML dokument má mít základní strukturu.

```html
<!DOCTYPE HTML>
<html>
    <head>
        <!-- vlastnosti stránky -->
    </head>
    <body>
        <!-- samotný obsah stránky -->
    </body>
</html>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->


Úplně první je tzv. doctype. Říká prohlížeči, jakou verzi HTML má čekat. Tenhle je pro HTML 5 a není potřeba se jím více zabývat. Hlavně ho tam vždy měj.

Všechno ostatní je uvnitř tagu `html`. Říkáme také, že je vše *obaleno* tagem `<html>`.

V hlavičce (`<head>`) se definují vlastnosti pro celou stránku. Většinou „nejsou vidět“.

V těle stránky (`<body>`) se definuje vlastní obsah stránky, texty, obrázky atd. Většinou „je vidět“.

Všimni si odsazení. Na rozdíl od Pythonu není odsazování nutné pro fungování, ale dodržuj ho, kód bude pro tebe přehlednější.

Všimni si komentářů, vše mezi `<!--` a `-->` nebude mít na výslednou stránku žádný vliv. 

---

## Tagy

Tagů je přes stovku, ale na většině webů si vystačíš se znalostí zlomku z nich.

----

### Odstavec

Jedním z nejčastěji používaných tagů je odstavec textu. Podobně jako u jiných, je jeho název zkratkou anglického slova: `p` jako _paragraph_.

```html
<p>
    PyLadies jsou (mezinárodní) aktivita, 
    která se snaží přiblížit IT ženám a 
    ženy k IT. K tomu využívá programovací 
    jazyk Python, který je perfektní pro 
    výukové účely a zároveň je po něm velká 
    poptávka na trhu práce.
</p>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Pro dnešní cvičení si nejdřív vytvoř složku. 

Zkus si sama vložit kód výše do HTML dokumentu `index.html`.

Otevři si `index.html` v prohlížeči. Obvykle jsou soubory typu html přiřazeny k otevření v prohlížeči, takže stačí jen otevřít. Adresa bude něco jako `file:///C:/pyladiesweb1/index.html`, to je základní a nejsnazší způsob jak zobrazit HTML, které máš na disku. Výhodou je, že není potřeba žádná další konfigurace a spouštění serveru. Chvíli si s tím vystačíme, ale pozor, některé pokročilejší funkce při tomto zobrazení fungovat nebudou. Zatím to nevadí.
 
Pokud uděláš nějakou změnu v HTML, je potřeba otevřenou stránku v prohlížeči obnovit pomocí klávesové zkratky <kbd>F5</kbd> nebo <kbd>Ctrl + R</kbd> (Windows, Linux) nebo <kbd>Command + R</kbd> (Mac). 

V praxi frontendisti používají spíš variantu, která s jistotou načte vše znovu, protože prohlížeč si zobrazenou stránku a související soubory ukládá do vyrovnávací paměti (cache, čti keš), aby je nemusel pokaždé stahovat, a po obyčejném obnovení se může stát, že se použije neaktuální soubor. Tato varianta se dá udělat pomocí kliknutí na ikonu zatímco držíš <kbd>Shift</kbd> nebo lépe <kbd>Ctrl + F5</kbd> či <kbd>Ctrl + Shift + R</kbd> (Windows, Linux) nebo na Macu <kbd>Command + Shift + R</kbd>.

Všimni si, že i na Windows jsou lomítka normální `/`, nikoli zpětná, jako `\` při práci se soubory a složkami. Obecně v HTML a dalších webových jazycích v cestách nikdy zpětná lomítka nepoužívej. Prohlížeč si tam dá správná a nebudeš mít problém, až to budeš vystavovat na internet.

Také si všimni, že z posloupnosti mezer a zalomení řádku se stane jediná mezera: text se „slije“. V HTML na whitespace znacích (mezery, tabulátory, nové řádky) prostě moc nezáleží.

Přesto si dej na formátování kódu (odsazování, odřádkování) záležet, jinak se v tom u jen trochu komplexnějšího souboru nejde vyznat. Neuděláš chybu, když budeš dávat jeden tag na řádek a odsadíš vše, co je zanořeno.

----

### Nadpisy

Další základní tagy, které se používají pro strukturování textu, jsou nadpisy. Mají 6 úrovní, proto za `h` (jako heading) je ještě číslo určující úroveň nadpisu od 1 do 6. `h1` je nejvyšší úrovně a `h6` nejnižší.

Obvykle je `h1` na stránce jeden a je v něm název toho, o čem daná stránka je. Například v e-shopu na stránce s detailem produktu v něm bude název tohoto produktu. Na zpravodajském webu na stránce s článkem v něm zase bude titulek článku, apod.


```html
<h1>Pyladies</h1>

<p>…</p>

<h2>Po kurzu máš možnost</h2>

<p>…</p>

<h3>Dál programovat</h3>

<p>…</p>

<h3>Stát se koučkou</h3>

<p>…</p>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

Dodržuj pořadí nadpisů: nenech se svést tím, jak vizuálně vypadají (po `h1` vždy nejprve `h2`, pak teprve `h3`)

----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si přidat i pár nadpisů (pozor na správnou hierarchii).

**Tip:** Protože psaní tagů znamená psaní spousty znaků, vznikl _Emmet_. Editor _Atom_ (a spousta dalších editorů) ho má zabudovaný nebo si jde stáhnout plugin/extension/balíček s Emmetem. Abys napsala nadpis první úrovně, stačí napsat `h1` a zmáčknout <kbd>Tab</kbd>. Vše, co je potřeba, aby z toho byl tag, se ti doplní samo. _Emmet_ toho samozřejmě umí usnadnit víc, ale tohle je asi nejdůležitější.

<!-- todo: doplnit info o důležitosti nadpisů pro přístupnost -->

----

### Vyznačení částí textu

Ke zdůraznění části věty používáme tag `<em>` (z anglického _emphasized_). 

K vyznačení toho, co je důležité, pak `<strong>`.

```html
V této větě ukazujeme <em>příklad</em>, jak použít zdůraznění. 

Je <strong>naprosto nutné</strong>, aby to bylo jasné.

```

Nenech se zmást tím, že jedno se zobrazuje <span style="font-style:italic;">kurzívou</span> a druhé <span style="font-weight:bold;">tučně</span>. To je jen výchozí zobrazení v prohlížeči. Podstatné pro to, který tag použiješ, je jeho význam. Vzhled si na konci dnešní lekce budeš umět změnit.

----

### Odkaz

Odkaz je to, co z textu dělá hypertext, a pro web je to tedy jeden z nejdůležitějších tagů. Jeho název `<a>` pochází z anglického _anchor_. Anglicky je to také buď _link_ nebo _hyperlink_.

```html
<a href="https://www.google.com/">
    nejlepší přítel
</a>
```
<!-- .element: class="c-text-md stretch" contenteditable="true" -->

Protože někde musíme definovat nejen to, jaká část obsahu je odkazem, ale i kam ten odkaz vlastně vede, použijeme poprvé tzv. atribut. Obecně s pomocí atributů definujeme prohlížeči další data k tagu. V tomto případě se atribut jmenuje `href` a jeho hodnotou je to, co je v uvozovkách, tedy `https://www.google.com/`. Atributy se vždy píšou pouze do otevíracího tagu.


Mluvnická vsuvka: prosím nepoužívej pro _odkaz_ slova jako _prolink_ nebo _proklik_. 
První je bastard z korporací, který není daleko od paskvilů jako je _dovykomunikovat_.
Druhý je zavedené slovo, které má ale jiný význam, používají ho lidé z reklamy, protože dnes se často na webu platí pouze za ty reklamy, na které uživatel klikne, a jako proklik se označuje právě ta akce.

Vím, že to takhle špatně říká spousta lidí a že to asi za pár let stejně v ÚJČ zahrnou do slovníku spisovné češtiny, ale mezi odborníky by se to dít nemělo.

----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si přidat i pár odkazů, třeba na web pyladies.

Odkaz může být i na e-mail (otevře mailového klienta, kterého má uživatel nastaveného). Najdi si sama, jak se to dělá.

Tip: U odkazů na něj vždy zkus kliknout, abys měla jistotu, že je opravdu správně. 

<!-- todo: doplnit info o důležitosti textů odkazů pro přístupnost -->

----

### Obrázek

První nepárový tag: nic neobaluje, pouze označuje místo, kam se vloží obrázek.


```html
<img>
```
<!-- .element: class="c-text-lg contenteditable="true" -->

----

Je třeba doplnit cestu (URL) k obrázku pomocí atributu `src`. Zde linkujeme obrázek přímo z webu pyladies.cz.

```html
<img src="http://pyladies.cz/static/img/icon/who.png">
```

Můžeš si ho ale stáhnout a umístit přímo do složky, kde máš `index.html`.

```html
<img src="who.png">
```
Nebo vytvořit složku `obrazky` ve složce, kde máš `index.html`.  

```html
<img src="obrazky/who.png">
```
<!-- .element: class="c-text-md" contenteditable="true" -->

Všimni si, že stále používáme jen `/` a nikdy `\`.

----

`alt` je povinný atribut a je v něm textový popis obsahu obrázku pro ty, co ho nemohou z různých důvodů vidět: pro nevidomé, vyhledávače, uživatele s pomalým připojením. 

```html
<img src="http://pyladies.cz/static/img/icon/who.png" alt="PyLady">
```
<!-- .element: class="c-text-md" contenteditable="true" -->

Pokud obrázek nemá žádný smysluplný obsah (např. grafické prvky typu čára), alt se definuje jako prázdný řetězec: `alt=""`

----

#### Formáty obrázků pro web

Problém s obrázky na webu je, že jsou často datově dost velké, a jejich stahování tudíž trvá a taky třeba spotřebovává datové tarify. Proto se používají většinou ztrátové formáty, které vypadají pro lidské oko skoro stejně jako originály, ale datově jsou mnohem menší. 

Nejčastěji se používají tyto:

* JPEG („džejpeg“, koncovka .jpg): většinou vhodné pro fotografie
* PNG („ping“, koncovka .png): většinou vhodné pro ilustrace nebo tam, kde je potřeba průhlednost obrázku  
* GIF („gif“, koncovka .gif): většinou jen pro animace
* SVG („esvégé“, koncovka .svg): vektorový formát, zásadní výhodou je, že se dá libovolně zvětšit nebo zmenšit, a přitom zůstává ostrý

<!-- todo: doplnit ukázky -->

----

#### Licence obrázků

Ne každý obrázek na internetu smíš použít, aby to bylo v souladu s právem. Přitom těch, které lze skoro libovolně použít, je spousta. Lze je hledat přímo na Google tak, že si pod „Nástroje“ / „Tools“ omezíš hledání na ty s právy k použití: jen nekomerční.

----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus si přidat dva obrázky. Jeden nalinkuj z cizího webu, druhý si stáhni do stejné složky, kde máš `index.html`, a nalinkuj ho odsud. Můžeš si zkusit i variantu se složkou, pokud je čas.

---

## HTML hlavička

Zatím jsme se zabývali obsahem `<body>`, ale vraťme se ještě k obsahu `<head>`. Ten se „nezobrazuje“, zato obsahuje data, která ovlivňují vzhled a chování celé stránky.

----

### Titulek

Zobrazuje se na záložce v prohlížeči ‒ jediný z `<head>` je přímo vidět.

```html
<head>
    <title>Název stránky</title>
</head>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->


Protože je z titulku často vidět jen prvních pár znaků, je dobré to nejdůležitější dát první a teprve na konec třeba název webu: <q>Staň se PyLady! – PyLadies</q> je lepší než <q>PyLadies: Staň se PyLady!</q>, uživatelům se tak lépe orientuje.

----

### Definice kódování

Protože jsou ruzné způsoby, jakými jsou textové soubory _kódovány_, je potřeba prohlížeči pro jistotu říct, v jakém kódování je soubor napsaný. S největší pravděpodobností je tvůj soubor v kódování _UTF-8_. Je dobré definovat kódování jako první, v některých prohlížečích to zabrání špatnému zobrazení `<title>`

```html
<head>
    <meta charset="UTF-8">
    <title>Název stránky</title>
</head>
```
<!-- .element: class="c-text-xl stretch" contenteditable="true" -->

V souboru s kódováním UTF-8 můžeš napsat v podstatě jakékoli znaky a všechny prohlížeče ho podporují, není tedy důvod používat jiné.

----

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Definuj svému HTML kódo
---

## Další tagy

----

[Přehled dalších praktických tagů](/lekce/dodatky/html-tagy)