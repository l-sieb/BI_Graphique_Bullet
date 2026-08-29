## 📊 Graphique de comparaison "Moyenne" (bullet chart)

Ce script a été développé pour être intégré dans l'outil de BI **Biboard**.

### Description

Graphique en **barre horizontale de type "bullet chart"**, utilisé pour comparer une valeur individuelle à un objectif et à une moyenne globale, sur un seul indicateur ("Moyenne").

### Structure

- Un **axe horizontal gradué** de 0 à 5, servant d'échelle de lecture
- Une **barre horizontale** (turquoise) dont la longueur représente la valeur **Individuelle**
- Un **repère vertical rouge** indiquant la valeur **Objectif** (affichée sous forme de plage, ex. "2 - 2")
- Un **repère gris** (losange) indiquant la valeur **Globale** (moyenne de référence)
- Une **légende** en bas du graphique précisant les trois indicateurs : Individuel, Objectif, Global

### Interactivité

- Une **infobulle (tooltip)** apparaît au survol de la barre, affichant le nom de l'indicateur et le détail des trois valeurs (ex. *"Moyenne — Individuel : 2.14 / Objectif : 2 - 2 / Global : 1.9"*)

### Exemple
🔗 **[Voir la démo en ligne](https://l-sieb.github.io/BI_Graphique_Bullet/)**

<img width="578" height="166" alt="exemple" src="https://github.com/user-attachments/assets/1fa6b03e-fba3-4794-91f1-27d10d811598" />

<img width="572" height="159" alt="exemple_infobulle" src="https://github.com/user-attachments/assets/01ea89de-557e-46e0-b116-cb8b78715ad8" />
