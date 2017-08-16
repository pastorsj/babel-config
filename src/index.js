'use strict';

const a = [1, 2, 3];

a.forEach((value, index) => {
    console.log('Value', value);
    console.log('Index', index);
});

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);

    return x + await a + await b;
}

add1(10).then(v => {
    console.log(v); // prints 60 after 2 seconds.
});
