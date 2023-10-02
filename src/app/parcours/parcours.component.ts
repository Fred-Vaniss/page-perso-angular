import { Component } from '@angular/core';
import { Parcours } from '../parcours';
import { PARCOURS } from '../parcours-list';


import { faBook, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent {

  parcours = PARCOURS;
  faBuilding = faBuilding;
  

}
