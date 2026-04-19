# Leo's Dough

## Deploy

```bash
npm run deploy
```

Pushes `_site/` to the `gh-pages` branch. First-time setup: in **Settings → Pages**, set source to branch `gh-pages`, folder `/ (root)`.

## Add a menu item

1. Drop a PNG with a transparent background into `assets/images/menu/` (kebab-case, 512×512, ≤ 100 KB).
2. Append an entry to `_data/menu.yml`:
   ```yaml
   - name:
       ru: Название
       en: Name
     desc:
       ru: Краткое описание
       en: Short description
     price: 12       # or 12.50
     image: /assets/images/menu/<slug>.png
   ```
3. Rebuild: `npm run dev` picks it up automatically.
