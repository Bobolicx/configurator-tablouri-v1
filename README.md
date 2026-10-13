# Configurator tablouri electrice — V1

Prima versiune funcțională a configuratorului de tablouri electrice caznice.

## Funcționalități V1

- Configurator în 4 pași, fără autentificare obligatorie la început.
- Bransament monofazic/trifazic și putere instalată.
- Catalog demo de tablouri și aparate.
- Alegere tablou încastrabil/aplicat.
- Plasare aparate pe rânduri DIN, cu controlul modulelor ocupate.
- Mutare și ștergere aparate.
- Denumire circuite.
- Rezumat tehnic fără prețuri.
- Verificări orientative I7.
- Salvare locală în browser.
- Pregătit pentru autentificare și PDF la pasul 4.

## Rulare locală

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicare GitHub Pages

1. Creează repository-ul `configurator-tablouri-v1`.
2. Încarcă fișierele acestui proiect.
3. În GitHub: Settings → Pages → Source: GitHub Actions.
4. Push pe branch-ul `main`.
5. Site-ul va fi disponibil la: `https://<utilizator>.github.io/configurator-tablouri-v1/`.

## Limitări V1

- Autentificarea este dezactivată temporar.
- Nu există încă PDF, stoc în timp real, admin sau Supabase.
- Catalogul este demo, cu produse fictive.
- Verificările I7 sunt orientative și nu înlocuiesc proiectarea/verificarea de către personal autorizat.
