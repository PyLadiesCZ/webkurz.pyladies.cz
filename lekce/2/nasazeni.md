# Deployment <!-- už asi nedělat -->

Aplikace běží na našem počítači, ale jak ji dostat do internetu?
Existují různé možnosti, jednou z nich je nasadit ji do cloudu.
My použijeme [Python Anywhere], protože je pro limitované použití zdarma.

----

K posílání kódu na produkční prostědí budeme používat Git.
Nejprve proto uložte celý projekt do Gitu a nahrajte na GitHub.

Potom se zaregistrujte na
[www.pythonanywhere.com](https://www.pythonanywhere.com/) a vyberte
Beginner Account.
Po přihlášení se ukáže záložka "Consoles", kde vytvoříme "Bash" konzoli.
V té vytvořte a aktivujte virtuální prostředí, a nainstalujte Flask (plus
případně další závislosti).
(Příkaz vypadá kvůli balíčkovací politice Debianu
trochu jinak než na našich počítačích.)

```bash
virtualenv --python=python3.5 env
. env/bin/activate
python -m pip install flask
```

Následně naklonujte na PythonAnywhere náš kód.
S veřejným repozitářem je to jednodušší – stačí ho naklonovat „anonymně”
(`git clone https://github.com/<github-username>/<github-repo>`).
Pokud ale používáme privátní repozitář, bude potřeba si vygenerovat SSH klíč:

```bash
ssh-keygen  # (zeptá se na hesla ke klíči)
cat ~/.ssh/id_rsa.pub
```

Obsah souboru `~/.ssh/id_rsa.pub` je pak potřeba přidat na GitHub v osobním
nastavení v sekci "SSH and GPG Keys".
Pak můžeme klonovat přes SSH:

```bash
git clone git@github.com:<github-username>/<github-repo>.git
```

Zbývá nastavit, aby PythonAnywhere tento kód spustil jako webovou aplikaci.

Přejděte na stránkách PythonAnywhere do Dashboard do záložky Web,
a vytvořte novou aplikaci.
V nastavení zvolte Manual Configuration a Python 3.5.

V konfiguraci vzniklé webové aplikace je potřeba nastavit "Virtualenv"
na cestu k virtuálnímu prostředí (`/home/<jméno>/env`),
a obsah "WSGI Configuration File" přepsat na:

```python
import sys
path = '/home/<uživatelské-jméno>/<jméno-adresáře>'
if path not in sys.path:
    sys.path.append(path)

from <jméno-souboru> import app as application
```

(Za `<uživatelské-jméno>`, `<jméno-adresáře>` a `<jméno-souboru>` je samozřejmě potřeba doplnit
vaše údaje. Jméno souboru je zde bez přípony.)

To jde buď kliknutím na odkaz v konfiguraci (otevře se webový editor),
nebo zpět v bashové konzoli pomocí editoru jako `vi` nebo `nano`.

Nakonec restartujte aplikaci velkým zeleným tlačítkem na záložce Web,
a na adrese `<uživatelské-jméno>.pythonanywhere.com` si ji můžete
prohlédnout.

[Python Anywhere]: https://www.pythonanywhere.com/

---

Tento text jsme upravili z [https://github.com/cvut/MI-PYT/blob/master/tutorials/02_flask.md](tutoriálu) dostupného pod licencí [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/), autorů Petra Viktorina a Miro Hrončoka a [dalších](https://github.com/cvut/MI-PYT/graphs/contributors), proto je pod stejnou licencí dostupný i text na této stránce.
