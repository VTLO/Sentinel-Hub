# Guide d'Installation Complet : Sentinel-Hub

Ce document décrit les étapes nécessaires pour configurer l'environnement de développement de Sentinel-Hub.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :
- **Node.js** (version 20 ou supérieure)
- **pnpm** (version 9 ou supérieure)
- **Python** (version 3.11 ou supérieure)
- **Git**

## Étape 1 : Clonage du Dépôt

Commencez par cloner le dépôt sur votre machine locale :

```bash
git clone https://github.com/VTLO/Sentinel-Hub.git
cd Sentinel-Hub
```

## Étape 2 : Configuration de l'Environnement Node.js

Le projet utilise `pnpm workspaces` pour gérer les dépendances des différents paquets (frontend, backend Node.js, et bibliothèques partagées).

1. Installez toutes les dépendances à la racine du projet :
   ```bash
   pnpm install
   ```

2. Vérifiez que la compilation TypeScript fonctionne correctement :
   ```bash
   pnpm run typecheck
   ```

## Étape 3 : Configuration de l'Environnement Python

Le moteur d'analyse (`analysis-engine`) est développé en Python. Il est recommandé d'utiliser un environnement virtuel.

1. Naviguez vers le répertoire du moteur d'analyse :
   ```bash
   cd artifacts/analysis-engine
   ```

2. Créez et activez un environnement virtuel :
   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Windows : venv\Scripts\activate
   ```

3. Installez les dépendances requises :
   ```bash
   pip install -r requirements.txt
   ```

## Étape 4 : Lancement des Services en Mode Développement

Vous pouvez maintenant lancer les différents services.

### Lancer l'API Gateway (Node.js)
Depuis la racine du projet :
```bash
cd artifacts/api-gateway
pnpm run dev
```

### Lancer le Web Dashboard (React/Vite)
Depuis la racine du projet :
```bash
cd artifacts/web-dashboard
pnpm run dev
```

### Lancer l'Analysis Engine (Python)
Depuis le répertoire `artifacts/analysis-engine` (avec l'environnement virtuel activé) :
```bash
uvicorn app.main:app --reload --port 8000
```

## Conclusion

Votre environnement de développement est maintenant configuré. Pour toute question ou problème, veuillez consulter la documentation supplémentaire ou ouvrir une issue sur le dépôt GitHub.
