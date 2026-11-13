"use strict";

// const déclare une variable dont la référence ne sera pas réaffectée (slide 16).
// Un tableau regroupe plusieurs valeurs dans un ordre donné (slides 35 à 37).
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// function déclare une fonction réutilisable (slides 29 à 32).
function f1() {
  // forEach parcourt les éléments du tableau et appelle la fonction de rappel pour chacun (slide 42).
  etudiants.forEach(function (etudiant) {
    // console.log affiche l'élément courant dans la console (slide 9).
    console.log(etudiant);
  });
}

// Un objet regroupe des propriétés sous forme de paires clé-valeur (slides 38 à 40).
const etudiant = {
  nom: "John",
  prenom: "DOE",
  age: 30
};

// Cette fonction affiche l'objet étudiant dans la console (slides 9 et 38 à 40).
function f2() {
  console.log(etudiant);
}

// Ce tableau contient plusieurs objets étudiants (slides 35 à 40).
const etudiantsDetails = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Cette fonction parcourt le tableau et affiche les propriétés de chaque objet (slides 29 à 32, 42).
function f3() {
  // forEach traite chaque objet; element.nom accède à ses propriétés (slides 40 et 42).
  etudiantsDetails.forEach(function (element) {
    // + assemble les chaînes et les valeurs avant leur affichage (slides 9 et 20).
    console.log(element.nom + "-" + element.prenom + "-" + element.age);
  });
}
