# Responzivní web


----

Přestože se statistiky návštěvnosti různých webů mohou výrazně lišit, neexistuje asi dnes žádný web, na který by nechodilo nezanedbatelné množství návštěvníků s&nbsp;jiným zařízením než je klasický počítač s&nbsp;myší a velkou obrazovkou.

Responzivní návrh webu se snaží tuto skutečnost brát v potaz.

Je potřeba si uvědomit, že displeje zařízení s prohlížečem jsou všech velikostí: od opravdu malých po obrovské monitory. A liší se nejen velikostí, ale i jemností (počet fyzických pixelů na cm²) a také tím, zda jsou dotykové nebo ne.

----

## Jak to tedy řešit?

Ještě stále se lze setkat se starším způsobem, kdy na jiné adrese (typu m.example.com) existuje „mobilní“ web s jiným HTML, CSS a často i obrázky, na který je po detekci zařízení prohlížeč přesměrován. Tuto cestu nelze doporučit z více důvodů, jedním z&nbsp;hlavních je to, že řeší fungování jen na omezeném množství zařízení.

Proto je lepší cestou responzivní web, který má stejný kód pro všechna zařízení a umí se chovat tak, jak je potřeba, pro všechny velikosti okna prohlížeče.

----

### Pružný layout

Pružný layout mění rozměry podle velikosti okna, proto se často definuje v procentech. Je to pro blokové prvky vlastně normální stav, protože jejich výchozí šířka je 100 % šířky rodičovského elementu.

V pružném layoutu kromě šířek v procentech často využiješ i maximální a minimální šířku a flexbox.


#### Viewporty

Protože historicky prohlížeče na menších zařízeních musí vycházet z toho, že stránka je vytvořena pro „desktopové“ rozlišení, vykreslují web jako by obrazovka měla 980 pixelů šířky (nejčastěji). To vede k titěrné velikosti stránky a nutí uživatele si ji zvětšovat. Je potřeba prohlížeči „říct“, že je vyrobený i pro něj a to v hlavně v HTML, přímo v hlavičce.    

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    …
```

A pro Windows Phone i v CSS.

```css
@-ms-viewport { width: device-width; }
```

_Na Vzhůru dolů si můžeš přečíst víc o [viewportech](http://www.vzhurudolu.cz/prirucka/viewport-mobily) a značce [meta viewport](http://www.vzhurudolu.cz/prirucka/viewport-meta), prakticky si ale dlouho vystačíš s prostým zkopírováním těch dvou kousků kódu._  


----

### Pružné obrázky

Text se v pružném layoutu přizpůsobí sám, „nateče“ do definovaných šířek, ale obrázky samy od sebe ne. Proto je potřeba přizpůsobit je šířce layoutu. To úplně nejjednodušší řešení je nastavit jim `max-width: 100%;`, čímž se nestane, že by se obrázek roztáhnul nad jeho skutečnou velikost a `height: auto;`, čímž se zajistí zachování poměru stran.

_Více k [responzivním obrázkům](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky) na Vzhůru dolů_   

----

### Media Queries: podmínky pro změny layoutu

Jen pomocí pružného layoutu jde sice nějaký ten jednodušší web udělat, ale u komplikovanějšího layoutu narazíš na potřebu změnit něco, co „nejde“. V takové chvíli je čas sáhnout po _media queries_, což jsou v podstatě podmínky v CSS, při jejichž splnění se aplikuje CSS, které je v nich uzavřené.

Podmínky se mohou týkat mnoha vlastností, nejčastěji ale šířky okna prohlížeče.

```css
@media (min-width: 640px) {
    /* CSS které platí pouze pokud je okno prohlížeče široké 640px a více */
}
```

Prakticky se to používá takto.

```css
body { font-size: 14px; }

@media (min-width: 640px) {
    body { font-size: 16px; }
}
```
Protože je zároveň další definice velikosti písma pro `body` až druhá, „přebije“ v případě splnění podmínky tu první. 
Písmo tedy bude 14px do šířky 639px a od 640px pak 16px. Obdobně můžeš předefinovat jakoukoli CSS vlastnost libovolného prvku.

Šířka 640px by se v tomto příkladu stala tzv. bodem zlomu (anglicky _breakpoint_). Obvykle má responzivní webová stránka breakpointů několik.

Podmínky mohou být i komplexnější (maximální šířka, logické operátory, negace atd.). _Více o [Media Queries](http://www.vzhurudolu.cz/prirucka/css3-media-queries) najdeš na Vzhůru dolů_

---

## Jak na to prakticky?

----

### Mobile first

_Mobile first_ je přístup návrhový (designový) i technologický. Vymyslet jak bude web vypadat na velkém displeji a teprve potom začít přemýšlet o tom, jak to všechno vtěsnat na malou obrazovku je skoro vždy více práce než to řešit naopak. Často je to i nemožné, protože některé prvky ani nejde zmenšit tak, aby šly ještě používat. Výhodou je i to, že díky takovému přístupu je stránka obvykle jednodušší, obsahuje toho prostě méně, díky čemuž se i lépe používá.  

Technicky to se to dělá tak, že nejdřív napíšeš styly pro nejmenší velikost displejů (obvykle šířka 320 pixelů) a postupně roztahuješ okno, aby bylo širší. Jakmile stránka vypadá špatně, podíváš se na šířku okna, vytvoříš breakpoint pomocí media query (např. `@media (min-width: 480px) { … }`) a přidáš CSS vlastnosti, které to vyřeší, tedy způsobí, že to od tohoto bodu bude vše zas vypadat jak má. Například ze dvou prvků, které jsou pod sebou a mají 100% šířku uděláš dva stejně široké vedle sebe.

_Tip: Pro roztahování je praktické využít [Device mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) v Developer Tools prohlížeče Chrome, které ti i ukazuje šířku viewportu._

----

### Knihovny

V praxi ti s responzivitou pomůže např. knihovna Bootstrap o kterém je následující kapitola a který má již prvky navržené právě podle přístupu _mobile first_.
