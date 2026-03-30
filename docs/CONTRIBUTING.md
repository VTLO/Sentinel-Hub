# Guide de Contribution

Merci de l'intérêt que vous portez à **Sentinel-Hub** ! Ce document définit les règles et processus pour contribuer au projet.

## Processus de Développement

1. **Création d'une branche** : Créez toujours une nouvelle branche à partir de `main` pour vos développements. Utilisez un nom descriptif (ex: `feature/nouvelle-alerte`, `fix/bug-login`).
2. **Développement** : Assurez-vous de respecter les standards de code définis dans le projet.
3. **Tests** : Ajoutez ou mettez à jour les tests correspondants à vos modifications.
4. **Validation locale** : Avant de soumettre, exécutez `pnpm run typecheck` et `pnpm run lint` (si configuré) pour vérifier qu'il n'y a pas d'erreurs.
5. **Pull Request** : Ouvrez une Pull Request (PR) vers la branche `main`. Décrivez clairement les changements apportés.

## Standards de Code

### TypeScript / Node.js / React
- Nous utilisons **Prettier** pour le formatage du code. Assurez-vous que votre éditeur est configuré pour formater lors de la sauvegarde, ou exécutez le script de formatage avant de commiter.
- Le mode strict de TypeScript est activé. Évitez l'utilisation de `any` et typez explicitement vos variables et retours de fonctions.

### Python
- Le code Python doit respecter la norme **PEP 8**.
- Nous utilisons `flake8` dans notre pipeline CI pour vérifier la syntaxe et le style.

## Structure des Commits

Nous recommandons d'utiliser les conventions de **Conventional Commits** :
- `feat:` pour une nouvelle fonctionnalité
- `fix:` pour une correction de bug
- `docs:` pour des modifications de documentation
- `chore:` pour des tâches de maintenance (ex: mise à jour de dépendances)

Exemple : `feat: ajout de la détection des vulnérabilités DNS`

## Intégration Continue (CI)

Toutes les Pull Requests déclenchent automatiquement nos workflows GitHub Actions :
- **Build TypeScript** : Vérifie la compilation et les types de l'ensemble du monorepo.
- **Build Python** : Vérifie la syntaxe et le linting du code Python.

Votre PR ne pourra être fusionnée que si tous les checks CI sont au vert.
