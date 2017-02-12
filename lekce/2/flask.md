# Flask

Aneb jak nám může s webovými stránkami pomoci Python.

----

## Statické a dynamické stránky

Zatím jsme se učili tvořit webové stránky, na kterých mohou být texty nebo obrázky,
tedy tzv. _statické stránky_. Takové stránky slouží především k informačním účelům -
něco na ně napíšeme, aby si to mohl někdo jiný zase přečíst.

Pokud ale chceme, aby stránky dokázaly reagovat na své okolí, musíme je generovat
nějakým programovacím jazykem. Takovým stránkám se říká _dynamické_. My si ukážeme,
jak v tomto ohledu použít Python, ale v zásadě je možné stránky generovat
i jakýkoliv jiným jazykem.

----

## Co je v dynamických stránkách možné?

Stránka může…

- reagovat na to, že uživatel někam klikne, někde něco vyplní, odešle.
- vypisovat něco z databáze, přidávat do ní, odebírat.
- díky programovacímu jazyku vědět, jaký je aktuální čas, den, měsíc, rok…
- cokoliv jiného! Z různých zdrojů může naše stránka zjišťovat třeba aktuální počasí nebo kurzovní lístek, a podle toho se měnit.

----

## Framework

Generování webových stránek usnadňuje _webový framework_. Python jich má více, mezi nejznámější patří [Django][] a [Flask][]. Pokud se budete v budoucnu o tvorbu webů zajímat hlouběji, rozhodně se podívejte na Django ([DjangoGirls mají pěkné výukové materiály][dg-tutorial]), ale pro naše účely použijeme Flask, protože je nejrychlejší na pochopení. Na Flasku je také postavena většina webů české Python komunity, jako [python.cz][], [pyvo.cz][], [pyladies.cz][], …

[Django]: https://www.djangoproject.com/
[Flask]: http://flask.pocoo.org/
[dg-tutorial]: http://tutorial.djangogirls.org/
[python.cz]: https://python.cz
[pyvo.cz]: https://pyvo.cz
[pyladies.cz]: https://pyladies.cz

---

## Začínáme s Flaskem

----

Vytvořte si ve složce se svým projektem _virtualenv_, aktivujte si jej a nainstalujte si
`flask`:

```shell
(venv)$ python -m pip install flask
```

Následující kód si uložte do souboru. Pojmenujme ho např. `web.py`:

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'PyLadies jsou nejlepší!'

if __name__ == '__main__':
    app.run(debug=True)
```

A je to. Zkusme si náš zbrusu nový, Pythonem poháněný web spustit:

```shell
(env)$ python web.py
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger pin code: 189-972-345
```

Na zmíněné adrese http://127.0.0.1:5000/ bychom měli v prohlížeči vidět použitý text.

Pomocí `app.run()` jsme aplikaci spustili na lokálním počítači. Parametrem `debug`
Flasku říkáme, že chceme zjednodušit debugování. Díky tomu uvidíme případné výjimky
přímo v prohlížeči a náš _vývojový server_ se bude sám obnovovat, pokud něco změníme v souboru `web.py`.
Abychom ale změnu viděli i v prohlížeči, budeme muset stránku vždy obnovit (tzn. dotázat
se našeho serveru na její aktuální podobu). Jak je zmíněno i v konzoli, server lze vypnout
pomocí <kbd>Ctrl + C</kbd>.

V případě reálného nasazení bychom aplikaci předali nějakému plnohodnotnému webovému serveru.
Režim `debug` bychom v tom případě nezapínali, kvůli bezpečnosti a dopadům na výkon.

---

### Routy

----

V příkladu jsme vytvořili flaskovou aplikaci (`app`) a pomocí dekorátoru
`@app.route` jsme vytvořili takzvanou _routu_ (cestu). Říkáme tím, že na adrese
`/` bude k dispozici obsah, který vrátí definovaná funkce.
Více různých cest lze vytvořit jednoduše přidáním další funkce:

```python
@app.route('/')
def index():
    return 'PyLadies jsou nejlepší!'

@app.route('/kontakt')
def contact():
    return '''
      PyLadies přijdou, když si v nouzi,
      když tě Python ze sna vzbouzí,
      zavolat jen stačí heslo: PyLady, úú!
    '''
```

Nově přidaná routa bude na adrese http://127.0.0.1:5000/kontakt vracet
text, který popisuje, jak snadné je kontaktovat PyLadies.

---

#### Dynamické routy

----

Když vytváříme dynamický web, ne vždy známe všechny cesty dopředu, abychom
ke každé zvlášť mohli přiřadit funkci.

Dejme tomu, že chceme mít samostatnou stránku o každé PyLady a přitom máme
seznam všech PyLadies v nějaké databázi. Situaci lze vyřešit pomocí cest s proměnnou částí:

```python
from flask import abort

pyladies_db = {
  'zuzejk': {'name': 'Zuzka', 'color': 'zelená'},
  'lspdv': {'name': 'Veronika', 'color': 'modrá'},
  'benabraham': {'name': 'Dan', 'color': 'růžová'},
}

@app.route('/users/<user_name>')
def user_profile(user_name):
    try:
        user = pyladies_db[user_name]
    except KeyError:
        return abort(404)  # kód 404 znamená "stránka neexistuje"

    return '''

        PyLady {name}! Oblíbená barva: {color}

    '''.format(name=user['name'], color=user['color'])
```

Jak můžete vidět, v našem příkladu jsme použili velmi sofistikovanou databázi, Python slovník. Část cesty jsme si pojmenovali a ohraničili lomenými závorkami: `'/users/<user_name>'` Tím jsme dali
Flasku najevo, že je proměnná a její hodnoty chceme dostávat jako parametr funkce.

Když tedy v prohlížeči otevřeme adresu http://127.0.0.1:5000/users/zuzejk, objeví se nám řetězec `zuzejk` v proměnné `user_name` a my s ním můžeme dále pracovat. Protože klíč `zuzejk` v našem slovníku je, vypíšeme profil dané PyLady. Kdybychom do adresy vepsali uživatelské jméno, které v databázi není, např. http://127.0.0.1:5000/users/nesmysl, zavolá naše aplikace funkci `abort` z Flasku a vrátí chybu _404 - Not Found_. To je standardní způsob, jak dát na internetu druhé straně najevo, že se v daných místech nic nenachází.

---

### Šablony

----

Zatím jsou naše webové stránky poměrně nudné, protože nepoužívají HTML.
Klidně bychom mohli udělat něco jako:

```python
@app.route('/')
def index():
    return '<html><head><title>…'
```

… ale asi by to nebylo příliš příjemné. Lepší je použít _šablony_:

```python
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')
```

Pak je potřeba si vedle našeho souboru `web.py` vytvořit složku `templates`
a v ní `index.html`:

```html
<!DOCTYPE HTML>
<html>
  <head><title>PyLadies</title></head>
  <body>
    <h1>PyLadies</h1>
    <p>PyLadies jsou <strong>nejlepší</strong>!</p>
  </body>
</html>
```

Na adrese http://127.0.0.1:5000 teď bude o něco zábavnější verze úvodní stránky.

Zatím jsme ale šablony vlastně moc nepoužili. To, co se běžně myslí pod pojmem šablony,
je totiž _šablonovací jazyk_, který se dá vkládat přímo do HTML a umožňuje v něm používat
základní programování, jako podmínky nebo cykly. Ukažme si to na seznamu PyLadies:

```python
@app.route('/users/')
def users():
    user_names = pyladies_db.keys()
    return render_template('users.html', user_names=user_names)
```

V souboru `templates/users.html` budeme mít:

```html
<!DOCTYPE HTML>
<html>
  <head><title>PyLadies</title></head>
  <body>
    <h1>Seznam PyLadies</h1>
    <ul>
    {% for user_name in user_names %}
      <li>{{ user_name }}</li>
    {% endfor %}
    </ul>
  </body>
</html>
```

Na http://127.0.0.1:5000/users nám přibude seznam všech PyLadies, které máme v databázi.

Vždy, když chceme v šabloně použít nějaká data, musíme jí je poslat přes parametry funkce `render_template()`,
stejně jako jsme to udělali s `user_names`. Šablona jinak nemá o zbytku našeho programu nejmenší ponětí.

----
<!-- .slide: data-state="c-slide-task" -->

#### Cvičení pro masochisty

Kdybychom neměli šablony, museli bychom HTML poskládat přímo v Python funkci. Jak by to asi vypadalo?

**Řešení**

```python
@app.route('/users/')
def users():
    ul = '<ul>'
    for user_name in pyladies_db.keys():
        ul += '<li>{}</li>'.format(user_name)
    ul += '</ul>'

    return '''<!DOCTYPE HTML>
      <html>
        <head><title>PyLadies</title></head>
        <body><h1>Seznam PyLadies</h1>{}</body>
      </html>
    '''.format(ul)
```

Jak vidíte, vypadalo by to ošklivě! Nikdy se touto cestou nevydávejte.

----

Pro snazší debugování je ve Flasku vhodné nastavit automatické načítání změn šablon:

```python
if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)
```

Šablonovacích jazyků je více. Ten, který používá Flask, se nazývá [Jinja2][] a je poměrně oblíbený. Syntaxe
s `{{ proměnná }}` a `{% program %}` je ale velmi rozšířená a můžete se s ní setkat i v mnoha dalších šablonovacích jazycích. Například Django má svůj [vlastní šablonovací jazyk][django-templates], ale na první pohled vypadá úplně stejně.

[Jinja2]: http://jinja.pocoo.org/docs/templates/
[django-templates]: https://docs.djangoproject.com/en/1.10/topics/templates/#the-django-template-language

---

#### Získání URL

----

Největším kouzlem webových stránek je možnost mezi nimi cestovat pomocí odkazů.
Pojďme tedy nějaké odkazy přidat. Flask má funkci `url_for()`, která umí vyrobit
URL z názvu cílové funkce a jejích parametrů:

```python
from flask import url_for
…
url_for('user_profile', user_name='benabraham')  # vrátí /users/benabraham
```

Možná si říkáte, proč tu cestu prostě nevytvořit ručně, ale mohli bychom narazit
na problém, pokud cestu později změníme.

Funkci `url_for()` lze použít i přímo v šablonách. Pojďme přidat odkazy do
našeho seznamu PyLadies:

```html
<h1>Seznam PyLadies</h1>
<ul>
{% for user_name in user_names %}
  <li>
    <a href="{{ url_for('user_profile', user_name=user_name) }}">
      {{ user_name }}
    </a>
  </li>
{% endfor %}
</ul>
```

Tímto bychom měli na stránce http://127.0.0.1:5000/users získat seznam PyLadies,
kde každá položka bude zároveň odkazem na profilovou stránku dané PyLady.

---

#### Filtry

----

Jak jsme si ukázali ve cvičení pro masochisty, je dobré oddělit _programování_
v Pythonu od _zobrazování výsledku_ v HTML. Jenže co když si potřebujeme i při
tom zobrazování trochu pomoci?

Od toho jsou tu filtry. Filtr je funkce, kterou lze použít v šabloně pro nějakou
užitečnou transformaci. Jinja2 má spoustu filtrů rovnou zabudovaných, např. `upper`:

```html
{{ user_name|upper }}
```

Místo `zuzejk` tato značka vypíše `ZUZEJK`. Pojďme si pohrát s profily
jednotlivých PyLadies:

```python
@app.route('/users/<user_name>')
def user_profile(user_name):
    # toto už máme
    try:
        user = pyladies_db[user_name]
    except KeyError:
        return abort(404)  # kód 404 znamená "stránka neexistuje"

    # tady nově použijeme šablonu:
    return render_template('user_profile.html', user=user)
```

Do `user_profile.html` ve složce `templates` si uložíme následující šablonu:

```html
<!DOCTYPE HTML>
<html>
  <head><title>PyLady: {{ user.name|upper }}</title></head>
  <body>
    <h1>PyLady: {{ user.name|upper }}</h1>
    <p>Oblíbená barva: {{ user.color }}</p>
    <hr>
    <p><a href="{{ url_for('users') }}">Zpět na seznam</a></p>
  </body>
</html>
```

Jak vidíme, v Jinja2 se k atributům slovníku přistupuje přes tečku. Jména PyLadies
prohnaná přes `upper` filtry budou vypsaná velkými písmeny. Zakomponovali jsme také
odkaz zpět na seznam.

Můžeme si ale přidávat i vlastní filtry. Řekněme, že máme v databázi rok narození,
ale chceme zobrazovat věk:

```python
pyladies_db = {
  'zuzejk': {'name': 'Zuzka', 'color': 'zelená', 'born': 1420},
  'lspdv': {'name': 'Veronika', 'color': 'modrá', 'born': 1492},
  'benabraham': {'name': 'Dan', 'color': 'růžová', 'born': 1415},
}
```

Napíšeme si filtr, který načte rok a vrátí aktuální věk:

```python
import datetime

@app.template_filter('age')
def calculate_age(year):
    """Calculate number of years since given year till today"""
    return datetime.datetime.now().year - year
```

V šabloně:

```html
<h1>PyLady: {{ user.name|upper }}</h1>
<ul>
  <li>Oblíbená barva: {{ user.color }}</li>
  <li>Věk: {{ user.born|age }}</li>
<ul>
```

---

#### Escaping

----

V textu, který se vkládá do šablon, jsou automaticky nahrazeny znaky, které
mají v HTML speciální význam. Zabraňuje se tak bezpečnostním rizikům, kdy se vstup od uživatele interpretuje
jako HTML.

Představte si, že bychom měli následující routu a šablonu:

```python
@app.route('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)
```

```html
<p>Ahoj {{ name }}!</p>
```

Nějaký zákeřný útočník by mohl zkusit do naší stránky vložit JavaScript tak,
že ho zkusí vepsat jako své jméno: `/hello/<script>alert("Bu bu bu")` Jenže
Jinja2 nás ochrání a výsledné HTML bude následující:

```html
<p>Ahoj &lt;script&gt;alert(&#34;Bu bu bu&#34;)!</p>
```

----
<!-- .slide: data-state="c-slide-task" -->

#### Cvičení pro odvážné

Zkuste si vytvořit HTML stránku, která obsahuje `<p>Ahoj <script>alert("Bu bu bu")!</p>`
a otevřte si ji v prohlížeči.

----


Někdy je ovšem potřeba do stránky opravdu HTML vložit.
To se dá zajistit dvěma způsoby. Nejjednodušší je vestavěný filtr `safe`.

Představme si, že v proměnné `april_date` máme řetězec `1. dubna`. Pokud bychom si zmenšili okno prohlížeče
a náš text `1. dubna` by se na stránce ocitl na konci řádku, mohl by se škaredě zalomit tak, že `1.` zůstane na jednom řádku a `dubna` skočí na druhý. To se špatně čte. HTML nám umožňuje zabránit zalamování tím, že místo běžné mezery použijeme značku `&nbsp;` (tzv. _entitu_) pro [nedělitelnou mezeru][nbsp]. Můžeme si tedy datum uložit jako `1.&nbsp;dubna`. Jenže pokud budeme chtít takový text vypsat v šabloně, Jinja2 nás opět ochrání:

[nbsp]: https://cs.wikipedia.org/wiki/Nezlomiteln%C3%A1_mezera

```html
Apríl je {{ april_date }}
```

Výsledné HTML bude `Apríl je 1.&amp;nbsp;dubna` a v prohlížeči se zobrazí `1.&nbsp;dubna`. Proto použijeme filtr `safe`, čímž ochranu pro tento řetězec vypneme:

```html
Apríl je {{ april_date|safe }}
```

Nejlepší je ale opravdu nemíchat HTML s našimi daty ještě před tím, než je vypíšeme.
Data bychom měli ukládat jako běžný text a nedělitelné mezery přidat až v šabloně.

Napíšeme si na to tedy vlastní filtr. Jenže jak v něm označit výsledek jako „bezpečný”?
Můžeme použít třídu [jinja2.Markup](http://jinja.pocoo.org/docs/api/#jinja2.Markup):

```python
from jinja2 import Markup

@app.template_filter('nowrap')
def convert_spaces(text):
    """Convert normal spaces to non-breaking spaces"""
    converted_text = text.replace(' ', '&nbsp;')
    return Markup(converted_text)
```

Tento filtr dostane text a běžné mezery v něm nahradí za nedělitelné mezery.

```
Apríl je {{ '1. dubna'|nowrap }}
```

---

#### Kombinování šablon

----

Chceme-li jednotlivým stránkám dát společné logo, menu, nebo patičku s kontaktními
informacemi, museli bychom mít tyto části nakopírované do každé šablony. To je
celkem otravné a navíc to vede k chybám. Pokud bychom dělali změny, mohli bychom
je zapomenout zanést do jedné ze šablon.

Jinja2 nám v tomto ohledu velmi zjednodušuje život. Nejčastěji se takové
situace řeší přes [dědění šablon][tpl-inheritance], ale to je na delší vysvětlování,
tak si pro začátek ukažme alespoň `include`, tedy [vkládání šablon do sebe][tpl-include].

Vytvořme šablonu `_menu.html`, kam dáme menu našich stránek. Šablony, které
nepředstavují samostatné stránky, je dobrým zvykem pojmenovávat s podtržítkem na začátku.

```html
<p>
  <strong>Menu:</strong>
  <a href="{{ url_for('index') }}">Hlavní stránka</a> -
  <a href="{{ url_for('users') }}">Seznam</a> -
  <a href="{{ url_for('contact') }}">Kontakty</a>
</p>
```

Do každé šablony pro samostatnou stránku potom můžeme nahoru naše menu vložit:

```html
<!DOCTYPE HTML>
<html>
  <head>
    …
  </head>
  <body>
    {% include '_menu.html' %}
    …
  </body>
</html>
```

Takto si můžeme do budoucna ušetřit hodně práce.

[tpl-inheritance]: http://jinja.pocoo.org/docs/templates/#template-inheritance
[tpl-include]: http://jinja.pocoo.org/docs/templates/#include

---

### Statické soubory

----

Pouhé HTML je sice větší zábava než prostý text, ale pořád tomu něco chybí.
Většinou chceme do stránky přidat i CSS a obrázky. Jelikož CSS ani obrázky
nepotřebujeme nijak generovat, ale stačí nám jen vzít je jako soubor a poslat
je uživateli do prohlížeče, nazýváme je v kontextu dynamických webových stránek
_statickými soubory_.

Podobně jako máme ve Flasku složku na šablony pojmenovanou `templates`, uděláme
si vedle ní složku i na statické soubory, `static`. Z Pythonu nebo z šablony se
pak na soubory v této složce můžeme odkázat následovně:

```python
url_for('static', filename='style.css')
```

Připojit ke stránce CSS můžeme tedy tak, že do šablony naší stránky přidáme
do hlavičky následující řádek:

```html
<link href="{{ url_for('static', filename='style.css') }}" rel="stylesheet">
```

Načteme-li stránku v prohlížeči, bude předpokládat, že v souboru `static/style.css`
najde svoje CSS. S obrázky to funguje obdobně:

```html
<img src="{{ url_for('static', filename='daniel.jpg') }}">
```

---

#### Flask a Browsersync

----

Od začátku lekce platí, že pokud chceme vidět změny, které jsme provedli v našich
souborech, musíme jít do prohlížeče a obnovit stránku. Z minulých lekcí ale víme,
že s nástrojem Browsersync to není nutné.

Aby Browsersync správně fungoval s Flaskem, musíme změnit jeho konfiguraci
v souboru `gulpfile.js`:

```js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;

gulp.task('runserver', function() {
  var proc = exec('python web.py');
});

gulp.task('default', ['runserver'], function() {
  browserSync({
    proxy: '127.0.0.1:5000'
  });
  gulp.watch([
    'templates/*.*',
    'static/*.*',
  ], browserSync.reload);
});
```

První část znamená, že když napíšeme `gulp runserver`, spustí Gulp náš vývojový server
z Flasku. Vlastně udělá totéž, jako jsme dělali my, když jsme psali `python web.py` do konzole.

V části označené jako `default` Gulp nejdřív jakoby zavolá `gulp runserver`, čímž spustí
Flask server, a potom se na něj pokusí napojit (to je ten řádek s `proxy`). Zbytek znamená,
že Gulp bude sledovat soubory jakéhokoliv typu ve složkách `templates` a `static` a pokud se
něco změní, automaticky obnoví stránku i v prohlížeči.

Nyní už nebudeme naši Flask aplikaci pouštět přes `python web.py`, ale napíšeme pouze `gulp`.
Mělo by se vše správně načíst a naše stránka rovnou otevřít v prohlížeči.

---

Tento text jsme upravili z [https://github.com/cvut/MI-PYT/blob/master/tutorials/02_flask.md](tutoriálu) dostupného pod licencí [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/), autorů Petra Viktorina a Miro Hrončoka a [dalších](https://github.com/cvut/MI-PYT/graphs/contributors), proto je pod stejnou licencí dostupný i text na této stránce.
