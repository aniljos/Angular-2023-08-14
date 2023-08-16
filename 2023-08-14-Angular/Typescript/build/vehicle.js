export class Car {
    //single constructor implementation
    constructor(name, gears, speed) {
        this.name = name;
        this.gears = gears;
        this.speed = speed;
    }
    decrementSpeed(value) {
        this.speed -= value;
    }
}
