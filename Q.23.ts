let alturas: number[] = [1.75, 1.80, 1.65, 1.70, 1.68];
let somaAlturas = 0;

for (let altura of alturas) {
    somaAlturas += altura;
}

let mediaAltura = somaAlturas / alturas.length;
console.log(`A média de altura é: ${mediaAltura}`);
