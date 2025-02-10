# Projet Web - Portfolio

## Description
Ce projet est un site web développé en **HTML, CSS et JavaScript**, avec l'utilisation de **SASS** comme préprocesseur CSS pour faciliter la gestion des styles. Le site comprend plusieurs fonctionnalités interactives et une organisation optimisée des fichiers.

## Structure du projet
Le projet est organisé dans le dossier `assets` et contient les sous-dossiers suivants :

### 1. **SASS** (`assets/sass/`)
Le dossier SASS contient plusieurs sous-dossiers pour une meilleure structuration des styles :
- **`base/`** : Définit les styles de base comme les variables, mixins et les styles globaux.
- **`components/`** : Contient les styles des composants réutilisables comme les boutons, les cartes, les modals, etc.
- **`layout/`** : Gère la mise en page globale, y compris l'en-tête, le pied de page et les structures de grille.
- **`media-queries/`** : Contient les fichiers dédiés aux styles responsifs pour assurer une bonne adaptabilité sur différents écrans.
- **`pages/`** : Contient les styles spécifiques à chaque page du site.

Le fichier principal `main.scss` est utilisé pour importer tous ces fichiers via `@use`.

### 2. **CSS** (`assets/css/`)
Ce dossier contient le fichier **compilé** à partir de SASS : `style.css`, qui est généré automatiquement via npm.

### 3. **JavaScript** (`assets/js/`)
Le dossier JavaScript regroupe les fonctionnalités dynamiques du site :
- **Modals** : Gestion des pop-ups.
- **Swipper** : Implémentation du carrousel d'images.
- **Toggle Theme** : Changement de thème (mode clair/sombre).
- **Affichage des cartes du portfolio** : Génération dynamique des cartes à partir d'une liste.
- **Circle Progress Bar** : Affichage d'une barre de progression circulaire.

### 4. **Images** (`assets/img/`)
Stocke toutes les images utilisées sur le site.

### 5. **PDF** (`assets/pdf/`)
Contient le fichier PDF du CV.

## Installation et Compilation SASS
Pour utiliser SASS et compiler les fichiers, il est nécessaire d'installer les dépendances npm.

### 1. Installation de SASS
```sh
npm i sass
```

### 2. Configuration du script dans `package.json`
```json
{
  "scripts": {
    "sass": "sass --watch assets/sass/main.scss assets/css/style.css"
  },
  "devDependencies": {
    "sass": "^1.83.4"
  }
}
```

### 3. Lancer la compilation SASS en temps réel
```sh
npm run sass
```
Cela permet de surveiller les modifications des fichiers SASS et de compiler automatiquement le CSS.

## Technologies utilisées
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **SASS (SCSS)**
- **npm**

## Auteur
PARFAIT Fanilohery Evans 
[Mon Portfolio](https://pevansfan.github.io/my-portfolio/)


