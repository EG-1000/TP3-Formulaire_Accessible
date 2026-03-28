# Autoévaluation

**TP3 - Intégration d'un formulaire accessible**

Compléter cette autoévaluation au fur et à la mesure. Seul les critères HTML devraient être complétés pour la remise d'étape 1.

---

**Barème :**
A = 100 % (tous les sous-critères respectés, réussite complète)
B = 85 % (presque tous les critères respectés)
C = 75 % (quelques lacunes)
D = 65 % (atteinte minimale du critère)
E = 55 % (lacunes majeures)

---

## Critères

### HTML (5 points)

- [x] **Balises structurelles et sémantiques** — Page avec `header`, `main`, `footer`. Bon choix du type d'input (ex. `type="email"` pour le courriel).
- [x] **Code HTML valide** — Capture d'écran avant/après ou juste après validation pour prouver qu'il n'y a aucune erreur (les avertissements ne comptent pas).
- [x] **Regroupements et étiquetage** — `fieldset` pour grouper, `legend` pour étiqueter. `label` relié au `input` par `for`/`id`. Images avec `alt` documenté.
- [x] **Contraintes de saisie** — Utilisation de `required`, `pattern` et `title`.
- [x] **Conteneurs de validation** — Prévoir des balises `p.erreur` pour recevoir les messages d'erreur ou d'encouragement de la validation JavaScript. Ces balises doivent avoir un parent ou ancêtre commun (avec la classe `.ctnValidation`) avec l'élément ou les éléments de formulaire à valider.

Exemple pour le cas d'un seul élément :

```html
<div class="champ ctnValidation">
  <div class="champ__conteneur">
    <label class="champ__etiquette" for="adresse">Adresse</label>
    <input
      class="champ--adresse"
      id="adresse"
      name="adresse"
      type="text"
      required
    />
  </div>
  <p class="champ__erreur erreur"></p>
</div>
```

#### Ma note d'autoévaluation pour le critère HTML : Z

### CSS (6 points)

- [x] **Mobile first** — Règles pour l'écran étroit écrites en premier ; requêtes média imbriquées pour obtenir tout de suite après dans la CSS les variantes pour l'écran large.
- [x] **Styles de base** — Champs de saisie alignés. La variante pour l'écran large doit être enrichie par rapport à la version de l'écran étroit.
- [x] **Variables CSS** — Au moins deux variables CSS utilisées pour les couleurs.
- [x] **Documentation** — Commentaires dans la CSS et table des matières maintenue en tête de fichier.
- [x] **Interactivité** — Lorsqu'un élément de formulaire reçoit le focus, son apparence doit changer pour le mettre en évidence. Le bouton de soumission et les hyperliens doivent avoir des états survol.
- [x] **Boutons radio** — Boutons radio visuellement cachés mais accessibles. Ce sont leurs étiquettes qui affichent les états normal, focus, hover et checked.

#### Ma note d'autoévaluation pour le critère CSS : Z

### Accessibilité (4 points)

- [x] **Navigation au clavier** — Tab parcourt le formulaire dans le bon ordre. Enter soumet le formulaire.
- [x] **Lien « Allez au contenu »** — Lien tout de suite après l'ouverture du `body`, permettant d'aller directement au contenu principal. Classes `screen-reader-only` et `focusable`.
- [x] **Régions (landmarks)** — Utiliser les éléments HTML appropriés (`header`, `main`, `footer`) ou, si ce n'est pas possible, leur attribuer les rôles ARIA correspondants (`banner`, `main`, `contentinfo`).
- [x] **Contraste des couleurs** — Changez les couleurs de bases fournies dans la maquettes pour des couleurs personnalisées et ajoutez, en commentaire de la feuille de styles, le niveau de contraste entre les couleurs utilisées et les tests réussis avec l'outil [TPGi Color Contrast Checker](https://www.tpgi.com/color-contrast-checker/).

#### Ma note d'autoévaluation pour le critère Accessibilité : Z

### JavaScript (sera évalué dans le cours de programmation)

- [x] Vérifier que les champs de saisie ne sont pas vides ; afficher un message d'erreur
- [x] Vérifier que les données sont conformes au type attendu ; afficher un message d'erreur

#### Ma note d'autoévaluation pour le critère JavaScript : Z

---

**TOTAL**
X sur 15

---

## Ajoutez vos commentaires sur le projet. Comment ça s'est passé? Quels aspects avez-vous trouvé facile ou difficile?

## Ma note d'autoévaluation pour le projet entier : Z