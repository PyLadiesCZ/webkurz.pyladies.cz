# Zdroje

Nauč se používat specifikace či reference, kde si dohledáš vše, co budeš potřebovat. 

----

## Specifikace

Je pouze jediná kanonická specifikace, a to ta od [The World Wide Web Consortium (W3C)](https://www.w3.org/). Ta je ale velmi podrobná a technická a není snadné jí rozumět. Proto jsou tu jiné, víc praktické.

_Poznámka: navzdory podobnému jménu, není web w3schools.com s konsorciem W3C nijak propojen._


### Anglicky

#### [Mozilla Developer Network (mdn.io)](https://mdn.io) 

MDN je dobrá reference o všem, co je spojeno s vývojem frontendu, tedy i HTML a CSS


#### [devdocs.io](https://devdocs.io) 

Devdocs je skvělá meta reference, která agreguje obsah z mnoha jiných specifikací jako MDN a další. Navíc umožňuje si stáhnout obsah toho, co tě zajímá offline, a tak funguje rychle i na špatném nebo žádném připojení.


#### [cssreference.io](http://cssreference.io) 

CSS reference, která sice neobsahuje všechny vlastnosti, ale ukazuje vizuálně u těch důležitých (i těch méně), co a jak ovlivňují.


### Česky

Pokud bys hledala něco v češtině, tak často najdeš [Jak psát web](http://jakpsatweb.cz/), které je hezky napsané, ale tam jsou často zastaralé, i když správné informace. 

Aktuálnější je třeba [Je čas](http://jecas.cz/), kde kromě relativně aktuálních článků najdeš i [popisy cca stovky HTML značek](http://jecas.cz/vsechny-html-znacky). 

----

## Nástroje

### [Validátor HTML od W3C](https://validator.w3.org/nu/) 

Validátor slouží k ověření, že máš HTML správně napsané. 

Na rozdíl od Pythonu, kde se program ukončí, totiž prohlížeč klidně zobrazí kód, který není úplně OK. Například se snaží uhodnout, kde ukončit neuzavřené tagy apod. To samozřejmě nemůže být nikdy 100% a pak se můžeš dočkat nepříjemných překvapení v tom, jak stránka funguje. Proto je dobré mít HTML validní a občas si to ověřit.
 
Do validátoru můžeš zkopírovat celé HTML nebo nahrát soubor z tvého počítače nebo mu dát adresu, kde je stránka ublikovaná na internetu. 

Pokud si nainsaluješ [extenzi do Chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) nebo [do Firefoxu](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) _Webdeveloper Toolbar_ najdeš v ní sekci _Tools_ možnost _Validate local HTML_, která ti rovnou otevře výsledek validátoru s právě otevřenou stránkou ať už je na serveru nebo jen u tebe na počítači.


### [caniuse.com](http://caniuse.com) 

Nástroj, který ti poví, jestli je dobrý nápad nějakou vlastnost použít, protože má přehled o tom, které browsery ji podporují a kolik lidí je používá. Nejsou v něm starší vlastnosti, které jsou široce podporované, ale především ty nové a experimentální. Proto když tam něco nenajdeš, znamená to většinou, že to umí bez problému všechny v součastnosti používané prohlížeče.
