let numero: number = 1234;
let numeroInvertido = 0;

while (numero > 0) {
    numeroInvertido = (numeroInvertido * 10) + (numero % 10);
    numero = Math.floor(numero / 10);
}

console.log(`O número invertido é: ${numeroInvertido}`);
