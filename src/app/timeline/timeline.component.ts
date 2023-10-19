import { Component, OnInit } from '@angular/core';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { PARCOURS } from './timeline-list';
import { faQuestion, faBook, faBuilding, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { LangService } from '../lang.service';
import { LOCTIMELINE } from '../localization';

@Component({
  selector: '[app-timeline]',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{

  locTitle = LOCTIMELINE;
  parcours = PARCOURS;
  faMapMarkerAlt = faMapMarkerAlt;
  lang: string = "";

  constructor(public langService: LangService){}

  ngOnInit(): void{
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang);
  }
  
  getIcon(type: string): IconDefinition{

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
