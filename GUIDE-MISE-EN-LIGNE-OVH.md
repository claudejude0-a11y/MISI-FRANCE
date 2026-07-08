# 🚀 Guide de mise en ligne OVH — Site MISI France

> Aide-mémoire à suivre le jour du déploiement. Coche chaque case au fur et à mesure.
> Le dossier à téléverser est **`out/`** (regénéré par `npm run build`).

---

## ⚠️ À vérifier AVANT de mettre en ligne

- [ ] Confirmer/compléter les infos entreprise dans `src/lib/site.ts` (bloc `business`) :
      **téléphone public** et **adresse exacte** à publier. Puis relancer `npm run build`.
- [ ] Si un **nouveau domaine** (≠ misifrance.com) est utilisé : éditer `.env`
      (`NEXT_PUBLIC_SITE_URL`) + remplacer `direction@misifrance.com` dans
      `src/components/contact/ContactForm.tsx` et `src/components/home/DevisForm.tsx`,
      puis `npm run build`.

## 1. Reconstruire le site (si des modifs ont été faites)

```
npm run build
```
→ Régénère `out/` (le `.htaccess` est recopié automatiquement depuis `public/`).

## 2. Commander l'hébergement OVH

- [ ] ovhcloud.com → Hébergement web → **Perso** (~4 €/mois ; suffisant, site statique).
- [ ] Domaine offert 1 an si nouveau domaine ; sinon garder misifrance.com.
- [ ] Payer, attendre l'e-mail d'activation (identifiants FTP + nom du serveur).

## 3. Accéder à l'hébergement

- [ ] Espace client OVH → **Web Cloud** → **Hébergements** → votre hébergement.
- [ ] Onglet **FTP-SSH** : noter serveur (`ftp.clusterXXX...`), identifiant, mot de passe.

## 4. Téléverser le site (FileZilla)

- [ ] Installer **FileZilla Client** (filezilla-project.org).
- [ ] Se connecter : Hôte = serveur FTP, Identifiant, Mot de passe, Port **21**.
- [ ] Panneau droit : entrer dans le dossier **`www`**.
- [ ] Supprimer l'`index.html` de démonstration OVH s'il existe.
- [ ] Panneau gauche : `C:\Users\marie\misi-website-next\out`.
- [ ] Glisser **tout le CONTENU de `out/`** (dont le `.htaccess`) → dans `www/`.
      *(Menu Serveur → Forcer l'affichage des fichiers cachés, pour voir le `.htaccess`.)*
- [ ] ❌ Ne jamais envoyer : `node_modules/`, `.next/`, `src/`, `package.json`.
- [ ] Vérifier : aucun transfert échoué.

## 5. Réglages OVH avant publication

- [ ] Onglet **Multisite** → Ajouter le domaine (dossier racine = `www`), **cocher SSL**.
      Ajouter aussi la version sans www.
- [ ] Onglet **SSL** : Let's Encrypt (auto depuis 08/2025 ; sinon « Régénérer »). Attendre ~1 h.
- [ ] Onglet **Emails** : créer la boîte **`direction@misifrance.com`** (reçoit les formulaires).
- [ ] HTTPS + www + URLs propres : ✅ déjà gérés par le `.htaccess`.

## 6. Publier + activer les formulaires

- [ ] Attendre la propagation DNS (quelques min à 24-48 h) et le déploiement SSL.
- [ ] Envoyer **1 message test** via le formulaire → FormSubmit envoie un mail
      d'activation à `direction@misifrance.com` → **cliquer le lien d'activation**.
- [ ] Refaire un test → vérifier la bonne réception.

## 7. Tests de fonctionnement

- [ ] Accueil OK (animations, images, polices).
- [ ] Navigation sans 404 : `/`, `/contact`, `/prestations/extincteurs`, `/prestations/ria`,
      `/zones/yonne-89`, `/zones/auxerre`, `/mentions-legales`.
- [ ] URL bidon → **404 personnalisée**.
- [ ] HTTPS (cadenas) + redirections http→https et non-www→www.
- [ ] Formulaires contact + devis → e-mail reçu.
- [ ] Affichage mobile OK.
- [ ] `/sitemap.xml` et `/robots.txt` accessibles.

---

## 8. Après la mise en ligne — Référencement Google

### Google Search Console
- [ ] search.google.com/search-console → ajouter propriété **Domaine**.
- [ ] Validation par enregistrement **TXT** dans la zone DNS OVH (Web Cloud → Noms de domaine → Zone DNS).
- [ ] Menu **Sitemaps** → saisir `sitemap.xml` → Envoyer.
- [ ] **Inspection d'URL** → demander l'indexation de l'accueil + pages clés (prestations + `/zones/yonne-89`).

### Google Business Profile (levier local n°1)
- [ ] Créer/revendiquer la fiche : business.google.com.
- [ ] **Validation par vidéo** (filmer enseigne + rue + intérieur en un plan).
- [ ] Catégorie : « Entreprise de sécurité incendie ». Zone desservie : Yonne + Île-de-France.
- [ ] **NAP identique** au site (Nom / Adresse / Téléphone).
- [ ] Publier régulièrement + solliciter des **avis clients** (2ᵉ facteur de classement local).

### Suivi continu
- [ ] Annuaires (Pages Jaunes, Bing Places…) avec NAP identique.
- [ ] Liens locaux (partenaires, presse locale, fédérations métier).
- [ ] Suivre Search Console (requêtes, positions, pages indexées) et ajuster.

---

## 📄 Pages locales SEO déjà créées (dans ce projet)

Ciblent « sécurité incendie + lieu ». Générées et incluses au sitemap :

- `/zones/yonne-89` — page pilier département
- `/zones/auxerre`, `/zones/sens`, `/zones/joigny`, `/zones/avallon`, `/zones/migennes`
- `/zones/ile-de-france`

Pour ajouter une ville : éditer `src/lib/zones-data.ts` (ajouter une entrée au tableau `zones`),
puis `npm run build`. Tout le reste (route, sitemap, JSON-LD) est automatique.

**Délais réalistes :** site accessible dans la journée · indexé sous quelques jours/semaines ·
bon positionnement après plusieurs mois de SEO régulier.
