import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() index;
  @Output() itemDeleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.itemDeleted.emit(this.index);
  }

}
