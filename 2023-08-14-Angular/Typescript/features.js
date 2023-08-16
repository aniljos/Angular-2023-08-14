

// implicit args=> this, arguments
function sum(){
    console.log("in sum no args");
}
function sum(x, y){
    console.log("in sum", this);
    console.log("in sum", arguments);
}

window.sum(2, 3);
sum();
sum(2,3,4,5);