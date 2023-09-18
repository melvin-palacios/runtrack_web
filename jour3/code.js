let num1 = prompt("Entrez le premier nombre :");
let num2 = prompt("Entrez le deuxième nombre :");
if (!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    window

    const addition = num1 + num2;
    const soustraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;

    console.log(`Addition : ${addition}`);
    console.log(`Soustraction : ${soustraction}`);
    console.log(`Multiplication : ${multiplication}`);
    console.log(`Division : ${division}`);
} else {
    console.log("Veuillez entrer des nombres valides.");
}

let string1 = prompt("Entrez une premiere chaine de charactère :");
let string2 = prompt("Entrez une deuxième chaine de charactère :");

if (string1!==null && string2!==null) {
    const concatenation = string1 + string2;
    console.log(`Concatenation : ${concatenation}`);
}