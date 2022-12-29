// JS RUNTIME
// SIMPLE EXAMPLE
// sync
console.log('1');

// web api -- async - the callback queue do event loop envia o callback function ao call stack da engine quando ela está limpa para executar.
setTimeout(() =>
    console.log('2')
    , 1000
);

// sync
console.log('3');


// EXAMPLE 2

function achieveNirvana() {
    console.log('You are enlightened!')
}

function c() {
    setTimeout(achieveNirvana, 3000)
}

function b() {
    c()
}

function a() {
    b()
}

a()