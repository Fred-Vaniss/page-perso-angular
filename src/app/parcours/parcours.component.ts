import { Component } from '@angular/core';
import { PARCOURS } from './parcours-list';

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestion, faBook, faBuilding, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-parcours]',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent {

  parcours = PARCOURS;
  faMapMarkerAlt = faMapMarkerAlt;
  
  getIcon(type: String): IconDefinition{

    switch (type) {
      case "entreprise":
        return faBuilding;
    
      case "formation":
        return faBook;

      case "graduation":
        return faGraduationCap;

      default:
        return faQuestion;
    }

  }
}
