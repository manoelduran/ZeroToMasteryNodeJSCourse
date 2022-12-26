

function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const object1 = new Animal(1, 2)
const object2 = new Animal(3, 4)

console.log('object1', object1)
console.log('object2', object2)

delete object1.x;
object1.b = 100;
object2.b = 30;
object2.a = 100;

console.log('object1', object1)
console.log('object2', object2)