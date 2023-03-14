import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;
  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    if(this.checkDuplicates(memberName) === undefined) {
    this.crew.push({ name: memberName, firstMission: isFirst });
    }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

  checkDuplicates(name: string){
    const result = this.crew.find(element => element.name === name );
    return result;
  }

}
