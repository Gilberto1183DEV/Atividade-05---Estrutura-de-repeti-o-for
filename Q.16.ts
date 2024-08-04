let nota: number[] = [7, 8, 6, 9, 10];
let somaNotas = 0;
for (let nota of notas) {
    somaNotas += nota;
}
let media = somaNotas / notas.length;
console.log(`A média das notas é: ${media}`);
