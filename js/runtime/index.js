// sync
console.log('1');

// web api -- async - the callback queue do event loop envia o callback function ao call stack da engine quando ela está limpa para executar.
setTimeout(() => {
    console.log('2')
        , 1000
});

// sync
console.log('3');