let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
 
function factorial(nombre) {
let result = 1

  while(nombre >= 1) {
    result = result* nombre;
    nombre --;
  }
 return result
}

console.log("Le résultat est : ${factorielle()}")