# Időpontfoglalás bekötése

Ez az ág a szerviz-alkalmazás foglalási oldalára mutató linkeket tartalmazza.
**Addig ne kerüljön a `main`-re, amíg a foglalási oldal nincs kint az
interneten** – a GitHub Pages azonnal élesíti, és a látogatók törött lapra
érkeznének.

## 1. A cím beírása

A linkek helyőrzőt tartalmaznak: `https://FOGLALAS-CIM-IDE`. Cseréld ki a
valódi címre (a szervizhez tartozó tunnel- vagy domain-cím, HTTPS-sel):

```bash
grep -rl 'FOGLALAS-CIM-IDE' . | xargs sed -i '' 's|https://FOGLALAS-CIM-IDE|https://a-te-cimed.sk|g'
```

Ellenőrzés – ennek üresen kell maradnia:

```bash
grep -rn 'FOGLALAS-CIM-IDE' .
```

## 2. Élesítés

```bash
git checkout main && git merge foglalas && git push
```

## Mi változott

| Fájl | Változás |
|---|---|
| `index.html` | fejléc gomb „Kapcsolatfelvétel" → „Időpontfoglalás" (a foglalási oldalra); foglalás gomb a `#foglalas` sávba; egy sor az árak alá |
| `sk/index.html` | ugyanez szlovákul, `?lang=sk` paraméterrel |
| `style.css` | a hívás ikon minden méretben látszik és másodlagos lett; a foglalás gomb telefonon sem tűnik el |
| `style.min.css` | ugyanaz minifikálva (az oldal ezt tölti be) |

## Amihez NEM nyúltunk

- **A CSP változatlan.** A foglalás sima link, nem iframe és nem `fetch`,
  ezért sem a `frame-src`, sem a `connect-src` nem kellett lazítani.
- **Nincs új JavaScript**, tehát a `script-src` `sha256` hash-e érvényes marad.
- A telefon, a Messenger és az e-mail mindenhol a helyén maradt – ha a
  foglalás épp nem elérhető, a látogatónak marad hova nyúlnia.
