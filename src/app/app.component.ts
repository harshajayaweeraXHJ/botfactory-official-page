declare var Pusher: any;
declare var jQuery:any;



import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import SubscriptionComponent from './subscription.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [SubscriptionComponent],
})
class AppComponent {
 
 someVar : string = "AAA";

  constructor() {
        
  }

  subscribe(event){
  this.someVar = "BBBB";    
  }

}

bootstrap(AppComponent);
