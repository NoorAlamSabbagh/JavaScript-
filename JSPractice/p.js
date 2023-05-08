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
// var length = 20;

// function callback() {
//     console.log(this.length);
// }

// const obj = {
//     length: 10,
//     abc() {
//         arguments[0]();
//     },
// }

// obj.abc(callback, 1, 2, 3);



//
// function printDateTime(){
//     const now = new Date();
//     console.log(now.toLocaleString());
// }
// setInterval(printDateTime, 1000);

//
// let date = new Date().getDay();
// console.log(date);
// function Time(){
// if(date === 0){
//     console.log("Sunday");
// }
// }


//
// let date = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// console.log(date[new Date().getDay()])


//
// let arr = [1,1,1,2,2,3,3,3,5,5,6,7,7,7,8,8,8,9,9,9]
// let un = [];
// let res = arr.forEach((e,i)=> {
//   if(!un.includes(e)){
//     un.push(e)
//   }
// })

// console.log(un)


//
// let arr = [1,2,3,1,4,2,5,6,2,4,5,7,9];
// let freq = {};

// for(let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   freq[num] = freq[num] ? freq[num] + 1 : 1;
// }

// console.log(freq);


//



