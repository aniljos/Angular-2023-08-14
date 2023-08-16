
console.log("x", x);
var x = 10;
console.log("x", x); //10

var y;
console.log("y", y); // undefined

//console.log("z", z); //unhandled error


function foo(){
    console.log("in foo...");
    var z = 100;
    if(z > 10){
        let msg = "Hello foo";
        console.log("msg", msg);
    }
    //console.log("msg", msg); // exception when using let

}

foo();

console.log("App over");