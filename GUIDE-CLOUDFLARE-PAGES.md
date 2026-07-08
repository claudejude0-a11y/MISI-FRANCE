# Mise en ligne de misifrance.com sur Cloudflare Pages

Solution retenue : **hébergement gratuit, bande passante illimitée, usage commercial autorisé.**
Coût total : le nom de domaine uniquement (~10 $/an chez Cloudflare Registrar).

> Solution de secours (OVH mutualisé) : voir `GUIDE-MISE-EN-LIGNE-OVH.md`.
> Le `.htaccess` correspondant est conservé dans `deploy/ovh/.htaccess` — il doit
> être copié à la racine de `www/` **manuellement** en cas de bascule sur OVH
> (il n'est plus dans `public/`, pour éviter qu'il soit publié sur Cloudflare).

---

## Ce qui est déjà fait dans le dépôt

| Fichier | Rôle |
|---|---|
| `public/_headers` | Cache long sur `/_next/static/*`, cache moyen sur images, en-têtes de sécurité |
| `.node-version` | Fige Node 22.16.0 pour le build Cloudflare |
| `next.config.ts` | `output: "export"` → 100 % statique, aucun serveur requis |

Vérifié en local avec l'émulateur Cloudflare (`npx wrangler pages dev out`) :

- `/`, `/contact`, `/prestations/extincteurs`, `/zones/yonne-89` → **200**
- `/contact.html` → **308** vers `/contact` (URLs propres natives)
- `/page-inexistante` → **404** avec la page 404 personnalisée
- `/_next/static/*.css` → `Cache-Control: public, max-age=31536000, immutable`
- `/images/*` → `Cache-Control: public, max-age=604800`
- En-têtes de sécurité présents sur toutes les pages HTML

**Aucune règle de réécriture n'est nécessaire** : contrairement à Apache, Cloudflare
Pages sert nativement `/contact` depuis `contact.html` et détecte `404.html` tout seul.

---

## Étape 1 — Pousser le code sur GitHub ✅ fait le 2026-07-08

Dépôt : `https://github.com/claudejude0-a11y/MISI-FRANCE.git`, branche `main`.

Cloudflare build **depuis GitHub** : ce qui n'est pas poussé n'est pas en ligne.
Le déploiement se déclenche à chaque `git push origin main`.

```bash
cd ~/misi-website-next
git add -A
git commit -m "..."
git push origin main
```

Le dépôt ne contient **qu'un seul lockfile** (`package-lock.json`). `yarn.lock` a été
supprimé volontairement : Cloudflare le détecte **avant** `package-lock.json` et
builderait avec yarn, alors que le projet est développé avec npm. Un futur
`npm install <dep>` n'aurait mis à jour que `package-lock.json` → build CI silencieusement
décalé du local. **Ne pas réintroduire `yarn.lock`.**

> Si `git push` échoue sur `Invalid username or token` : Git Credential Manager tient
> un identifiant périmé. Purger puis repousser (une fenêtre de connexion s'ouvre) :
> ```bash
> printf "protocol=https\nhost=github.com\n\n" | git credential reject
> git push origin main
> ```

---

## Étape 2 — Créer le projet Cloudflare Pages

1. <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** →
   **Importer un dépôt Git existant**
2. **Se connecter à GitHub** → installation de la GitHub App *Cloudflare Workers and Pages*
   - choisir **« Seuls les dépôts sélectionnés »** → cocher **MISI-FRANCE** uniquement
     (moindre privilège ; « Tous les dépôts » couvrirait aussi vos dépôts futurs)
   - ⚠️ **Permissions réellement demandées** — plus larges qu'un simple accès en lecture,
     et **non modifiables** :
     - *Lecture* sur les métadonnées
     - **Lecture et écriture** sur : administration, contrôles (checks), **code**,
       déploiements, demandes de fusion

     L'écriture sert aux *checks*, aux *deployment statuses* et aux commentaires de PR.
     Révocable à tout moment : GitHub → *Settings* → *Applications* →
     *Cloudflare Workers and Pages* → *Revoke*.
   - GitHub bascule ensuite en **sudo mode** : il envoie un code par e-mail à saisir
     avant de finaliser l'installation. Étape manuelle, incontournable.
3. Choisir le dépôt **MISI-FRANCE**, branche **`main`**
4. Paramètres de build :

   | Champ | Valeur |
   |---|---|
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | *(vide)* |

5. **Save and Deploy**

Le site est en ligne sur `<nom-du-projet>.pages.dev` en ~2 minutes.
Chaque `git push` sur `main` redéploie automatiquement.

> Si le build échoue sur `Failed to fetch Google Fonts` (Archivo / JetBrains Mono /
> Onest) : c'est transitoire, relancer le déploiement. Ce n'est pas une erreur de code.

> **Si vous refusez d'accorder l'écriture à Cloudflare sur le dépôt**, la Git integration
> est impossible. Alternative : `wrangler login` puis `npx wrangler pages deploy out`
> (Direct Upload). Cloudflare n'obtient aucun accès GitHub, mais il n'y a plus de
> redéploiement automatique — et un projet Direct Upload **ne peut pas** être reconverti
> en projet Git ensuite.

---

## Étape 3 — Brancher le domaine

### 3a. Mettre le domaine sur le DNS Cloudflare

Deux options selon où se trouve `misifrance.com` :

- **Domaine chez OVH** (situation après le transfert en cours) :
  Cloudflare → **Add a site** → `misifrance.com` → plan **Free** → Cloudflare donne
  deux nameservers → les renseigner chez OVH (*Espace client → Domaine → Serveurs DNS*).
  Propagation : quelques heures.

- **Domaine transféré chez Cloudflare Registrar** (le moins cher à terme, ~10,46 $/an
  bloqué à vie) : possible seulement **60 jours après** le transfert vers OVH
  (verrouillage ICANN). Le DNS est alors déjà chez Cloudflare.

### 3b. Attacher le domaine au projet Pages

Projet Pages → **Custom domains** → **Set up a custom domain** :

- ajouter `www.misifrance.com`  ← **le domaine canonique du site**
- ajouter `misifrance.com` (apex)

Le certificat SSL est émis automatiquement, gratuitement.

### 3c. Rediriger l'apex vers www — **obligatoire**

Tout le site (canonical, sitemap, Open Graph) est bâti sur `https://www.misifrance.com`.
Sans redirection, `misifrance.com` et `www.misifrance.com` servent le même contenu →
contenu dupliqué et dilution SEO.

⚠️ **Le fichier `_redirects` de Cloudflare Pages ne sait PAS faire de redirection au
niveau du domaine.** Il faut une *Redirect Rule* :

Dashboard → domaine `misifrance.com` → **Rules** → **Redirect Rules** → **Create rule**

| Champ | Valeur |
|---|---|
| Nom | `apex vers www` |
| When incoming requests match | *Custom filter expression* |
| Field / Operator / Value | `Hostname` · `equals` · `misifrance.com` |
| Type | `Dynamic` |
| Expression | `concat("https://www.misifrance.com", http.request.uri.path)` |
| Status code | `301` |
| Preserve query string | ✅ |

### 3d. Forcer HTTPS

Dashboard → **SSL/TLS** → **Edge Certificates** → activer **Always Use HTTPS**.
(Remplace la règle n°1 de l'ancien `.htaccess`.)

---

## Étape 4 — Empêcher l'indexation de `*.pages.dev`

Le sous-domaine `<nom-du-projet>.pages.dev` (nom exact affiché par Cloudflare à la création
du projet) reste accessible publiquement et Google peut l'indexer, ce qui créerait du
contenu dupliqué face à `www.misifrance.com`.

Créer une seconde *Redirect Rule* (ou une Bulk Redirect) :
`Hostname` `equals` `<nom-du-projet>.pages.dev` → 301 vers `https://www.misifrance.com`
+ chemin.

---

## Étape 5 — Email et formulaires

- **Formulaires** (`ContactForm.tsx`, `DevisForm.tsx`) : ils postent vers
  **FormSubmit.co → `direction@misifrance.com`**. Aucun backend, donc **rien à changer**,
  ça fonctionne identiquement sur Cloudflare. Il faut toujours :
  1. que la boîte `direction@misifrance.com` existe ;
  2. cliquer une fois sur l'email d'activation FormSubmit.

- **Recevoir `direction@misifrance.com`** sans hébergement OVH :
  Dashboard → **Email** → **Email Routing** → rediriger vers une adresse Gmail.
  Gratuit. Pour *envoyer* depuis cette adresse : Gmail → *Paramètres → Comptes →
  Envoyer des e-mails en tant que*.

---

## Étape 6 — Après la mise en ligne

- [ ] Vérifier que `https://misifrance.com` redirige bien en 301 vers `https://www.misifrance.com`
- [ ] Vérifier `https://www.misifrance.com/sitemap.xml` et `/robots.txt`
- [ ] Google Search Console : ajouter la propriété, soumettre le sitemap
- [ ] Tester un envoi de formulaire de bout en bout
- [ ] ⚠️ **`src/lib/site.ts`** : le bloc `business` (téléphone + adresse) contient encore
      des **valeurs marquées « à vérifier avant mise en ligne »**. Elles alimentent le
      JSON-LD `LocalBusiness` des 7 pages zones. À corriger avant de soumettre le sitemap.
- [ ] `src/lib/clients-data.ts` : orthographe des 4 clients à confirmer

---

## Limites du plan gratuit (et ce que ça change pour ce site)

| Limite Cloudflare Pages | Site MISI aujourd'hui | Marge |
|---|---|---|
| 20 000 fichiers | **294** | ×68 |
| 25 Mio par fichier | 17 Mo au total | large |
| 500 builds / mois | quelques-uns | large |
| 1 build simultané, 20 min max | build en ~15 s | large |
| Bande passante | **illimitée** | — |
| Usage commercial | **autorisé** | — |

Le site n'atteindra aucun plafond. Le plan Pro (5 $/mois) ne serait utile que
pour dépasser 500 builds mensuels.
