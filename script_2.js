console.log("De quel nombre veux-tu calculer la factorielle?");
let number = prompt("entrer le nombre ici")

function factorial(number) {
    let resultat = 1;
    for (let i = 1; i <= number; i++) {
        resultat = resultat *= i;
    }
    return resultat;
}

console.log("le résultat est: " + factorial(number));