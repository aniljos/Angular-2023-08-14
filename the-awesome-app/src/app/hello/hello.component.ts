import { Component } from "@angular/core";

// <hello></hello>
@Component({
    selector: "hello",
    template: `
         <div>
            <h4>Hello Angular</h4>
            <p>This is a simple Angular component</p>
         </div>   
    `
})
export class HelloComponent{

}