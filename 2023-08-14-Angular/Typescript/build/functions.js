//function statement
function sum(x, y) {
    return x + y;
}
//function expression
const add = function (x, y) {
    return x + y;
};
console.log("add", add(10, 20));
//Arrow function
let calc = (x, y) => {
    return x + y;
};
console.log("calc", calc(20, 30));
calc = (x, y) => x * y;
console.log("calc", calc(20, 30));
const obj = {
    id: 100,
    print: function () {
        console.log("id", this.id);
        var x = 100;
        var _this = this;
        setTimeout(function () {
            console.log("id after 2secs fn expr", _this.id);
        }, 2000);
        setTimeout(() => {
            console.log("id after 2secs arrow fn", this.id);
        }, 2000);
    }
};
obj.print();
