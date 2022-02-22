import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elix-jumbotron',
  templateUrl: './elix-jumbotron.component.html',
  styleUrls: ['./elix-jumbotron.component.scss'],
})
export class ElixJumbotronComponent implements OnInit {
  @Input() closeAction: boolean;
  @Input() title: string;
  @Input() action: boolean;
  //It's mandatory
  @Input() type: string;
  constructor() {}

  ngOnInit(): void {}
}
