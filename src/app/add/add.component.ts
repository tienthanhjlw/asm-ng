import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  textValue = '';
  @Output() add = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    if (this.textValue !== '') {
      this.add.emit(this.textValue);
      this.textValue = '';
    }
  }

}
