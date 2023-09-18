const tableau = ["Élément 1", "Élément 2", "Élément 3", "Élément 4"];

console.log("Utilisation d'une boucle for :");
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

console.log("\nUtilisation de la méthode forEach :");
tableau.forEach(function(element) {
    console.log(element);
});