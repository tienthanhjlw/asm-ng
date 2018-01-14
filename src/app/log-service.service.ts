import { Injectable } from '@angular/core';

@Injectable()
export class LogServiceService {
log(book,status,active,inactive){
  console.log(book+" is"+status+', has '+active+" active and ", inactive+ " inactive")
}
  constructor() { }

}
