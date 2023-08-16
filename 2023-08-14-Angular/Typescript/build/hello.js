console.log("Hello Typescript");
var x = 10; //Type inference
console.log("x", x);
//x = "abc"; //compilation error=> static type checking
var y;
console.log("y", y);
y = 20;
console.log("y", y);
y = "abc";
console.log("y", y);
var z; // type annotation
z = "Anil";
console.log("z", z);
//z = 100; //compilation
var user;
user = { id: 10, name: "Anil" };
