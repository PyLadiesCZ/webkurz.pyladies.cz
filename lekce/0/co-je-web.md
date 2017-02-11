# Co je web a jak funguje

World wide web je informační prostor, kde jsou dokumenty a další zdroje identifikovány pomocí URL, provázané pomocí odkazů a lze k nim přistupovat po internetu, často (ale ne vždy) pomocí webového prohlížeče.

----

## Co je taky web?

Web ale není jen to, co vidíte v prohlížeči. Web používají často i uživatelé, kteří nejsou zdraví a nemají k dispozici nejnovejší technologie v ideálních podmínkách. Je dobré na ně myslet, když web děláte.

----

### Co může být jinak, než bys čekala?

#### Uživatel má pomalé připojení k internetu

Je potřeba dělat weby tak, aby se načítaly dostatečně rychle i na pomalejším připojení. Určitě pomůže mít je datově co nejmenší, ale jsou i další faktory, které rychlost načítání ovlivňují.

#### Uživatel má dostupnou pouze starší technologii

Pomalý a starý počítač se starší verzí prohlížeče, možná dokonce s malým displejem. Je potřeba dělat weby tak, aby fungovaly i těmto uživatelům.

#### Uživatel si web prohlíží na mobilním zařízení 

A třeba mu na displej svítí slunce nebo jede v autobuse. Je potřeba dělat weby i pro mobilní zařízení a s dostatečně kontrastními a velkými prvky.

#### Uživatel není člověk

Ano, vaše stránky navštěvují i roboti, třeba ten od Google. Je potřeba dělat weby tak, aby se k nim roboti dostali a v důsledku toho pak i lidé, kteří používají výsledky jejich práce.

#### Uživatel má nějaké postižení 

Třeba je nevidomý či slabozraký, či jen barvoslepý. Třeba se mu „jen“ třesou ruce a špatně se mu trefuje na malé odkazy. Je potřeba si něco zjistit o tzv. přístupnosti a aplikovat to při vývoji.

----

## Webová stránka

Webová stránka je soubor ve formátu HTML. V něm je často napsáno, že v dalších souborech se nachází další data (soubory), které potřebuje pro to, aby ji prohlížeč mohl vykreslit. Těch souborů mohou být klidně desítky, ale jsou i stránky, které jsou celé definované v jednom jediném HTML souboru.

Stránky jsou na Internetu obvykle dostupné na serveru, což je počítač někde v klimatizované místnosti bez monitoru a klávesnice, ale s rychlým připojením. Server ovšem můžeme mít puštěný i lokálně (na vlastním počítači). To se využívá pro vývoj, než stránku nasadíme (umístíme) na server vzdálený. 

---

## URL

URL je zkratka z Uniform Resource Locator a určuje unikátní umístění zdroje (souboru) na Internetu. Říkáme ji také adresa a najdete ji v adresním řádku prohlížeče.

----

### Části URL

<p class="c-url">
	<b style="color:#999;">
		<span class="fragment" data-fragment-index="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; doména 3. řádu</span>
		<span class="fragment" data-fragment-index="65">&nbsp;složka</span>
		<span class="fragment" data-fragment-index="128">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dva parametry</span>
	</b><br>
	<br>
	<b style="color:#999;">
		<span class="fragment" data-fragment-index="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▼</span>
		<span class="fragment" data-fragment-index="65">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▼</span>
		<span class="fragment" data-fragment-index="128">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▼</span>
	</b>
	<br>
	<b class="fragment" data-fragment-index="10" style="color:black;">http</b>
	<b class="fragment" data-fragment-index="20" style="color:black;">://</b>
	<span class="fragment" data-fragment-index="30" >
		<b style="color:#0DA6F2;">www</b>
		<b style="color:black;">.</b>
		<b style="color:#0A85C2;">pyladies</b>
		<b style="color:black;">.</b>
		<b style="color:#086391;">cz</b>
	</span>
	<b class="fragment" data-fragment-index="50" style="color:black;">/</b>
	<b class="fragment" data-fragment-index="60" style="color:#E000AE;">folder</b>
	<b class="fragment" data-fragment-index="70" style="color:black;">/</b>
	<span class="fragment" data-fragment-index="80" >
		<b style="color:#E000AE;">file</b>
		<b style="color:#E000AE;">.</b>
		<b style="color:#E000AE;">html</b>
	</span>
	<b class="fragment" data-fragment-index="90" style="color:black;">?</b>
	<span class="fragment" data-fragment-index="100">
		<b style="color:green;">a</b>
		<b style="color:darkgreen;">=</b>
		<b style="color:lime;">10</b>
	</span>
	<b class="fragment" data-fragment-index="110"  style="color:black;">&amp;</b>
	<span class="fragment" data-fragment-index="120">
		<b style="color:green;">b</b>
		<b style="color:darkgreen;">=</b>
		<b style="color:lime;">ten</b>
	</span>
	<b class="fragment" data-fragment-index="130"  style="color:orange;"><b style  ="color:darkorange;">#anchor</b></b>
	<br>
	<b style="color:#999;">
		<span class="fragment" data-fragment-index="15">▲</span>
		<span class="fragment" data-fragment-index="42">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▲</span>
		<span class="fragment" data-fragment-index="43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▲</span>
		<span class="fragment" data-fragment-index="85">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▲</span>
		<span class="fragment" data-fragment-index="135">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▲</span>
	</b>
	<br>
	<b style="color:#999;">
		<span class="fragment" data-fragment-index="15">protokol</span>
		<span class="fragment" data-fragment-index="42">&nbsp; doména</span>
		<span class="fragment" data-fragment-index="43">&nbsp; TLD</span>
		<span class="fragment" data-fragment-index="85">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; soubor</span>
		<span class="fragment" data-fragment-index="135">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fragment</span>
	</b>
</p>


* protokol: obvykle se potkáme s http nebo https (šifrovaný přenos)
* doména 3. řádu: pokud si zaregistrujete doménu, můžete si domén třetího a vyššího řádu definovat kolik chcete.
* doména: registrujete si u registrátorů domén, obvykle za roční registrační poplatek
* top-level doména
	* generické: .net, .info, .org, .com, … 
	* národní: ty spravuje pro každou zemi národní správce domény (u nás CZ.NIC)
	* sponzorované TLD: které spravují organizace, které si je v centrálním registru IANA zaplatily (například .aero, .coop, .jobs, .travel a další) 
* složka
* soubor
* parametry: v příkladu jsou dva, `a` má hodnotu `10` a `b` má hodnotu `ten`
* fragment: za znakem `#` často se používá k identifikace pozice v dokumentu

V URL (adrese) se smí používat jen základní znaky: malá a velká písmena latinské abecedy (tj. písmena od `a` do `z` a od `A` do `Z`), číslice a dále znaky `!` `*` `'` `(` `)` `;` `:` `@` `&` `=` `+` `$` `,` `/` `?` `#` `[` `]` `-`	`_`	`.`	`~`. Všechny ostatní speciální znaky se zapisují jako tzv. _URL encoded_. Například mezera jako `%20` a prozatím se jim v názvech souborů a složek vyhýbej, ušetříš si tím spoustu problémů.

---

## Přenos souboru po internetu

Domény jsou dobrá pomůcka hlavně pro lidi, ale ve skutečnosti má každé zařízení připojené do internetu svoji IP adresu a domény mají k sobě tuhle IP adresu přiřazenou pomocí DNS (Domain Name System). Tyhle informace, DNS záznamy jsou uloženy na speciálních serverech, které tak slouží jako jakési telefonní seznamy.
 
Co se tedy stane, když napíšete do adresního řádku www.pyladies.cz?

----

### Zjištění IP adresy serveru

#### Požadavek prohlížeče

Chce si zjistit „telefonní&#0160;číslo“ (IP&#0160;adresu) z&#0160;DNS&#0160;serveru

<p class=" c-text-left"><q>Haló, jaká je prosím IP adresa pro www.pyladies.cz?</q></p>

#### Odpověď DNS serveru

<p class=" c-text-right"><q>74.125.0.45</q></p>

----

### Získání stránky

#### Prohlížeč si řekne o soubor

<p class=" c-text-left">prohlížeč vytočí 74.125.0.45: <br><q>Ahoj, tady prohlížeč,<br> dáte mi prosím soubor <br> na adrese www.pyladies.cz?</p>


#### Odpověď serveru 
 
Odpovědí už je samotný soubor a pár informací k němu.

<p class=" c-text-right"><q>Ano, ten máme<br> je asi takhle ⟵⟶ velký,<br>je ještě čerstvý <br>a rovnou ho posílám.</q></p>

A někdy taky řekne: „Pardon, takový nemám“ (kód 404) nebo „Mám, ale řekni heslo!“ a podobně, v takovém případě samozřejmě soubor nepošle.

---

## index.html

---- 

Většina serverů je standardně nastavená tak, že pokud není specifikováno jméno souboru, tak zobrazí soubor, který se jmenuje `index.html`. Proto většinou soubor s úvodní stránkou webu pojmenujeme právě tak.

---

## Vykreslení stránky

---- 

Když si prohlížeč stáhne HTML, přečte si ho a nakreslí podle něj stránku.

Většinou se během čtení dozví, že pro to potřebuje ještě další soubory, například obrázky, a tak si stejným způsobem jako o HTML řekne i o ně. Na některé soubory se s vykreslováním čeká a jiné se do stránky vloží, prostě až se je podaří stáhnout.

---

## Jak ty soubory vzniknou?

---- 

Nejsnazší je napsat je ručně v textovém editoru, to budeme zatím dělat i my, než se dostane k druhé možnosti, že nám je vygeneruje program v Pythonu.
