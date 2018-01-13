import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [];
  search = [];
  searching = false;
  onAdd(item) {
    this.items.push(item);
    this.searching = false;
  }

  onSearch(search) {
    if(search == '') {
      this.searching = false;
    } else {
      this.searching = true;
      this.search = this.items.filter(e => e.indexOf(search) > -1);
    }
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }
}