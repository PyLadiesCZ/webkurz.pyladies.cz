# Nasazení (deployment)

Aplikace běží na tvém počítači, ale jak ji dostat do internetu?

Existují různé možnosti, jednou z nich je nasadit ji do cloudu.
My využijeme [Python Anywhere](https://www.pythonanywhere.com/), protože je pro limitované použití zdarma.

----

K posílání kódu na server, kde poběží použijeme GitHub, proto je potřeba mít to, co chceš nasadit dostupné na GitHubu.

Potom se zaregistruj na [www.pythonanywhere.com](https://www.pythonanywhere.com/) a vyber _Beginner Account_.

Po přihlášení se ukáže záložka _Consoles_, kde vytvoř _Bash_ konzoli.

V té vytvoř a aktivuj virtuální prostředí.

```bash
virtualenv --python=python3.6 env
. env/bin/activate
python -m pip install flask
```

Následně naklonuj na PythonAnywhere kód.

S veřejným repozitářem je to jednodušší – stačí ho naklonovat „anonymně”
(`git clone https://github.com/<github-username>/<github-repo>`).

Zbývá nastavit, aby PythonAnywhere tento kód spustil jako webovou aplikaci.

Přejdi na stránkách PythonAnywhere do _Dashboard_ a záložky _Web_, a vytvoř novou aplikaci.

V nastavení zvol _Manual Configuration_ a _Python 3.6_.

V konfiguraci vzniklé webové aplikace je potřeba nastavit _Virtualenv_ na cestu k virtuálnímu prostředí (`/home/<jméno>/env`), a obsah _WSGI Configuration File_ přepsat na:

```python
import sys
path = '/home/<uživatelské-jméno>/<jméno-adresáře>'
if path not in sys.path:
    sys.path.append(path)

from <jméno-souboru> import app as application
```

Za `<uživatelské-jméno>`, `<jméno-adresáře>` a `<jméno-souboru>` je samozřejmě potřeba doplnit tvoje údaje. Jméno souboru je zde bez přípony.

To jde buď kliknutím na odkaz v konfiguraci (otevře se webový editor), nebo zpět v bashové konzoli pomocí editoru jako `vi` nebo `nano`.

Nakonec restartuj aplikaci velkým zeleným tlačítkem na záložce _Web_ a na adrese `<uživatelské-jméno>.pythonanywhere.com` si ji můžeš prohlédnout.

---

Tento text jsme upravili z [tutoriálu](https://github.com/cvut/MI-PYT/blob/master/tutorials/02_flask.md) dostupného pod licencí [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/), autorů Petra Viktorina a Miro Hrončoka a [dalších](https://github.com/cvut/MI-PYT/graphs/contributors), proto je pod stejnou licencí dostupný i text na této stránce.
