# Quiz en Alpine.js
- Ce projet est un quiz simple créé avec Alpine.js et HTML/CSS. 
- Le but du quiz est de poser des questions à l'utilisateur, et celui-ci doit sélectionner la bonne réponse parmi trois propositions. 
- Le quiz s'arrête automatiquement après 10 questions ou lorsque l'utilisateur obtient 5 bonnes réponses.

# Fonctionnalités
- Affichage dynamique des questions : Chaque question est tirée d'un ensemble prédéfini d'objets JavaScript représentant des questions et leurs réponses possibles.

- Suivi des bonnes réponses : Un compteur de cœurs s'affiche, représentant le nombre de bonnes réponses données. Les cœurs vides sont remplacés par des cœurs pleins après chaque bonne réponse.
- Conditions de fin du quiz :
Le quiz s'arrête après 10 questions posées.
Le quiz s'arrête également si l'utilisateur obtient 5 bonnes réponses.
- Bouton de redémarrage : À la fin du quiz, un bouton permet de recommencer une nouvelle partie.

# Technologies utilisées
- Alpine.js : Pour la gestion des interactions utilisateur, l'état du quiz et les mises à jour dynamiques de l'interface.
- HTML/CSS : Pour la structure et le style du quiz.
- JavaScript : Pour la gestion des questions et des réponses, ainsi que les conditions d'arrêt du quiz.
# Structure des questions
- Les questions sont stockées sous forme d'un tableau d'objets JavaScript. Chaque objet contient :

- question : La question posée à l'utilisateur.
- correct : La lettre correspondant à la bonne réponse (a, b ou c).
- answers : Un tableau contenant trois réponses possibles.
- Exemple de structure de question :
javascript

{
  question: 'Traduis "car" en français.',
  correct: 'a',
  answers: ['voiture', 'chaise', 'eau']
}
# amelioration potentielle
- Ajout d'un minuteur pour chaque question.
- Système de niveaux : Ajouter plusieurs niveaux de difficulté avec des questions plus complexes.
- Suivi des scores : Sauvegarder et afficher les meilleurs scores.
- Système de thèmes : Permettre à l'utilisateur de choisir entre différents thèmes pour le quiz (couleurs, styles).
# Auteur
- Ce projet a été réalisé par Johan Gourmand.
