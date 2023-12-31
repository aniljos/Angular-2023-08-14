import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./databinding.component.html"
})
export class DataBindingComponent{

    name: string;
    count: number;
    message: string;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 10;
        this.message="Hello Angular";
    }

    inc(evt: any){
        this.count++;
        console.log("inc", evt);
    }

    update(evt: any){
        this.count = evt.target.value
    }
}