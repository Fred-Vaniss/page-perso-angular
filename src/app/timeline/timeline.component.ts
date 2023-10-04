import { Component } from '@angular/core';
import { PARCOURS } from './timeline-list';

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestion, faBook, faBuilding, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-timeline]',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

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
