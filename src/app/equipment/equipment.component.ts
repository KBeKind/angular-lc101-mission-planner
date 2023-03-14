import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: object = null;
  equipments: object[] = [
    { name: "Habitat Dome"},
    { name: "Drones"},
    { name: "Food Containers"},
    {name: "Oxygen Tanks"},
  ];
  


  constructor() { }

  ngOnInit() {
  }
  add(memberName: string) {
    this.equipments.push({ name: memberName});
  }

  remove(member: object) {
    let index = this.equipments.indexOf(member);
    this.equipments.splice(index, 1);
  }

  edit(member: object) {
    this.equipmentBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.equipmentBeingEdited = null;
  }

 
}
