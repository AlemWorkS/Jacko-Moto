# ÉTAPE 1 : Base légère avec Node.js
# Utilisation de la même base LTS pour la stabilité
FROM node:20-bookworm-slim

# Définir les variables d'environnement
ENV NODE_ENV=development
WORKDIR /app

# Installer les dépendances essentielles du système
# On garde git car il est souvent nécessaire pour les dépendances npm
RUN apt-get update && \
    apt-get install -y --no-install-recommends git && \
    npm install -g expo-cli && \
    rm -rf /var/lib/apt/lists/*

# Configuration pour le bon fonctionnement des commandes interactives
# Pour que 'expo start' fonctionne correctement sans erreur TTY
ENV SHELL=/bin/bash

# Copier les fichiers de projet (si vous voulez installer les dépendances dans l'image)
# Si vous utilisez Docker Compose (recommandé), le volume s'en chargera.
# COPY package.json yarn.lock ./
# RUN yarn install

# Exposer les ports utilisés par Expo (Metro Bundler et dev tools)
# 8081 est pour le Metro Bundler, 19000/19001 sont pour les dev tools d'Expo
EXPOSE 8081
EXPOSE 19000
EXPOSE 19001

# Définir l'utilisateur par défaut (bonne pratique)
#RUN adduser --disabled-password --gecos '' devuser
#USER devuser

# Commande par défaut (optionnel, mais pratique)
# CMD ["expo", "start"]