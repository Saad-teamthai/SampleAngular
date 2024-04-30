import { Component,OnInit } from '@angular/core';
import {HelloWorld} from 'models/helloworld.model'
import { HelloWorldlService } from 'services/helloWorld';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample-project';
  name:HelloWorld={};

  constructor(private helloWorldService:HelloWorldlService){}

  ngOnInit():void{
  }

  getHelloWorld():void{
    this.helloWorldService.getAll()
    .subscribe({
      next:(data)=>{
        this.name = data;
        console.log(data);
      },
      error: (e)=>console.error(e)
    })
  }
  
}
