"use strict";

// Le tableau imbriqué représente une collection d'étudiants avec leurs données (slides 35 à 37).
const students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Cette fonction parcourt les étudiants, calcule leur résultat et l'affiche (slides 29 à 32, 42).
function fA() {
  // forEach appelle cette fonction de rappel pour chaque étudiant (slide 42).
  students.forEach(function (student) {
    // Les indices accèdent aux éléments du tableau; + additionne les notes (slides 36 et 20).
    // La fonction fB renvoie un booléen utilisé par l'opérateur ternaire (slides 29 à 32, 26).
    const status = fB(student[3] + student[4]);
    // L'opérateur ternaire choisit le texte selon status; + assemble le résultat affiché (slide 26).
    console.log(student[0] + ": " + (status ? "ADMIS" : "AJOURNÉ"));
  });
}

// Cette fonction renvoie vrai si la moyenne calculée atteint le seuil de 10 (slides 29 à 32, 25).
function fB(average) {
  // >= compare deux valeurs et produit un booléen (slide 25).
  return average >= 10;
}
