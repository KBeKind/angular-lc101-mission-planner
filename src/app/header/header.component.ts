import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  missionEdit: boolean = false;
  rocketEdit: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateText(textType: string,updatedName: string) {
    this[`${textType}Name`] = updatedName;
    this[`${textType}Edit`] = false;
  }

}
