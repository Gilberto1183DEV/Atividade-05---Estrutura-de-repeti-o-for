let numero: number = 24;
console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}
