"use strict";


const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];


function f1() {
  etudiants.forEach(function (etudiant) {
    console.log(etudiant);
  });
}


const etudiant = {
  nom: "John",
  prenom: "DOE",
  age: 30
};


function f2() {
  console.log(etudiant);
}


const etudiantsDetails = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];


function f3() {
  etudiantsDetails.forEach(function (element) {
    console.log(element.nom + "-" + element.prenom + "-" + element.age);
  });
}
