import { Injectable } from '@angular/core';

@Injectable()
export class CounterServiceService {
  inactive=0;
  active=0;
  addActive(){
    this.active++;
  }
  addInactive(){
    this.inactive++;
  }
  constructor() { }

}
