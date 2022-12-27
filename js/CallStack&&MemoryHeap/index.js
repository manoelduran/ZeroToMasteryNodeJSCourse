// call stack + memory heap

const number = 610; // allocate memory for number; 

const string = 'some text' // allocate memory for a string;

const object = { // allocate memory for an object ... and it's values
    first: 'Manoel',
    last: 'Duran'
}

function subtractTwo(num) {
    return console.log(num - 2);
}

function calculate() {
    const sumTotal = 4 + 5;
    return console.log('sumTotal', subtractTwo(sumTotal));
}

calculate()