# Configurator tablouri electrice — V1

Prima versiune funcțională a configuratorului de tablouri electrice caznice.

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
2. Încarcă toate fișierele acestui proiect, păstrând structura folderelor.
3. În GitHub: Settings → Pages → Source: GitHub Actions.
4. Push pe branch-ul `main`.
5. Site-ul va fi disponibil la `https://<utilizator>.github.io/configurator-tablouri-v1/`.

## Limitări V1

- Autentificarea este dezactivată temporar.
- Nu există încă PDF, stoc în timp real, admin sau Supabase.
- Catalogul este demo, cu produse fictive.
- Verificările I7 sunt orientative.
