/**
 * APP MODEL
 * Felelős az adatok és állapot tárolásáért/kezeléséért.
 */
const AppModel = {
  currentLang: 'hu',

  contactData: {
    hu: {
      name: 'Flok Zoltán',
      phoneText: '+421 911 733 581',
      phoneHref: 'tel:+421911733581',
      emailText: 'it_szolg@icloud.com',
      emailHref: 'mailto:it_szolg@icloud.com'
    },
    sk: {
      name: 'Zoltán Flok',
      phoneText: '+421 911 733 581',
      phoneHref: 'tel:+421911733581',
      emailText: 'it_szolg@icloud.com',
      emailHref: 'mailto:it_szolg@icloud.com'
    }
  },

  i18n: {
    hu: {
      'nav.services': 'Szolgáltatások', 'nav.pricing': 'Árak', 'nav.why': 'Miért engem', 'nav.faq': 'Kérdések', 'nav.cta': 'Kapcsolatfelvétel',
      'hero.kicker': 'Ipolyság (Šahy) és környéke · Házhoz megyek',
      'hero.title': 'Ha lassú a géped,<br>nem <em>találgatunk</em> —<br>megmérjük, mi a baj.',
      'hero.sub': 'Érthető IT segítség házhoz. Nincs szakzsargon, nincs felesleges csere — előre egyeztetett ár.',
      'hero.ctaPrimary': 'Hívj vagy írj', 'hero.ctaGhost': 'Nézd meg, miben segítek',
      'hero.trust1': '14 nap garancia minden munkára', 'hero.trust2': 'Kiszállás 1–2 napon belül', 'hero.trust3': 'Helyi árak, nem fővárosi', 'hero.common': 'Legtöbben lassú gép vagy wifi miatt írnak.',
      'hero.logTag': 'Szervíznapló',
      'hero.log1': '<b>Lassú indulás:</b> tele lemez volt az oka, nem a gép kora.',
      'hero.log2': '<b>Forró laptop:</b> hűtőborda kitisztítva, hőpaszta cserélve.',
      'hero.log3': '<b>Törölt fotók:</b> visszaállítva — időben leállt a gép használata.',
      'hero.log4': '<b>Akadozó wifi:</b> router áthelyezve, mérve, stabil lett.',
      'hero.logFoot1': 'Ipolyság körzet', 'hero.logFoot2': 'Minden bejegyzés — valós eset',
      'problem1': 'A gép percekig tölt, mire használható', 'problem2': 'A wifi akadozik vagy nem ér el mindenhová', 'problem3': 'Véletlenül töröltél valami fontosat', 'problem4': 'Forró, hangos vagy magától kikapcsol a gép',
      'svc.eyebrow': 'Szolgáltatások', 'svc.heading': 'Amiben segíteni tudok',
      'svc.sub': 'Minden tételnél megtalálod, miről ismerheted fel, hogy épp ez a problémád — és mennyibe kerül a megoldás. Nincs meglepetés.',
      'svc.more': 'Ha valami mást szeretnél, ami nincs a listában — csak írj vagy hívj, szinte biztos, hogy abban is tudok segíteni.',
      'cat.a': 'Internet és otthoni hálózat', 'cat.b': 'Lassú vagy meleg a géped?', 'cat.c': 'Rendszer, biztonság, adatok', 'cat.d': 'Egyéb, amiben még segíthetek', 'cat.e': 'Távoli elérés és folyamatos támogatás',

      'svc1.title': 'Otthoni Netflix — filmek egy helyen', 'svc1.desc': 'Egy saját, könnyen kezelhető „házi Netflix”: a filmjeid egy helyen, TV-n, telefonon és laptopon is — havidíj nélkül.', 'svc1.symptom': '<b>Erről ismerheted fel:</b> a filmek CD-n, pendrive-on és több gépen vannak szétszórva, és mindig keresgélsz.', 'svc1.price': '25–45 €',
      'svc2.title': 'Közös mappa a családnak — havidíj nélkül', 'svc2.desc': 'Otthoni közös tárhely: fényképek és dokumentumok egy helyen, mindenki a saját telefonjáról vagy gépéről eléri — nem kell felhő-előfizetés.', 'svc2.symptom': '<b>Erről ismerheted fel:</b> a családi fotókat e-mailben vagy USB-n küldözgetitek, és mindig valaki nem találja.', 'svc2.price': '15–35 €',
      'svc3.title': 'Lassú vagy akadozó wifi javítása', 'svc3.desc': 'Megmérem a jelerősséget a lakásban, és onnan mondom meg a valódi okot — nem találgatok.', 'svc3.symptom': '<b>Erről ismerheted fel:</b> az egyik szobában jó a net, a másikban alig tölt be valami.', 'svc3.price': '12–25 €',
      'svc4.title': 'Kamera otthonra — telefonról is nézhető', 'svc4.desc': 'Beállítom a kamerát, hogy telefonról lásd, mi történik otthon vagy a telken — biztonságosan, nem a gyári gyenge beállításokkal.', 'svc4.symptom': '<b>Erről ismerheted fel:</b> szeretnéd tudni, mi folyik otthon vagy a kertben, amikor nem vagy ott.', 'svc4.price': '25–45 € munkadíj', 'svc4.badge': 'IP kamera',
      'svc5.title': 'Miért lassú a géped? — Gyorsvizsgálat', 'svc5.desc': 'Megmérem, mi okozza a lassulást, és őszintén megmondom, érdemes-e költeni rá.', 'svc5.symptom': '<b>Erről ismerheted fel:</b> bekapcsolás után percekig tart, mire használható lesz, vagy folyton pörög a kis kerék.', 'svc5.price': '8–12 €',
      'svc6.title': 'Gyorsítás SSD-re cseréléssel', 'svc6.desc': 'A régi, lassú merevlemez helyett SSD-t rakok be. A programok és fájlok megmaradnak — indulás és megnyitás érezhetően gyorsabb.', 'svc6.symptom': '<b>Erről ismerheted fel:</b> a gép percekig tölt, mire elindul vagy megnyílik egy program — régen nem volt ilyen.', 'svc6.price': '20–30 € munkadíj',
      'svc7.title': 'Portalanítás, ha forró vagy hangos a gép', 'svc7.desc': 'Kitisztítom a port a hűtésről, rendbe teszem a hűtést. Kevesebb zaj, alacsonyabb hőmérséklet — mérhetően.', 'svc7.symptom': '<b>Erről ismerheted fel:</b> a gép hangosan zúg már böngészés közben is, vagy magától kikapcsol, mert túlmelegszik.', 'svc7.price': '15–25 €',
      'svc8.title': 'Billentyűzet és képernyő tisztítás', 'svc8.desc': 'Gyors, alapos, kényelmesebb és higiénikusabb mindennapi használatért.', 'svc8.symptom': '<b>Erről ismerheted fel:</b> a billentyűzet ragad, morzsás, a képernyőn ujjnyomok látszanak.', 'svc8.price': '8–12 €',
      'svc9.title': 'Windows telepítés / újratelepítés', 'svc9.desc': 'Tiszta rendszertelepítés: stabil, átlátható, a neked kellő programokkal. Nem a gyári, tele lappal érkező állapot.', 'svc9.symptom': '<b>Erről ismerheted fel:</b> a rendszer lassú, tele van felesleges programmal, vagy egy régi gépet szeretnél újra használhatóvá tenni.', 'svc9.price': '25–50 €',
      'svc10.title': 'Vírusirtás', 'svc10.desc': 'Több eszközzel, keresztezve átvizsgálva — nem egyetlen gyors átfutással.', 'svc10.symptom': '<b>Erről ismerheted fel:</b> furcsa reklámablakok ugranak fel, vagy a böngésződ kezdőlapja magától megváltozott.', 'svc10.price': '15–25 €',
      'svc11.title': 'Jelszavak rendbe tétele', 'svc11.desc': 'Segítek, hogy ne ugyanazt a jelszót használd mindenhol, és a bank / e-mail fiók erősebb védelmet kapjon.', 'svc11.symptom': '<b>Erről ismerheted fel:</b> ugyanaz a jelszó több helyen, vagy már nem emlékszel, mikor cserélted utoljára.', 'svc11.price': '10–15 €',
      'svc12.title': 'Törölt fájlok visszaszerzése', 'svc12.desc': 'Minél előbb hívsz, annál nagyobb az esély — ez a szabály a végleg elveszett fájl felett dönt.', 'svc12.symptom': '<b>Erről ismerheted fel:</b> véletlenül töröltél egy mappát, vagy leformáztad a pendrive-ot mentés előtt.', 'svc12.price': '15–35 €',
      'svc13.title': 'Automatikus biztonsági mentés', 'svc13.desc': 'Egyszer beállítjuk, utána magától fut — próbával, hogy tényleg működik-e.', 'svc13.symptom': '<b>Erről ismerheted fel:</b> ha most tönkremenne a géped, minden fontos fájlod odaveszne.', 'svc13.price': '12–25 €',
      'svc14.title': 'Nyomtató beüzemelése', 'svc14.desc': 'Sokszor nem a nyomtató hibás, csak egy elavult illesztőprogram.', 'svc14.symptom': '<b>Erről ismerheted fel:</b> az új nyomtató nem csatlakozik, vagy a régi hirtelen nem hajlandó nyomtatni.', 'svc14.price': '8–15 €',
      'svc15.title': 'E-mail beállítás és rendrakás', 'svc15.desc': 'Fiókváltás, régi levelek átköltöztetése, spamszűrés.', 'svc15.symptom': '<b>Erről ismerheted fel:</b> annyi felesleges levél gyűlt össze, hogy nem találod a fontosakat.', 'svc15.price': '10–20 €',
      'svc16.title': 'Régi fényképek digitalizálása', 'svc16.desc': 'Papírképek, CD-k, kártyák biztonságos átmentése, mielőtt tönkremennének.', 'svc16.symptom': '<b>Erről ismerheted fel:</b> van otthon egy doboz régi fotó vagy egy fióknyi CD, amit évek óta nem néztél meg.', 'svc16.price': '20–40 €',
      'svc17.title': 'Új gép beüzemelése a régi anyagaiddal', 'svc17.desc': 'Az új gépet használatra készre állítom: fájlok, fontos programok, e-mail — átjön a régiről, nem kell mindent nulláról.', 'svc17.symptom': '<b>Erről ismerheted fel:</b> megérkezett az új gép, de nem tudod, hogyan költöztesd át a régi dolgaidat.', 'svc17.price': '25–40 €',
      'svc18.title': 'Segítség távolról, kiszállás nélkül', 'svc18.desc': 'Sok szoftveres hiba megoldható a te engedélyeddel, távolról — olcsóbb is neked.', 'svc18.symptom': '<b>Erről ismerheted fel:</b> egy kisebb beállítást kellene javítani, és nem szeretnél emiatt kiszállásra várni.', 'svc18.price': '12–25 €',
      'svc19.title': 'Havi / negyedéves karbantartás', 'svc19.desc': 'Időszakos átnézés: frissítések, alap rend, rövid ellenőrzés — hogy ne akkor derüljön ki a baj, amikor már nem megy a gép.', 'svc19.symptom': '<b>Erről ismerheted fel:</b> inkább megelőznéd a gondot, mint akkor hívni, amikor már áll a munka.', 'svc19.price': '10–15 €/hó',

      'price.eyebrow': 'Árazás', 'price.heading': 'Átlátható árak, meglepetés nélkül',
      'price.sub': 'Tájékoztató árak — a végleges díjat mindig a munka előtt egyeztetjük. Nincs rejtett költség.',
      'price.why': 'Az óradíj csak akkor él, ha a hiba előre nem látszik (pl. „lassú a gép”, vegyes tünetek). A kiszámítható munkáknak (wifi, telepítés, nyomtató) fix ára van a szolgáltatáslistában.',
      'price.th1': 'Tétel', 'price.th2': 'Ár',
      'price.r1': 'Óradíj — ha a hiba előre nem mérhető', 'price.r1v': '10 €-tól (tipikusan 10–15 €/óra)', 'price.r2': 'Átvizsgálás — a javításba beszámítható', 'price.r2v': '8–12 €',
      'price.r3': 'Kiszállás Ipolyságon belül', 'price.r3v': 'ingyenes',
      'price.r4': 'Kiszállás környékbeli falvakba', 'price.r4v': '0,30 €/km',
      'price.r5': 'Nagyobb csomag (pl. teljes felújítás)', 'price.r5v': '35–55 €-tól', 'price.r6': 'Távoli segítség (minimum)', 'price.r6v': '10 €',
      'price.note': 'Készpénz, a munka után a helyszínen. Helyszíni munka: minimum 1 óra. Távoli: minimum 10 €. Helyi árak — nem fővárosi / pozsonyi szerviz. Ha az átvizsgálás után javítást kérsz, az átvizsgálás díját beszámítom.',
      'page.title': 'Számítógépes segítség házhoz — Ipolyság és környéke',
      'page.desc': 'Gyors, érthető IT segítség Ipolyságon és környékén. Lassú gép, wifi gond, adatmentés, kamerarendszer — házhoz megyek.',
      'how.eyebrow': 'Hogyan dolgozom', 'how.heading': 'Három lépés, meglepetés nélkül',
      'how.sub': 'Előre megbeszélt ár, érthető magyarázat, és csak az, amire tényleg szükséged van.',
      'how.s1t': 'Írsz vagy hívsz', 'how.s1d': 'Elmondod, mit tapasztalsz — nem kell hozzá szakzsargon.',
      'how.s2t': 'Megmérem a bajt', 'how.s2d': 'Helyszínen vagy távolról: előbb a valódi ok, csak utána a megoldás.',
      'how.s3t': 'Javítás, előre egyeztetett áron', 'how.s3d': 'Ha egyetértesz, megcsinálom. 14 nap garancia minden munkára.',
      't.eyebrow': 'Vélemények', 't.heading': 'Amit az ügyfelek mondanak',
      't.q1': '„A wifi a hátsó szobában alig ment. Átrendezte a routert, megmérte — azóta stabil.”',
      't.q2': '„A laptop percekig indult. Kiderült, tele volt a lemez — nem kellett új gép.”',
      't.q3': '„Érthetően elmagyarázta, mit csinál. Az árat előre megbeszéltük — semmi meglepetés.”',
      't.w1': 'Ipolyság', 't.w2': 'Šahy', 't.w3': 'Tesmag',
      'cta.ms': 'Messenger',

      'why.eyebrow': 'Miért engem érdemes hívni', 'why.heading': 'Nem sózok rád semmit, amire nincs szükséged',
      'why.item1': '<b>Érthető magyarázat</b><span>Szakzsargon nélkül tudod meg, mi volt a baj — nem kell hozzá informatikusnak lenned.</span>',
      'why.item2': '<b>Mérés, nem találgatás</b><span>Előbb megmérem a valós okot, csak utána javaslok megoldást.</span>',
      'why.item3': '<b>Házhoz megyek, vagy távolról</b><span>Ami gyorsabb és olcsóbb neked, azt választjuk.</span>',
      'why.item4': '<b>Helyi, vidéki árazás</b><span>Nem a fővárosi szervizek díjszabása — Ipolyságra és környékére szabva.</span>',

      'guarantee.heading': '14 nap garancia', 'guarantee.text': 'Minden elvégzett munkára garanciát vállalok. Ha ugyanaz a hiba visszatér, díjmentesen megjavítom.',
      'guarantee.stat1': 'kiszállási idő', 'guarantee.stat2': 'garancia', 'guarantee.stat3': 'kiszállás helyben',

      'faq.eyebrow': 'GYIK', 'faq.heading': 'Gyakori kérdések',
      'faq.q1': 'Mennyi idő alatt érsz ki hozzám?', 'faq.a1': 'Ipolyságon és a közeli falvakban jellemzően 1–2 napon belül, sürgős esetben akár még aznap.',
      'faq.q2': 'Mit kell előkészítenem, mielőtt jössz?', 'faq.a2': 'Csak annyit, hogy a gép bekapcsolható és elérhető legyen. Jelszót csak akkor kérek, ha az adott munkához muszáj.',
      'faq.q3': 'Hogyan tudok fizetni?', 'faq.a3': 'Készpénzzel, a munka elvégzése után, a helyszínen.',
      'faq.q4': 'Muszáj hozzám jönnöd, vagy megoldható távolról is?', 'faq.a4': 'Sok szoftveres probléma távolról is megoldható, kiszállás nélkül — ez olcsóbb is neked.',

      'cta.heading': 'Írj — megnézzük, mi a baj',
      'cta.sub': 'Nem kell hozzá szakzsargon — csak mondd el, mit tapasztalsz, és onnantól én intézem a többit.',

      'footer.desc': 'Számítógépes és hálózati segítség házhoz — Ipolyság (Šahy) és környéke.',
      'footer.copy': '© 2026', 'footer.area': 'Ipolyság (Šahy) és környéke — pl. Horváti, Ipolyhídvég, Zselíz felé is.', 'footer.tags': 'Készpénzes fizetés · 14 nap garancia',
      'skip': 'Ugrás a kapcsolatra'
    },
    sk: {
      'nav.services': 'Služby', 'nav.pricing': 'Ceny', 'nav.why': 'Prečo ja', 'nav.faq': 'Otázky', 'nav.cta': 'Kontakt',
      'hero.kicker': 'Šahy a okolie · Prídem k vám domov',
      'hero.title': 'Ak je počítač pomalý,<br>nič <em>nehádame</em> —<br>zmeriame, kde je problém.',
      'hero.sub': 'Zrozumiteľná IT pomoc s výjazdom. Bez žargónu, bez zbytočnej výmeny — vopred dohodnutá cena.',
      'hero.ctaPrimary': 'Kontaktujte ma', 'hero.ctaGhost': 'Pozrite si, v čom pomôžem',
      'hero.trust1': '14 dní záruka na každú prácu', 'hero.trust2': 'Príchod do 1–2 dní', 'hero.trust3': 'Miestne ceny, nie bratislavské', 'hero.common': 'Väčšina píše kvôli pomalému PC alebo wifi.',
      'hero.logTag': 'Servisný denník',
      'hero.log1': '<b>Pomalé spúšťanie:</b> príčinou bol plný disk, nie vek počítača.',
      'hero.log2': '<b>Horúci notebook:</b> vyčistený chladič, vymenená teplovodivá pasta.',
      'hero.log3': '<b>Vymazané fotky:</b> obnovené — počítač sa včas prestal používať.',
      'hero.log4': '<b>Sekajúci wifi:</b> router premiestnený, odmerané, signál stabilný.',
      'hero.logFoot1': 'Oblasť Šahy', 'hero.logFoot2': 'Každý záznam — reálny prípad',
      'problem1': 'Počítač sa spúšťa minúty, kým je použiteľný', 'problem2': 'Wifi sekáva alebo nedosahuje všade', 'problem3': 'Omylom ste vymazali niečo dôležité', 'problem4': 'Počítač je horúci, hlučný alebo sa sám vypína',
      'svc.eyebrow': 'Služby', 'svc.heading': 'V čom viem pomôcť',
      'svc.sub': 'Pri každej položke nájdete, podľa čoho spoznáte, že práve toto je váš problém — a koľko bude stáť riešenie. Žiadne prekvapenia.',
      'svc.more': 'Ak potrebujete niečo iné, čo tu nie je uvedené — jednoducho napíšte alebo zavolajte, takmer isto pomôžem aj s tým.',
      'cat.a': 'Internet a domáca sieť', 'cat.b': 'Pomalý alebo horúci počítač?', 'cat.c': 'Systém, bezpečnosť, dáta', 'cat.d': 'Ďalšie služby, s ktorými pomôžem', 'cat.e': 'Vzdialený prístup a priebežná podpora',

      'svc1.title': 'Domáci Netflix — filmy na jednom mieste', 'svc1.desc': 'Vlastný, jednoduchý „domáci Netflix“: filmy na jednom mieste, na TV, telefóne aj notebooku — bez mesačného poplatku.', 'svc1.symptom': '<b>Podľa čoho to spoznáte:</b> filmy máte na CD, USB a viacerých PC a stále ich hľadáte.', 'svc1.price': '25–45 €',
      'svc2.title': 'Spoločný priečinok pre rodinu — bez mesačného poplatku', 'svc2.desc': 'Domáce spoločné úložisko: fotky a dokumenty na jednom mieste, každý zo svojho telefónu alebo PC — bez poplatku za cloud.', 'svc2.symptom': '<b>Podľa čoho to spoznáte:</b> rodinné fotky posielate mailom alebo na USB a niekto ich vždy nevie nájsť.', 'svc2.price': '15–35 €',
      'svc3.title': 'Oprava pomalého alebo sekajúceho wifi', 'svc3.desc': 'Zmeriam silu signálu v byte a na základe toho poviem skutočnú príčinu — nič nehádam.', 'svc3.symptom': '<b>Podľa čoho to spoznáte:</b> v jednej izbe je internet v poriadku, v druhej sa sotva čo načíta.', 'svc3.price': '12–25 €',
      'svc4.title': 'Kamera domov — pozreteľná z telefónu', 'svc4.desc': 'Nastavím kameru tak, aby ste z telefónu videli, čo sa deje doma alebo na pozemku — bezpečne, nie s továrenskými slabými nastaveniami.', 'svc4.symptom': '<b>Podľa čoho to spoznáte:</b> chcete vedieť, čo sa deje doma alebo na záhrade, keď tam nie ste.', 'svc4.price': '25–45 € práca', 'svc4.badge': 'IP kamera',
      'svc5.title': 'Prečo je počítač pomalý? — Rýchla diagnostika', 'svc5.desc': 'Zmeriam, čo spôsobuje spomalenie, a úprimne poviem, či sa oplatí do toho investovať.', 'svc5.symptom': '<b>Podľa čoho to spoznáte:</b> po zapnutí trvá minúty, kým je počítač použiteľný, alebo sa neustále točí koliesko načítavania.', 'svc5.price': '8–12 €',
      'svc6.title': 'Zrýchlenie výmenou za SSD', 'svc6.desc': 'Namiesto pomalého disku dám SSD. Programy a súbory ostanú — štart a otváranie budú citeľne rýchlejšie.', 'svc6.symptom': '<b>Podľa čoho to spoznáte:</b> počítač minúty štartuje alebo otvára programy — kedysi to tak nebolo.', 'svc6.price': '20–30 € práca',
      'svc7.title': 'Odprášenie, ak je PC horúci alebo hlučný', 'svc7.desc': 'Vyčistím prach z chladenia a dám chladenie do poriadku. Menej hluku, nižšia teplota — merateľne.', 'svc7.symptom': '<b>Podľa čoho to spoznáte:</b> PC hlasno hučí už pri bežnom prehliadaní, alebo sa sám vypína od prehriatia.', 'svc7.price': '15–25 €',
      'svc8.title': 'Čistenie klávesnice a obrazovky', 'svc8.desc': 'Rýchle, dôkladné čistenie pre pohodlnejšie a hygienickejšie každodenné používanie.', 'svc8.symptom': '<b>Podľa čoho to spoznáte:</b> klávesnica lepí, sú v nej omrvinky, na obrazovke sú odtlačky prstov.', 'svc8.price': '8–12 €',
      'svc9.title': 'Inštalácia / preinštalácia Windows', 'svc9.desc': 'Čistá inštalácia systému: stabilný, prehľadný, s programami, ktoré potrebujete. Nie továrenský stav plný zbytočností.', 'svc9.symptom': '<b>Podľa čoho to spoznáte:</b> systém je pomalý, plný zbytočných programov, alebo starý PC chcete znova používať.', 'svc9.price': '25–50 €',
      'svc10.title': 'Odstránenie vírusov', 'svc10.desc': 'Kontrola viacerými nástrojmi naraz — nie len jedna rýchla kontrola.', 'svc10.symptom': '<b>Podľa čoho to spoznáte:</b> vyskakujú čudné reklamné okná, alebo sa vám sama zmenila domovská stránka v prehliadači.', 'svc10.price': '15–25 €',
      'svc11.title': 'Porriadok v heslách', 'svc11.desc': 'Pomôžem, aby ste nemali všade rovnaké heslo, a banka / e-mail dostali silnejšiu ochranu.', 'svc11.symptom': '<b>Podľa čoho to spoznáte:</b> všade rovnaké heslo, alebo si nepamätáte, kedy ste ho naposledy menili.', 'svc11.price': '10–15 €',
      'svc12.title': 'Obnovenie vymazaných súborov', 'svc12.desc': 'Čím skôr zavoláte, tým väčšia šanca — práve to rozhoduje medzi úspešnou obnovou a navždy stratenými dátami.', 'svc12.symptom': '<b>Podľa čoho to spoznáte:</b> omylom ste vymazali priečinok, alebo ste naformátovali USB kľúč pred zálohovaním.', 'svc12.price': '15–35 €',
      'svc13.title': 'Automatické zálohovanie', 'svc13.desc': 'Nastavíme raz, potom to beží samo — s otestovaním, že to naozaj funguje.', 'svc13.symptom': '<b>Podľa čoho to spoznáte:</b> ak by sa vám počítač teraz pokazil, prišli by ste o všetky dôležité súbory.', 'svc13.price': '12–25 €',
      'svc14.title': 'Uvedenie tlačiarne do prevádzky', 'svc14.desc': 'Často nie je na vine samotná tlačiareň, ale zastaraný ovládač.', 'svc14.symptom': '<b>Podľa čoho to spoznáte:</b> nová tlačiareň sa nepripája, alebo tá stará zrazu odmieta tlačiť.', 'svc14.price': '8–15 €',
      'svc15.title': 'Nastavenie a upratanie e-mailu', 'svc15.desc': 'Zmena účtu, presun starých správ, filtrovanie spamu.', 'svc15.symptom': '<b>Podľa čoho to spoznáte:</b> nazbieralo sa toľko zbytočných správ, že nenájdete tie dôležité.', 'svc15.price': '10–20 €',
      'svc16.title': 'Digitalizácia starých fotografií', 'svc16.desc': 'Bezpečný prevod papierových fotiek, CD a kariet do digitálnej podoby, kým sa nepokazia.', 'svc16.symptom': '<b>Podľa čoho to spoznáte:</b> doma máte škatuľu starých fotiek alebo zásuvku CD, ktoré ste roky nevideli.', 'svc16.price': '20–40 €',
      'svc17.title': 'Nový počítač so starými dátami', 'svc17.desc': 'Nový počítač pripravím na používanie: súbory, dôležité programy, e-mail — prídu zo starého, netreba od nuly.', 'svc17.symptom': '<b>Podľa čoho to spoznáte:</b> nový PC už máte, ale neviete, ako preniesť staré veci.', 'svc17.price': '25–40 €',
      'svc18.title': 'Pomoc na diaľku, bez návštevy', 'svc18.desc': 'Veľa softvérových problémov sa dá vyriešiť na diaľku, s vaším súhlasom — je to pre vás aj lacnejšie.', 'svc18.symptom': '<b>Podľa čoho to spoznáte:</b> treba opraviť menšie nastavenie a nechcete kvôli tomu čakať na návštevu.', 'svc18.price': '12–25 €',
      'svc19.title': 'Mesačná / štvrťročná údržba', 'svc19.desc': 'Pravidelná kontrola: aktualizácie, základný poriadok, krátka prehliadka — aby sa problém neukázal, až keď PC nejde.', 'svc19.symptom': '<b>Podľa čoho to spoznáte:</b> radšej predídete problémom, než volať, keď už nič nejde.', 'svc19.price': '10–15 €/mes.',

      'price.eyebrow': 'Cenník', 'price.heading': 'Prehľadné ceny, žiadne prekvapenia',
      'price.sub': 'Orientáčné ceny — finálnu sumu vždy dohodneme pred prácou. Žiadne skryté poplatky.',
      'price.why': 'Hodinová sadzba platí len vtedy, keď poruchu vopred nevidno (napr. „pomalý počítač“, zmiešané príznaky). Predvídateľné práce (wifi, inštalácia, tlačiareň) majú pevnú cenu v zozname služieb.',
      'price.th1': 'Položka', 'price.th2': 'Cena',
      'price.r1': 'Hodinová sadzba — ak poruchu vopred nevidno', 'price.r1v': 'od 10 € (typicky 10–15 €/hod.)', 'price.r2': 'Kontrola — započíta sa do opravy', 'price.r2v': '8–12 €',
      'price.r3': 'Výjazd v rámci Šiah', 'price.r3v': 'zdarma',
      'price.r4': 'Výjazd do okolitých obcí', 'price.r4v': '0,30 €/km',
      'price.r5': 'Väčší balík (napr. kompletná obnova)', 'price.r5v': 'od 35–55 €', 'price.r6': 'Pomoc na diaľku (minimum)', 'price.r6v': '10 €',
      'price.note': 'Hotovosť po práci na mieste. Výjazd: minimum 1 hodina. Na diaľku: minimum 10 €. Miestne ceny — nie bratislavský servis. Ak po kontrole chcete opravu, kontrolu započítam.',
      'page.title': 'Počítačová pomoc s výjazdom — Šahy a okolie',
      'page.desc': 'Rýchla, zrozumiteľná IT pomoc v Šahách a okolí. Pomalý počítač, wifi problémy, obnova dát, kamerový systém — prídem k vám.',
      'how.eyebrow': 'Ako pracujem', 'how.heading': 'Tri kroky, žiadne prekvapenia',
      'how.sub': 'Vopred dohodnutá cena, zrozumiteľné vysvetlenie a len to, čo naozaj potrebujete.',
      'how.s1t': 'Napíšete alebo zavoláte', 'how.s1d': 'Opíšete, čo pozorujete — odborný žargón netreba.',
      'how.s2t': 'Zmeriam problém', 'how.s2d': 'Na mieste alebo na diaľku: najprv skutočná príčina, až potom riešenie.',
      'how.s3t': 'Oprava za vopred dohodnutú cenu', 'how.s3d': 'Ak súhlasíte, opravím to. 14 dní záruka na každú prácu.',
      't.eyebrow': 'Recenzie', 't.heading': 'Čo hovoria zákazníci',
      't.q1': '„Wifi v zadnej izbe sotva išlo. Premiestnil router, odmeral — odvtedy stabilné.”',
      't.q2': '„Notebook sa spúšťal minúty. Disk bol plný — nový počítač netrebalo.”',
      't.q3': '„Zrozumiteľne vysvetlil, čo robí. Cenu sme dohodli vopred — žiadne prekvapenie.”',
      't.w1': 'Šahy', 't.w2': 'Šahy', 't.w3': 'Tesmag',
      'cta.ms': 'Messenger',

      'why.eyebrow': 'Prečo zavolať práve mne', 'why.heading': 'Nevnucujem nič, čo nepotrebujete',
      'why.item1': '<b>Zrozumiteľné vysvetlenie</b><span>Bez odborného žargónu sa dozviete, čo bolo v poriadku — nemusíte byť informatik.</span>',
      'why.item2': '<b>Meranie, nie hádanie</b><span>Najprv zmeriam skutočnú príčinu, až potom navrhnem riešenie.</span>',
      'why.item3': '<b>Príchod k vám, alebo na diaľku</b><span>Zvolíme to, čo je pre vás rýchlejšie a lacnejšie.</span>',
      'why.item4': '<b>Miestne, regionálne ceny</b><span>Nie ceny bratislavských servisov — prispôsobené Šahám a okoliu.</span>',

      'guarantee.heading': '14 dní záruka', 'guarantee.text': 'Na každú vykonanú prácu poskytujem záruku. Ak sa rovnaká chyba vráti, opravím ju bezplatne.',
      'guarantee.stat1': 'doba výjazdu', 'guarantee.stat2': 'záruka', 'guarantee.stat3': 'výjazd na mieste',

      'faq.eyebrow': 'FAQ', 'faq.heading': 'Časté otázky',
      'faq.q1': 'Za ako dlho prídete?', 'faq.a1': 'V Šahách a okolitých obciach zvyčajne do 1–2 dní, v naliehavom prípade aj v ten istý deň.',
      'faq.q2': 'Čo mám pripraviť pred vašim príchodom?', 'faq.a2': 'Stačí, aby bol počítač zapnuteľný a dostupný. Heslo si vypýtam len ak je to pre danú prácu nevyhnutné.',
      'faq.q3': 'Ako môžem zaplatiť?', 'faq.a3': 'V hotovosti, po dokončení práce, na mieste.',
      'faq.q4': 'Musíte prísť osobne, alebo sa to dá vyriešiť na diaľku?', 'faq.a4': 'Veľa softvérových problémov sa dá vyriešiť na diaľku, bez výjazdu — je to pre vás aj lacnejšie.',

      'cta.heading': 'Napíšte — pozrieme, v čom je problém',
      'cta.sub': 'Nepotrebujete odborný žargón — stačí opísať, čo pozorujete, a o zvyšok sa postarám ja.',

      'footer.desc': 'Počítačová a sieťová pomoc s výjazdom — Šahy a okolie.',
      'footer.copy': '© 2026', 'footer.area': 'Šahy a okolie — napr. aj smerom na Horváty, Ipeľské Predmostie, Želiezovce.', 'footer.tags': 'Platba v hotovosti · 14 dní záruka',
      'skip': 'Prejsť na kontakt'
    }
  },

  getSavedLang() {
    try {
      const saved = localStorage.getItem('site-lang');
      if (saved === 'hu' || saved === 'sk') return saved;
    } catch (e) {}
    return 'hu';
  },

  setLang(lang) {
    if (this.i18n[lang]) {
      this.currentLang = lang;
      try {
        localStorage.setItem('site-lang', lang);
      } catch (e) {}
    }
  }
};
