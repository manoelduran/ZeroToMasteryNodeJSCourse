// memory Leak
let array = [];
for(let i = 5; i > 1; i++) {
   const ola = array.push(i -1);
   console.log('ola', ola)
}

// Commun Memory Leak to avoid

// 1 - Global variables

var a = 1;
var b = 1;
var c = 1;

//2 -  Event listeners

var element = document.getElementById('button');
element.addEventListener('click', onClick);

// 3 - setInterval

setInterval(() => {
    // referencing objects..
})
