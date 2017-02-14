# Šablony

----

Zatím jsou naše webové stránky poměrně nudné, protože nepoužívají HTML.
Klidně bychom mohli udělat něco jako:

```python
@app.route('/')
def index():
    return '<html><head><title>…'
```

… ale asi by to nebylo příliš praktické. Lepší je použít _šablony_:

```python
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')
```

Pak je potřeba si vedle souboru `web.py` vytvořit složku `templates`
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

<div class="c-example">
<h1>PyLadies</h1>
<p>PyLadies jsou <strong>nejlepší</strong>!</p>
</div>

Zatím jsi ale šablony vlastně moc nepoužila. To, co se běžně myslí pod pojmem šablony,
je totiž _šablonovací jazyk_, který se dá kombinovat přímo s HTML a umožňuje v něm používat
základní programování, jako podmínky nebo cykly. Ukažme si to na seznamu PyLadies:

```python
@app.route('/users/')
def users():
    user_names = pyladies_db.keys()
    return render_template('users.html', user_names=user_names)
```

V souboru `templates/users.html` je:

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

Na http://127.0.0.1:5000/users přibude seznam všech PyLadies, které máme v databázi.

<div class="c-example">
<h1>Seznam PyLadies</h1>
<ul>
    <li>zuzejk</li>
    <li>lspdv</li>
    <li>benabraham</li>
</ul>
</div>

Vždy, když chceš v šabloně použít nějaká data, musíš jí je poslat přes parametry funkce `render_template()`,
stejně jako jsi to udělala s `user_names`. Šablona jinak nemá o zbytku programu nejmenší ponětí.

----
<!-- .slide: data-state="c-slide-task" -->

## Cvičení pro masochisty

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

Jak vidíš, vypadalo by to ošklivě! Nikdy se touto cestou nevydávej.

----

Pro snazší debugování je ve Flasku vhodné nastavit automatické načítání změn šablon:

```python
if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)
```

Šablonovacích jazyků je více. Ten, který používá Flask, se nazývá [Jinja2][] a je poměrně oblíbený. Syntaxe
s `{{ proměnná }}` a `{% program %}` je ale velmi rozšířená a můžete se s ní setkat i v mnoha dalších
šablonovacích jazycích. Například Django má svůj [vlastní šablonovací jazyk][django-templates], 
ale na první pohled vypadá úplně stejně.

[Jinja2]: http://jinja.pocoo.org/docs/templates/
[django-templates]: https://docs.djangoproject.com/en/1.10/topics/templates/#the-django-template-language

---

## Získání URL

----

Největším kouzlem webových stránek je možnost mezi nimi cestovat pomocí odkazů.
Pojďme tedy nějaké odkazy přidat. Flask má funkci `url_for()`, která umí vyrobit
URL z názvu cílové funkce a jejích parametrů:

```python
from flask import url_for
…
url_for('user_profile', user_name='benabraham')
# vrátí /users/benabraham
```

Možná si říkáš, proč tu cestu prostě nevytvořit ručně, ale mohla bys narazit
na problém, pokud cestu později změníš.

Funkci `url_for()` lze použít i přímo v šablonách. Pojďme přidat odkazy do
seznamu PyLadies:

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

Tímto bys měla na stránce http://127.0.0.1:5000/users získat seznam PyLadies,
kde každá položka bude zároveň odkazem na profilovou stránku dané PyLady.

<div class="c-example">
<h1>Seznam PyLadies</h1>
<ul>
	<li><a href="http://127.0.0.1:5000/zuzejk">zuzejk</a></li>
	<li><a href="http://127.0.0.1:5000/lspdv">lspdv</a></li>
	<li><a href="http://127.0.0.1:5000/benabraham">benabraham</a></li>
</ul>
</div>

---

## Filtry

----

Jak jsme si ukázali ve cvičení pro masochisty, je dobré oddělit _programování_
v Pythonu od _zobrazování výsledku_ v HTML. Jenže co když si potřebuješ i při
tom zobrazování trochu pomoci?

Od toho jsou tu filtry. Filtr je funkce, kterou lze použít v šabloně pro nějakou
užitečnou transformaci. Jinja2 má spoustu filtrů rovnou zabudovaných, např. `capitalize`:

```html
{{ user_name|capitalize }}
```

Místo `zuzejk` tato značka vypíše `Zuzejk`. Pohrajme si s profily jednotlivých PyLadies:

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

Do `user_profile.html` ve složce `templates` si ulož následující šablonu:

```html
<!DOCTYPE HTML>
<html>
	<head><title>PyLady: {{ user.name|capitalize }}</title></head>
	<body>
		<h1>PyLady: {{ user.name|capitalize }}</h1>
		<p>Oblíbená barva: {{ user.color }}</p>
		<hr>
		<p><a href="{{ url_for('users') }}">Zpět na seznam</a></p>
	</body>
</html>
```

Jak vidíš, v Jinja2 se k atributům slovníku přistupuje přes tečku. Jména PyLadies
prohnaná přes `capitalize` filtry budou s prvním písmenem verzálkou. Zakomponovali jsme také
odkaz zpět na seznam.

Můžeš si ale přidávat i vlastní filtry. Když budeš mít v databázi rok narození, ale chceš zobrazovat věk:

```python
pyladies_db = {
  'zuzejk': {'name': 'Zuzka', 'color': 'zelená', 'born': 1420},
  'lspdv': {'name': 'Veronika', 'color': 'modrá', 'born': 1492},
  'benabraham': {'name': 'Dan', 'color': 'růžová', 'born': 1415},
}
```

Filtr, který načte rok a vrátí aktuální věk můžeš napsat takto:

```python
import datetime

@app.template_filter('age')
def calculate_age(year):
    """Calculate number of years since given year till today"""
    return datetime.datetime.now().year - year
```

V šabloně:

```html
<h1>PyLady: {{ user.name|capitalize }}</h1>
<ul>
	<li>Oblíbená barva: {{ user.color }}</li>
	<li>Věk: {{ user.born|age }}</li>
<ul>
```

<div class="c-example">
<h1>PyLady: Zuzka</h1>
<ul>
	<li>Oblíbená barva: zelená</li>
	<li>Věk: 597</li>
<ul>
</div>

---

## Escaping

----

V textu, který se vkládá do šablon, jsou automaticky nahrazeny znaky, které mají v HTML speciální význam. 
Zabraňuje se tak bezpečnostním rizikům, kdy se vstup od uživatele interpretuje jako HTML.

Představ si, že bys měla následující routu a šablonu:

```python
@app.route('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)
```

```html
<p>Ahoj {{ name }}!</p>
```

Nějaký zákeřný útočník by mohl zkusit do stránky vložit JavaScript tak,
že ho zkusí vepsat jako součást svého jména: `/hello/<img src="." onerror="alert('Bu bu bu!')">` Jenže
Jinja2 nás ochrání a výsledné HTML bude následující:

```html
<p>Ahoj &lt;img src=&#34;.&#34; onerror=&#34;alert(&#39;Bu bu bu!&#39;)&#34;&gt;!</p>
```

----
<!-- .slide: data-state="c-slide-task" -->

## Cvičení pro odvážné

Zkuste si vytvořit HTML stránku, která obsahuje následující kód a otevřte si ji v prohlížeči.

```html
<p>
	Ahoj <img src="." onerror="alert('Bu bu bu!')">!
</p>
```

----

### Vložení HTML do stránky

Někdy je ovšem potřeba do stránky opravdu HTML vložit.
To se dá zajistit dvěma způsoby. Nejjednodušší je vestavěný filtr `safe`.

Představ si, že v proměnné `april_date` máš řetězec `1. dubna`. Pokud by sis dostatečně zmenšila okno prohlížeče
a text `1. dubna` by se na stránce ocitl na konci řádku, mohl by se škaredě zalomit tak, že `1.` zůstane
na jednom řádku a `dubna` skočí na druhý. To se špatně čte. HTML nám umožňuje zabránit zalamování tím, 
že místo běžné mezery použijeme značku `&nbsp;` (tzv. _entitu_) pro [nedělitelnou mezeru][nbsp]. 
Můžeš si tedy datum uložit jako `1.&nbsp;dubna`. Jenže pokud budeš chtít takový text vypsat v šabloně, 
Jinja2 nás opět ochrání:

[nbsp]: https://cs.wikipedia.org/wiki/Nezlomiteln%C3%A1_mezera

```html
Apríl je {{ april_date }}
```

Výsledné HTML bude `Apríl je 1.&amp;nbsp;dubna` a v prohlížeči se zobrazí `1.&nbsp;dubna`. Proto použijeme filtr `safe`, čímž ochranu pro tento řetězec vypneme:

```html
Apríl je {{ april_date|safe }}
```

Nejlepší je ale opravdu nemíchat HTML s daty ještě před tím, než je vypíšeš.
Data by se měla ukládat jako běžný text a nedělitelné mezery je nejlepší přidat až v šabloně.

Napiš si na to tedy vlastní filtr. Jenže jak v něm označit výsledek jako „bezpečný“?
Můžeš použít třídu [jinja2.Markup](http://jinja.pocoo.org/docs/api/#jinja2.Markup):

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

----

#### Entity

Entity prohlížeč _zobrazí_, jako by tam byly znaky, které mají v HTML speciální význam (`<`, `>`, `&` atd.) 
nebo by se špatně psaly. Zobrazí je, ale nechová se k nim jako by tam opravdu byly, 
proto se z nich nestanou například tagy. Entita vždy začíná `&` a končí `;` 

Některé se dají zapsat také písmeny. Třeba nedělitelná mezera jako `&nbsp;` (zkratka z&nbsp;_Non-Breaking SPace_) 
a pro některé existuje jen číselná varianta (pro nedělitelnou mezeru je to `&#160;`.

---

## Kombinování šablon

----

Chceš-li jednotlivým stránkám dát společné logo, menu, nebo patičku s kontaktními
informacemi, musela bys mít tyto části nakopírované do každé šablony. To je
celkem otravné a navíc to vede k chybám. Pokud bys dělala změny, mohla bys
je zapomenout zanést do jedné ze šablon.

Jinja2 v tomto ohledu velmi zjednodušuje život. Nejčastěji se takové
situace řeší přes [dědění šablon][tpl-inheritance], ale to je na delší vysvětlování,
tak si pro začátek ukažme alespoň `include`, tedy [vkládání šablon do sebe][tpl-include].

Vytvoř si šablonu `_menu.html`, kam dáš jen menu. Šablony, které
nepředstavují samostatné stránky, je dobrým zvykem pojmenovávat s podtržítkem na začátku.

```html
<p>
	<strong>Menu:</strong>
	<a href="{{ url_for('index') }}">Hlavní stránka</a> -
	<a href="{{ url_for('users') }}">Seznam</a> -
	<a href="{{ url_for('contact') }}">Kontakty</a>
</p>
```

Do každé šablony pro samostatnou stránku potom můžeš nahoru vložit menu:

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

Takto si můžeš do budoucna ušetřit hodně práce.

[tpl-inheritance]: http://jinja.pocoo.org/docs/templates/#template-inheritance
[tpl-include]: http://jinja.pocoo.org/docs/templates/#include

---

## Statické soubory

----

V HTML je stránka sice zajímavější než jako prostý text, ale pořád tomu něco chybí.
Většinou chceme do stránky přidat i CSS a obrázky. Jelikož CSS ani obrázky
nepotřebujeme nijak generovat, ale stačí je vzít jako soubor a poslat
uživateli do prohlížeče, nazýváme je v kontextu dynamických webových stránek
_statickými soubory_.

Podobně jako máš ve Flasku složku na šablony pojmenovanou `templates`, udělej 
si vedle ní složku i na statické soubory, `static`. Z Pythonu nebo ze šablony se
pak na soubory v této složce můžeš odkázat následovně:

```python
url_for('static', filename='style.css')
```

Připojit ke stránce CSS můžeš tedy tak, že do šablony stránky přidáš
do hlavičky následující řádek:

```html
<link href="{{ url_for('static', filename='style.css') }}" rel="stylesheet">
```

Prohlížeč tak dostane v `href` vygenerovanou cestu `static/style.css`
kde CSS najde, pokud ho tam umístíš. 

S obrázky to funguje obdobně:

```html
<img src="{{ url_for('static', filename='daniel.jpg') }}">
```

---

Tento text jsme upravili z [https://github.com/cvut/MI-PYT/blob/master/tutorials/02_flask.md](tutoriálu) dostupného pod licencí [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/), autorů Petra Viktorina a Miro Hrončoka a [dalších](https://github.com/cvut/MI-PYT/graphs/contributors), proto je pod stejnou licencí dostupný i text na této stránce.
