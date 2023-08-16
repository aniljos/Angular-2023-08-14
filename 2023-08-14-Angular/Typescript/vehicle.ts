export interface Vehicle{

    name: string;
    gears: number;
    speed: number;

    decrementSpeed(value: number): void;
}

export class Car implements Vehicle{


    name: string;
    gears: number;
    speed: number;

    //multile constructor declartions
    constructor();
    constructor(name: string, gears: number);
    constructor(name: string, gears: number, speed: number);

    //single constructor implementation
    constructor(name?: string, gears?: number, speed?: number){
        this.name = name;
        this.gears = gears;
        this.speed = speed;
    }

    decrementSpeed(value: number): void {
        this.speed -= value;
    }

}



