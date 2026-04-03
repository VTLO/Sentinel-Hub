# Sentinel-Hub

## Présentation du Projet

**Sentinel-Hub** est une plateforme de surveillance de sécurité centralisée, conçue pour offrir une visibilité complète sur les menaces et les vulnérabilités d'un écosystème numérique. Inspiré par les meilleures pratiques de développement monorepo, ce projet intègre des technologies de pointe pour garantir performance, scalabilité et maintenabilité.

Le projet se distingue par son architecture hybride, combinant la robustesse de **TypeScript** pour l'orchestration et l'interface utilisateur avec la puissance analytique de **Python** pour le traitement des données de sécurité.

## Architecture du Système

Le tableau ci-dessous détaille les principaux composants du système et leurs rôles respectifs :

| Composant           | Type          | Technologies          | Rôle Principal                                                               |
| :------------------ | :------------ | :-------------------- | :--------------------------------------------------------------------------- |
| **Web Dashboard**   | Frontend      | React, Vite, Tailwind | Interface utilisateur pour la visualisation des alertes et la configuration. |
| **API Gateway**     | Backend       | Node.js, Fastify, Zod | Point d'entrée centralisé gérant l'authentification et la logique métier.    |
| **Analysis Engine** | Microservice  | Python, FastAPI       | Moteur d'analyse asynchrone pour la détection de menaces et le scan.         |
| **Core Libs**       | Bibliothèques | TypeScript            | Partage de types, schémas de validation et clients API entre services.       |

## Structure du Monorepo

L'organisation du code suit une structure modulaire stricte pour faciliter le développement parallèle :

> "Une séparation claire entre les applications exécutables et les bibliothèques partagées est essentielle pour maintenir la cohérence d'un système complexe à long terme."

- **`/artifacts`** : Contient les applications déployables (Dashboard, API, Engine).
- **`/lib`** : Regroupe le code partagé, notamment les schémas de données et les clients de communication.
- **`/docs`** : Documentation technique détaillée et guides de contribution.

## Installation et Démarrage

Pour commencer à travailler sur le projet, assurez-vous d'avoir installé `pnpm` et `python 3.11+`.

1. **Installation des dépendances Node.js** :

   ```bash
   pnpm install
   ```

2. **Configuration de l'environnement Python** :

   ```bash
   cd artifacts/analysis-engine
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Lancement en mode développement** :
   ```bash
   pnpm run dev
   ```

## Contribution

Les contributions sont les bienvenues. Veuillez consulter le fichier `docs/SETUP_COMPLETE.md` pour les directives de style et les processus de test avant de soumettre une Pull Request.
