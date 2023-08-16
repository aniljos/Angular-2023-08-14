export class Employee{

    private _location: string;
    constructor(public id?: number, public name?: string, public salary?: number){}

    //property

    public get location(){
        return this._location;
    }
    public set location(value: string){
        this._location = value;
    }
}





