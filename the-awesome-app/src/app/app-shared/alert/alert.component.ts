import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{

  @Input() title: string = "Title";
  @Input() message: string = "";
  @Input() severity: string = "info"; // info, success, warning, error 

  severityCss: any = {"alert-info": true}

  @Output() closed: EventEmitter<void> = new EventEmitter();

  constructor(){
    //this.changeSeverityCSS();
    console.log("AlertComponent constructor", this.title, this.message, this.severity)
  }
  
  ngOnInit(): void {
    console.log("AlertComponent ngOnInit", this.title, this.message, this.severity)
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log("AlertComponent ngOnChanges", changes)
    console.log("AlertComponent ngOnChanges", this.title, this.message, this.severity)
    this.changeSeverityCSS();

  }
  ngAfterViewInit(): void {
    console.log("AlertComponent ngAfterViewInit", this.title, this.message, this.severity)
  }
  ngOnDestroy(): void {
    console.log("AlertComponent ngOnDestroy", this.title, this.message, this.severity)
  }


  close(){
    if(this.closed){
      this.closed.emit();
    }
  }

  changeSeverityCSS(){

    debugger;
    switch(this.severity){

      case "info":
        this.severityCss = {"alert-info": true};
        break;
      case "success":
        this.severityCss = {"alert-success": true};
        break;
      case "warning":
        this.severityCss = {"alert-warning": true};
        break;
      case "error":
        this.severityCss = {"alert-danger": true};
        break;

    }
  }
}
