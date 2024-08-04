let numero: number = 123456;
let somaPares = 0;

while (numero > 0) {
    let digito = numero % 10;
    if (digito % 2 === 0) {
        somaPares += digito;
    }
    numero = Math.floor(numero / 10);
}

console.log(`A soma dos dígitos pares é: ${somaPares}`);
