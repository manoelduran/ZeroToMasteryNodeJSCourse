

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animals;

console.log('tiger', tiger)
console.log('...rest', rest)
