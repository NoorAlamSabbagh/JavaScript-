//callback
// setTimeout(()=>{
//     console.log("Noor Alam")
// }, 1000);

//
// const logHello=()=>{
//     console.log("Noor Alam")
// }
// setTimeout(logHello,1000)

//
// function a() {
//     setTimeout(() => {
//         console.log("a");
//     }, 2000)
// }

// function b(callback) {
//     setTimeout(() => {
//         console.log("b");
//         callback();
//     }, 1000)
// }

// b(a);

// var a = 10;
// function x() {
//     console.log(a);
//     var a = 20;
// }

// x();


// const a = 11;
// const result = (a%2==0)?"even":"odd";
// console.log(result)


// setInterval(()=>{
//     console.log("Noor Alam")
// },1000)



// function a(noor){
//     setTimeout(()=>{
//         console.log("alam")
//     })
// }
// a(alam);


//IIFE
//IQ
// var x = 50;
// var m = {
//     fun: function () { console.log(this.x) },
//     fun1: () => { console.log(this.x) },
//     x: 20
// }
// m.fun()
// m.fun1()


// var ans = m.fun;
// var ofn1 = m.fun1;
// ans();
// ofn1();


//
var length = 20;

function callback() {
    console.log(this.length);
}

const obj = {
    length: 10,
    abc() {
        arguments[0]();
    },
}

obj.abc(callback, 1, 2, 3);