import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-app-demo';
  // mediaSub : Subscription;
  
  // constructor(public mediaObserver:MediaObserver){}
  // ngOnInit(): void {
  //   this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
  //     console.log(result.mqAlias);
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.mediaSub.unsubscribe();
  // }
}

