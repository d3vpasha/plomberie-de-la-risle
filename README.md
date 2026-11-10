# Plomberie de la Risle – site vitrine

Site vitrine de **Plomberie de la Risle** (Stéphane Besombes, entrepreneur individuel), plombier à Pont-Audemer (Eure) : débouchage, fuite d'eau, sanitaire, salle de bains et chauffe-eau, dans un rayon de 30 km.

HTML / CSS / JS natifs : zéro build, zéro dépendance. Seule requête externe : la carte OpenStreetMap.

## Arborescence

```
index.html                    page unique (sprite d'icônes inline, JSON-LD Plumber)
assets/css/styles.css         styles, variables de couleur dans :root + mode sombre
assets/js/main.js             menu mobile, apparition au défilement, année du footer, formulaire -> mailto
assets/img/logo.svg           logo horizontal couleur (plaque ovale R + wordmark)
assets/img/logo-mono-blanc.svg  logo blanc (footer et mode sombre)
assets/img/favicon.svg        monogramme R carré
robots.txt, sitemap.xml       SEO
```

## En local

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Production

https://plomberie-de-la-risle.vercel.app

## TODO

- Assurance décennale : nom de l'assureur et numéro de contrat (plaque du hero).
- Liens des pages Facebook et Instagram « Plomberie de la Risle » (section contact).
- Photos de chantiers réels.
- Nom de domaine et adresse mail pro.

## Versions

| Version | Date | Direction visuelle |
|---|---|---|
| v1 | 2026-11-10 | Ambiance rétro plaque émaillée ; bleu de Prusse + vermillon sur crème, filets laiton ; hero clair en split asymétrique : titre serif géant en capitales à gauche, plaque émaillée étroite à droite (devis, rayon, astreinte, téléphone) ; chiffres officiels intégrés au hero en ligne de registre monospace ; prestations en grille masonry de cartes à double filet ; parcours en frise verticale ; angles vifs, doubles filets, sans ombre ; titres `ui-serif` en capitales espacées, chiffres `ui-monospace` ; logo plaque ovale à R empattée sur vague de la Risle + wordmark à empattements dessinés |
