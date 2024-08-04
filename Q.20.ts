let notas: number[] = [7, 5, 8, 6, 9];
let aprovados = 0;

for (let nota of notas) {
    if (nota >= 7) {
        aprovados++;
    }
}

console.log(`Número de alunos aprovados: ${aprovados}`);
