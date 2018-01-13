import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() name;
  @Input() other;
  constructor() { }

  ngOnInit() {
  }

}
