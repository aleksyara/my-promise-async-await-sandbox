
function functionOne() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve('functionOne conmpleted successfully');
        }, 5000);
    });
}

function functionTwo() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve('functionTwo conmpleted successfully');
        }, 2000);
    });
}

// console.log(functionOne());
// console.log(functionTwo());

// functionOne().then(function(data) {
//     console.log('data: ', data);
// });

// functionTwo().then(function(data) {
//     console.log('data: ', data);
// });

// nested promises/chain of priomises -> bad way of ding things
// functionOne().then(function(data) {
//     console.log('data: ', data);

//     functionTwo().then(function(data) {
//         console.log('data: ', data);

//         functionTwo().then(function(data) {
//             console.log('data: ', data);

//             functionTwo().then(function(data) {
//                 console.log('data: ', data);
//             });

//         });

//     });

// });

async function mainFunction() {

    const resultOne = await functionOne();

    const resultTwo = await functionTwo();

    console.log(resultOne);
    console.log(resultTwo);

}

mainFunction();