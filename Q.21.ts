let numero: number = 1234;
let somaDigitos = 0;

while (numero > 0) {
    somaDigitos += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log(`A soma dos dígitos é: ${somaDigitos}`);
