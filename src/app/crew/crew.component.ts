import { Component, OnInit } from '@angular/core';
import { Crew } from './crew.interface';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: Crew[] = [];

  candidates: Crew[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];
currentHover: string = "";
  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

  addCrewMember(candidate: Crew) {
    const indexOfMember = this.crew.findIndex(member => member.name === candidate.name);
    if (indexOfMember === -1 && this.crew.length < 3) {
      this.crew.push(candidate);
    } else if (indexOfMember > -1) {
      this.crew.splice(indexOfMember, 1);
    }

  }

  onCrew(candidate: Crew) {
    const indexOfMember = this.crew.findIndex(member => member.name === candidate.name);
    if (indexOfMember === -1) {
      return false;
    }
    return true;
  }
}
