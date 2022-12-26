
function someCalculation(x, y) {
    console.log('ola', (x + y))
    return x + y;
};

for (let i = 0; i < 1000; i++) {
    someCalculation(5, 4);

}
