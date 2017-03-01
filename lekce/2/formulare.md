# Formuláře

Jak vytvořit opravdovou webovou aplikaci - tedy stránku, která umí
komunikovat s uživatelem a měnit se podle toho, co jí pošle.

----

## Formuláře v HTML

K tomu, aby mohl uživatel něco stránce poslat, se používají _formuláře_. Jedná
se o speciální sadu tagů v HTML. Základem jsou `<form>` a `<input>`:

```html
<form action="" method="post">
    <label>
        e-mail
        <input type="text" name="email">
    </label>
    <input type="submit" value="Odeslat">
</form>
```

<div class="c-example">
<form action="" method="post">
    <label>
        e-mail
        <input type="text" name="email">
    </label>
    <input type="submit" value="Odeslat">
</form>
</div>

Tímto zápisem na stránku dostaneme formulář, který obsahuje jedno políčko s popiskem a jedno tlačítko.

Prvek `<form>`
budeš v prohlížeči hledat marně, v základu je totiž neviditelný a jen seskupuje `<input>` prvky, které se mají odesílat společně. 

Co naopak vidět můžeš, je že prvek `<input>`, který představuje vstup od uživatele,
může nabývat poměrně rozličných podob podle toho, jaký má `type`.
 
Všimni si, že při kliknutí na text popisku („e-mail“) se objeví kurzor v `inputu`. 

Způsob zápisu `<label>` tak, jak ho vidíš, je jeden ze dvou možných. Ten druhý si ukážeme později.

---

### Odesílací tlačítko

----

Prvek `input` typu `submit` je trochu speciální, představuje totiž tlačítko k odeslání formuláře. Když na něj
uživatel klikne, tak vše, co do té doby do formuláře vyplnil, prohlížeč vezme a odešle na server. Tlačítku budeš chtít nastavit vlastní popisek přes atribut `value`:

```html
<input type="submit" value="Jdu do toho!">
```

<div class="c-example">
<input type="submit" value="Jdu do toho!">
</div>

---

### Jména políček

----

Jak si můžeš v prvním příkladu formuláře všimnout, pole pro zadání e-mailu má atribut `name` s hodnotou `email`.
To je velmi důležité pro to, abys mohla na straně serveru s daty něco dělat. Představ si
formulářová data jako Python slovník. Hodnoty, které uživatel vepíše do políček, budeš moci získat
přes jejich jména z atributu `name`.

```html
<form action="" method="post">
    <label>
        Jméno <input type="text" name="first_name">
    </label>
    <label>
        Příjmení <input type="text" name="last_name">
    </label>
    <input type="submit" value="Odeslat">
</form>
```

Představ si, že do uvedeného formuláře uživatel zadá `Jára` jako jméno a `Cimrman` jako příjmení.
Kdyby jej potom odeslali tlačítkem, na serveru obržíš něco, co bude připomínat následující slovník:

```python
{
  'first_name': 'Jára',
  'last_name': 'Cimrman',
}
```
---

### Kam odesílat?

----

Formuláři můžeš přidat atribut `action`, který upřesňuje, kam se mají poslat vyplněná data:

```html
<form action="/kontaktni-formular" method="post">
    …
</form>
```

Takový formulář pošle svá data na cestu `/kontaktni-formular`, kde si je bude moci
vyzvednout a zpracovat náš server napsaný v Pythonu. Pokud necháme atribut `action` prázdný, odešle se formulář na tutéž stránku, na které 
se nachází.

```html
<form action="" method="post">
    …
</form>
```

Jestliže se uvedený formulář bude nacházet na cestě `/kontakt`, bude se na ni také odesílat.

---

### Jak odesílat?

----

Formulář můžeš nechat odesílat dvěma různými metodami. Metoda se nastavuje přes atribut
`method` a je lepší nenechávat prohlížeč na pochybách a vždy ji uvést.

Když uživatel odešle formulář metodou `GET`, objeví se všechno, co do něj vyplnil, v adrese cílové stránky
jako _parametry_ za otazníkem.

```html
<form action="/vyhledavani" method="get">
    <input type="text" name="vyraz">
    <input type="submit" value="Hledat">
</form>
```

Napíše-li do políčka v uvedeném formuláři slovo `PyLadies` a pak klikne na tlačítko, dostane se na cestu `/vyhledavani?vyraz=PyLadies`. Klidně bys mohla místo formuláře rovnou udělat odkaz na `/vyhledavani?vyraz=PyLadies` a výsledek by byl stejný. Rozdíl je jen v tom, že odkaz je ve stránce napevno, kdežto formulář odesílaný pomocí `GET` umožňuje uživateli výslednou adresu „sestrojit“ z toho, co zadá do políček.

`get` je totiž způsob, jak server poprosit o jakoukoliv běžnou stránku. Doteď jsi tuto metodu používala, jen jsi o tom netušila. Když jsi třeba do adresního řádku napsala `http://127.0.0.1:5000/kontakt` (nebo klikla na odkaz), prohlížeč poslal serveru _požadavek_ `GET /kontakt`. Jak si za chvíli ukážeme, ve Flasku v základu každá cesta reaguje právě na požadavky `get`, aniž by se to muselo někam psát, takže vše fungovalo a o metodách jsi  nepotřebovala vědět.

Metoda `GET` se určitě někdy hodí i u formulářů, například když chceš mít na stránkách vyhledávání, ale pro odesílání dat chceš použít jinou metodu, zvanou `POST`:

```html
<form action="/kontaktni-formular" method="post">
    <input type="text" name="email">
    <input type="submit" value="Odeslat">
</form>
```

Takto odesílaný formulář nijak výslednou cestu neovlivňuje, takže se na cílovou stránku
zpětně nedá nijak odkázat. Veškerá data pošle „tajně“, někde bokem.
Může díky tomu odesílat hesla nebo mnohem více dat, než by se vešlo na adresní řádek prohlížeče.

Většinou je jedno, zda je název metody napsán velkými nebo malými písmeny. V kontextu serverového
zpracování je zvykem psát je velkými, v HTML šablonách se ale ustálilo psát je malými.

---

## Formuláře a Flask

----

Zatím jsme si ukazovali jak napsat formuláře v prostém HTML, ale takový formulář 
vlastně nic nedělá. Data sice odešle, ale není nic, co by je zpracovalo a udělalo
s nimi něco užitečného. Pojďme si tedy konečně ukázat, jak data odchytit na straně
serveru a něco s nimi v Pythonu provést.

V naší Flask aplikaci z minulé lekce si vytvoř novou cestu a šablonu s formulářem:

```python
@app.route('/teplota')
def temperature():
    return render_template('temperature.html')
```

```html
<!DOCTYPE HTML>
<html>
    <head><title>Převodník teplot</title></head>
    <body>
        <h1>Převodník teplot</h1>
        <form action="" method="post">
            <input type="text" name="farenheit">°F
            <input type="submit" value="Převést na °C">
        </form>
    </body>
</html>
```

<div class="c-example">
<h1>Převodník teplot</h1>
<form action="" method="post">
    <input type="text" name="farenheit">°F
    <input type="submit" value="Převést na °C">
</form>
</div>

Stránka bude užitečná pro PyLadies, které se dostaly na stáž do USA a rády
by věděly, jestli 42°F na teploměru znamená, že si mají vzít svetr, nebo jim stačí
tričko.

---

### Povolujeme přijímání hodnot z formuláře

----

Spusť si přes `python web.py` server a zobraz si formulář v prohlížeči.

Když si zkusíš formulář odeslat, tak zjistíš, že Flask vrátí chybu
_405 Method Not Allowed_. Tím se ti snaží naznačit, že pro cestu
`/teplota` jsi nepovolila metodu `POST`, kterou se formulář odesílá. 
Všechny běžné stránky fungují přes `GET`, takže tato metoda je ve Flasku 
na každé cestě povolená od základu, ale `POST` musíš přidat.
Dělá se to následovně:

```python
@app.route('/teplota', methods=['GET', 'POST'])
def temperature():
    return render_template('temperature.html')
```

Když odešleš formulář nyní, už bude fungovat. Tedy jak se to vezme –
sice nedostaneš chybu, ale vypadá to, jako by se po odeslání vlastně vůbec
nic nedělo. To je proto, že funkce `temperature()` opravdu zatím s daty nic
nedělá a vrátí vždy znovu jen náš formulář.

---

### Zpracování přijaté hodnoty

----

Vzorec pro výpočet stupňů Celsia ze stupňů Farenheita je `C = (F - 32) * 5 / 9`.
Na převod stupňů si napiš samostatnou funkci:

```python
def to_celsius(farenheit):
    return (farenheit - 32) * 5 / 9
```

Abychom se dostali k vyplněným údajům, musíme si z Flasku importovat
objekt `request`. Ten obsahuje slovník `form`, v němž se po odeslání formuláře
nachází všechny vyplněné hodnoty z políček.

```python
from flask import request

@app.route('/teplota', methods=['GET', 'POST'])
def temperature():
    form = request.form

    if form.get('farenheit'):
        farenheit = int(form['farenheit'])
        celsius = to_celsius(farenheit)
    else:
        farenheit = None
        celsius = None
    return render_template('temperature.html',
                           farenheit=farenheit, celsius=celsius)
```

Protože funkce `temperature()` se vykoná i když se formulář jen poprvé načítá
a ještě nebyl odeslán, musíš počítat také s tím, že se ve slovníku `form` nemusí
nacházet vůbec nic. Proto se nejdřív přes `form.get()` kontroluje, zda
je k dispozici hodnota ve farenheitech. Že se má objevit pod klíčem `farenheit` víš díky tomu, že políčko ve formuláři má `name="farenheit"`.

Pokud je hodnota přítomna, převede se do stupňů Celsia. Protože podobně jako
u programů v konzoli i zde dostáváš vstup od uživatele v podobě řetězce, musíš
nejdříve počet stupňů přetypovat na číslo funkcí `int()`.

Jestliže program žádné Farenheity neobdržel, nastaví se proměnné pro obě teplotní škály
na `None`. Následně výsledky dostane šablona.

---

### Zobrazujeme výsledky

----

Sice už počítáš stupně Celsia, ale uživatel se zatím pořád nemá jak o výsledku dovědět.
Musíš ho zobrazit v šabloně. Opět je počítej i s možností, kdy ještě nebylo nic odesláno.

```html
<h1>Převodník teplot</h1>

{% if celsius is number %}
    <h2>Výsledek</h2>
    <p>
        Pokud máš na teploměru {{ farenheit }}°F,
        tak to znamená, že je {{ celsius | int }}°C.
    </p>
{% endif %}

<form action="" method="post">
    <input type="text" name="farenheit">°F
    <input type="submit" value="Převést na °C">
</form>
```

Přidali jsme podmínku, kde se zjištuje, zda je k dispozici nějaký výsledek. Jinja2 v podmínkách umožňuje jednoduše otestovat, co přesně se nachází v proměnné. Jedním z takových testů je `is number`, který zaručí, že výsledek bude uživateli prezentován pouze pokud je v `celsius` uloženo nějaké číslo.

----
<!-- .slide: data-state="c-slide-task" -->

#### Otázka k zamyšlení

Proč v podmínce nestačí `{% if celsius %}`?

<details>
    <summary>Řešení</summary>
    <p>
        Pokud by výsledkem bylo nula stupňů Celsia (zkuste zadat 32°F), podmínka by neprošla a nic by se nezobrazilo.
        V Pythonu (a v šablonovacím jazyku Jinja2 také) se totiž `if 0` vyhodnotí stejně jako `if False`.
    </p>
</details>

----

Při vypisování počtu stupňů celsia se využívá filtr `int`, který dělá totéž co funkce `int` v Pythonu – převede
vstup na celé číslo. Díky tomu budeme místo vypočítané hodnoty -5.555555555555555°C zobrazovat čitelnější a užitečnější variantu: -5°C

<div class="c-example">
    <h1>Převodník teplot</h1>
    <h2>Výsledek</h2>
    <p>
        Pokud máš na teploměru 42°F,
        tak to znamená, že je 5°C.
    </p>
    <form action="" method="post">
        <input type="text" name="farenheit">°F
        <input type="submit" value="Převést na °C">
    </form>
</div>

---

### Funkční formulář

----

A je to! Teď už umíš navrhnout v HTML jednoduchý formulář, odeslat jej na server a tam zpracovat vyplněná data. Umíš data vložit do šablony, tam je nějak hezky odprezentovat uživateli, a výsledné HTML odeslat zpátky do prohlížeče.

Pokud se ti to zdá složité, tak věz, že to složité opravdu je! Na druhou stranu, právě díky formulářům může web komunikovat s uživatelem a není to jen pasivní médium jako noviny, rádio nebo televize.

Webové stránky jsou formuláři často přímo prošpikované, takže se jim nelze vyhnout. Na druhou stranu ale nejsme první lidé na planetě Zemi, kteří s formuláři zápasí. Webové frameworky se proto většinou snaží jejich tvorbu zjednodušit. Django má v tomto ohledu zabudovanou [spoustu nástrojů](django-forms), k Flasku se nejčastěji doinstaluje knihovna [WTForms][].

[django-forms]: https://docs.djangoproject.com/en/1.10/topics/forms/
[WTForms]: https://flask-wtf.readthedocs.io/

----
<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Zkus na novou stránku doplnit formulář, který bude převádět stupně Celsia na stupně Farenheita.
Až za námi zase přiletí Washingtonská PyLady [Jackie Kazil](https://github.com/jackiekazil),
jistě jej ocení.

---

## Druhy formulář&shy;ových prvků

----

Nejčastěji používanými druhy, kromě textového `type="text"` jsou:


### `type="password"`

Pro hesla, je jako `text`, ale místo znaků jsou vidět jen nějaké zástupné znaky.

```html
<input type="password" value="velice tajne heslo">
```

<div class="c-example">
<input type="password" value="velice tajne heslo">
</div>

### `type="checkbox"`

Zaškrtávátko pro výběr jedné nebo více hodnot zároveň.

```html
<p>Oblíbené barvy</p>
<div><label><input type="checkbox" value="yellow" checked> žlutá</label></div>
<div><label><input type="checkbox" value="red" checked> červená</label></div>
```

<div class="c-example">
<p>Oblíbené barvy</p>
<div><label><input type="checkbox" value="yellow" checked> žlutá</label></div>
<div><label><input type="checkbox" value="red" checked> červená</label></div>
</div>

### `type="radio"`

Zaškrtávátko pro výběr jediné hodnoty. Smysl má, pokud se použijí nejméně dvě společně. "Společně" znamená,
že mají stejný atribut `name`.

```html
<p>Velikost trička</p>
<div><label><input type="radio" name="demo">S</label></div>
<div><label><input type="radio" name="demo" checked>M</label></div>
<div><label><input type="radio" name="demo">L</label></div>
```

<div class="c-example">
<p>Velikost trička</p>
<div><label><input type="radio" name="demo"> S</label></div>
<div><label><input type="radio" name="demo" checked> M</label></div>
<div><label><input type="radio" name="demo"> L</label></div>
</div>


### `type="file"`

Používá se pro nahrávání souborů. Je zde uveden spíše pro úplnost. Abys jej
mohla ve formuláři opravdu použít a soubory zpracovat, je potřeba [trocha
speciálního zacházení][file-upload] jak na straně HTML, tak na straně serveru.

```html
<input type="file">
```

<div class="c-example">
<input type="file">
</div>

[file-upload]: http://flask.pocoo.org/docs/0.12/patterns/fileuploads/

### `<textarea>`

Stejně jako následující prvek se už nejedná o změnu pomocí parametru `type`, ale o&nbsp;samostatný párový tag.
Používá se pro zadání víceřádkového, libovolně dlouhého textu.

```html
<textarea>Moje první haiku
je první.</textarea>
```

<div class="c-example">
<textarea>Moje první haiku
je první.</textarea>
</div>

### `<select>`

Podobně jako `<input type="radio">` umožňuje výběr z více možností. Místo
zaškrtávátek vykreslí takzvané _drop-down menu_.

```html
<select>
    <option>Možnost</option>
    <option>Jiná možnost</option>
    <option>Taky možnost</option>
</select>
```

<div class="c-example">
<select><option>Možnost</option><option>Jiná možnost<option>Taky možnost</option></select>
</div>

Tag `<select>` lze přepnout do režimu, který připomíná `<input type="checkbox">`
a který umožňuje vybrat více možností najednou.

```html
<select multiple>
    <option>Možnost</option>
    <option>Jiná možnost</option>
    <option>Taky možnost</option>
</select>
```

<div class="c-example">
<select multiple><option>Možnost</option><option>Jiná možnost<option>Taky možnost</option></select>
</div>

Více možností lze vybrat pomocí tažení nebo pokud uživatel přidrží klávesu <kbd>Ctrl</kbd> (na macOS <kbd>Cmd</kbd>), tak lze vybrat i položky, které spolu nesousedí.
To ale uživatel většinou neví, takže na v `<select multiple>` vybere stejně jen jednu možnost nebo se musí psát instrukce.
Proto je lepší se této variantě spíše vyhnout, pokud ji [pomocí javascriptu](https://select2.github.io) nevylepšíme na něco, co uživatelé chápou lépe.


### Atributy

Každý druh formulářového prvku má mnoho možných atributů: vždy se podívej do nějaké reference.

V HTML 5 jich ještě spousta přibyla, hodně z nich má spojitost s validací, tedy ověřením toho, zda vstup, který uživatel zadal, je opravdu to, co zadat měl.


### Nové typy v HTML5

V HTML5 jsou nově i speciální prvky např. pro datum, barvu, e-mail, číslo apod. Podpora v prohlížečích se liší, proto je dobré si ji před jejich použitím ověřit na [Can I use](http://caniuse.com). Velmi praktické bývají na mobilních zařízeních s virtuální klávesnicí, kde třeba u `type="number"` zobrazí klávesnici jen s čísly.

```html
<input type="number">
```

<div class="c-example">
<input type="number">
</div>

Pokud si ukázku otevřeš na mobilu a zkusíš do ní psát, nejspíš ti bude nabídnuta číselná klávesnice. Na počítači se ti prohlížeč může také pokusit zjednodušit psaní čísel. Pokud to neumí (např. nějaké starší verze prohlížečů), bude se v něm prvek chovat jako by to byl obyčejný `<input type="text">`.

---

<!-- .slide: data-state="c-slide-task" -->

#### Cvičení

Existují národy, které pro zápis svého jazyka nepoužívají latinku, ale jiné písmo. Asi se vám vybaví Čína nebo Japonsko, ale i v Evropě se jich několik najde - např. Řecko nebo Rusko. Když chceme uvést řecké nebo ruské slovo v českém textu, musíme ho takzvaně _transliterovat_, tedy nějakým způsobem foneticky přepsat do latinky. Díky tomu pak můžeme psát Tolstoj a ne Толстой.

V Pythonu je k tomuto účelu knihovna [transliterate][], kterou lze nainstalovat standardním způsobem:

```shell
(venv)$ python -m pip install transliterate
```

S ní potom můžeme dělat následující převody (ukázka v interaktivním Pythonu):

```python
>>> from transliterate import translit
>>> translit('Jagr', 'ru')
Ягр
>>> translit('Ягр', 'ru', reversed=True)
Jagr
```

Jak víme z [ruských hokejových dresů Jaromíra Jágra][jagr], tato transliterace je správně. Na stránce knihovny jsou další příklady a lze tam zjistit i kódy jiných jazyků, které umí knihovna převádět.

Zkuste vytvořit formulář, který od uživatele přijme libovolně dlouhý text (tag `<textarea>`), nechá jej vybrat jazyk (tag `<select>` nebo `<input type="radio">`), směr transliterace (jestli převádíme z latinky nebo do latinky - opět se bude hodit `<select>` nebo `<input type="radio">`), a po odeslání text podle zadaných parametrů převede a zobrazí uživateli výsledek.

Jako zdroj zkušebních textů můžete použít [řecké][wiki-el] nebo [ruské][wiki-ru] články na Wikipedii.

[transliterate]: https://pypi.python.org/pypi/transliterate/
[jagr]: https://www.google.cz/search?q=jagr+russia+jersey&source=lnms&tbm=isch
[wiki-el]: https://el.wikipedia.org/wiki/%CE%91%CE%B8%CE%AE%CE%BD%CE%B1
[wiki-ru]: https://ru.wikipedia.org/wiki/%D0%AF%D0%B3%D1%80,_%D0%AF%D1%80%D0%BE%D0%BC%D0%B8%D1%80
