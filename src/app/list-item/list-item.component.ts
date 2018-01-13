import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() items;
  @Output() itemDeletedId = new EventEmitter();
  indexItems = [];
  constructor() { }

  ngOnInit() {
  }

  sendItemDeletedId(index) {
    this.itemDeletedId.emit(index);
  }
}
