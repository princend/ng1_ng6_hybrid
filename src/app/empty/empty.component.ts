import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty',
  template: ''
})
export class EmptyComponent implements OnInit ,OnDestroy{

  constructor( private router: Router) {  }
  ngOnDestroy(): void {
   
  }

  ngOnInit() {
   
  }

  

}
