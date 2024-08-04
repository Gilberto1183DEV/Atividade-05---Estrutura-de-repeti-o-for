let numeros: number[] = [3, 9, 2, 8, 1, 4, 7, 6, 5, 10];
let maior = numeros[0];
let menor = numeros[0];

for (let num of numeros) {
    if (num > maior) {
        maior = num;
    }
    if (num < menor) {
        menor = num;
    }
}

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
