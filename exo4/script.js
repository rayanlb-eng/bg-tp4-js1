"use strict";

// Un objet rassemble les propriétés nom, prix et quantité d'un produit (slides 38 à 40).
const produitExemple = {
  nom: "Cahier",
  prix: 120,
  quantite: 10
};

// Une fonction calcule la valeur du stock en multipliant le prix par la quantité (slides 20 et 29 à 32).
function calculerValeurStock(produit) {
  return produit.prix * produit.quantite;
}

// console.log affiche le produit et la valeur totale de son stock (slide 9).
console.log("1. Produit exemple :", produitExemple);
console.log("Valeur du stock de " + produitExemple.nom + " :", calculerValeurStock(produitExemple), "DA");

// Un tableau d'objets représente le catalogue de cinq produits (slides 35 à 40).
const catalogue = [
  { nom: "Cahier", prix: 120, quantite: 10 },
  { nom: "Stylo", prix: 50, quantite: 30 },
  { nom: "Sac", prix: 2500, quantite: 4 },
  { nom: "Règle", prix: 80, quantite: 15 },
  { nom: "Calculatrice", prix: 1800, quantite: 5 }
];

// reduce parcourt le catalogue et additionne les prix pour calculer le prix moyen (slide 43).
const sommePrix = catalogue.reduce(function (total, produit) {
  return total + produit.prix;
}, 0);
const prixMoyen = sommePrix / catalogue.length;

// console.log affiche le prix moyen avant le filtrage (slide 9).
console.log("\n2. Prix moyen du catalogue :", prixMoyen, "DA");

// filter conserve les produits dont le prix dépasse le prix moyen (slide 43).
const produitsAuDessusMoyenne = catalogue.filter(function (produit) {
  return produit.prix > prixMoyen;
});

// forEach parcourt les produits retenus et console.log affiche leurs informations (slides 9 et 42).
produitsAuDessusMoyenne.forEach(function (produit) {
  console.log(produit.nom + " : " + produit.prix + " DA");
});

// reduce additionne les quantités puis les valeurs de stock du catalogue (slide 43).
const nombreTotalArticles = catalogue.reduce(function (total, produit) {
  return total + produit.quantite;
}, 0);
const valeurGlobaleStock = catalogue.reduce(function (total, produit) {
  return total + calculerValeurStock(produit);
}, 0);

// console.log affiche le nombre total d'articles et la valeur globale du stock (slide 9).
console.log("\n3. Nombre total d'articles :", nombreTotalArticles);
console.log("Valeur globale du stock :", valeurGlobaleStock, "DA");

// La même fonction est appelée pour plusieurs produits afin de vérifier son résultat (slides 29 à 32).
console.log("\n4. Vérification de la valeur du stock pour plusieurs produits :");
catalogue.slice(0, 3).forEach(function (produit) {
  console.log(produit.nom + " : " + calculerValeurStock(produit) + " DA");
});

// Cette fonction reçoit un callback pour appliquer un traitement à chaque produit (slides 29 à 32, 42).
function traiterCatalogue(callback) {
  catalogue.forEach(callback);
}

// Le callback affiche le nom de chaque produit (slides 29 à 32, 42).
console.log("\n5. Noms des produits :");
traiterCatalogue(function (produit) {
  console.log(produit.nom);
});

// Un autre callback affiche le prix de chaque produit (slides 29 à 32, 42).
console.log("Prix des produits :");
traiterCatalogue(function (produit) {
  console.log(produit.prix + " DA");
});
