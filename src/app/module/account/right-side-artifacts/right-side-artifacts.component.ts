import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elix-right-side-artifacts',
  templateUrl: './right-side-artifacts.component.html',
  styleUrls: ['./right-side-artifacts.component.scss']
})
export class RightSideArtifactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hy(){
    console.log('Salut, Sergiu!')
  }
}
