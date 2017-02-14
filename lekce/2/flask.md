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

<div class="c-example">
PyLadies jsou nejlepší!
</div>

Pomocí `app.run()` jsme aplikaci spustili na lokálním počítači. Parametrem `debug`
Flasku říkáme, že chceme zjednodušit _debugování_ (tzn. hledání a opravování chyb). Díky tomu uvidíme případné výjimky
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

<div class="c-example">
PyLadies přijdou, když si v nouzi, když tě Python ze sna vzbouzí, zavolat jen stačí heslo: PyLady, úú!
</div>

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

Když tedy v prohlížeči otevřeme adresu http://127.0.0.1:5000/users/zuzejk, objeví se nám řetězec `zuzejk` v proměnné `user_name` a my s ním můžeme dále pracovat. Protože klíč `zuzejk` v našem slovníku je, vypíšeme profil dané PyLady.

<div class="c-example">
PyLady Zuzka! Oblíbená barva: zelená
</div>

Kdybychom do adresy vepsali uživatelské jméno, které v databázi není, např. http://127.0.0.1:5000/users/nesmysl, zavolá naše aplikace funkci `abort` z Flasku a vrátí chybu _404 Not Found_. To je standardní způsob, jak dát na internetu druhé straně najevo, že se v daných místech nic nenachází.

---

Tento text jsme upravili z [https://github.com/cvut/MI-PYT/blob/master/tutorials/02_flask.md](tutoriálu) dostupného pod licencí [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/), autorů Petra Viktorina a Miro Hrončoka a [dalších](https://github.com/cvut/MI-PYT/graphs/contributors), proto je pod stejnou licencí dostupný i text na této stránce.
