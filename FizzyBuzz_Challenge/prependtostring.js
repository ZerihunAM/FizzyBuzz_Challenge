let x = appendToString("Hello," , " World!"); // Hello, World!
console.log(x);

function appendToString(a, b) {
return a + b;
}

//If you want to add more strings simply add more values inside the parameters of your function //


let x = appendToString("Hello" , " Beautiful " , " World!"); //Hello, Beautiful World! //

console.log(x);

function appendToString(a, b, c) {
return a + b + c;
}