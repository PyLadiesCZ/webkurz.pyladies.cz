## Instalace 

---


### Django

Předpokládám, že máš Python 3 i venv už nainstalovaný.

----
```shell
python -m venv venv
```

Na Linuxu

```shell
source venv/bin/activate
```
Na Windows
```shell
venv\Scripts\activate
```

A dále ve virtual envu
```shell
(venv) git clone https://github.com/benabraham/goldenking.git
Cloning into 'goldenking'...
remote: Counting objects: 40, done.
remote: Compressing objects: 100% (30/30), done.
remote: Total 40 (delta 7), reused 36 (delta 5), pack-reused 0
Unpacking objects: 100% (40/40), done.
```

```shell
(venv) cd goldenking
```

```shell
(venv) pip install -r requirements.txt
Collecting Django==1.10.6 (from -r requirements.txt (line 1))
  Using cached Django-1.10.6-py2.py3-none-any.whl
Installing collected packages: Django
Successfully installed Django-1.10.6
```

```shell
(venv) python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, donations, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  …
  Applying sessions.0001_initial... OK
```

```shell
(venv) python manage.py loaddata fixtures.json
Installed 32 object(s) from 1 fixture(s)
```

```shell
(venv) python manage.py runserver

Performing system checks...

System check identified no issues (0 silenced).
March 10, 2017 - 00:00:00
Django version 1.10.6, using settings 'goldenking.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

Na adrese http://127.0.0.1:8000/admin/

se dá přihlasit jako uživatel `admin` heslem `adminadmin`

---

### Node.js

----

Protože máš hotovou konfiguraci v `package.json`, nainstaluj si balíčky přes `npm`:

```shell
npm install
```

Nyní by měl jít spustit `gulp`, který ti zároveň spustí devserver:

```shell
gulp
```

A na http://localhost:3000/ budeš mít verzi, na které se bude automaticky obnovovat po změnách, kompilovat CSS ze scss a další příjemnosti.


