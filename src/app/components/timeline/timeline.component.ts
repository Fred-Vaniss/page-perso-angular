import { Component, OnInit } from '@angular/core';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { PARCOURS, ParType } from './timeline-list';
import { faQuestion, faBook, faBuilding, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { LangService } from '../../services/lang.service';
import { LOCTIMELINE } from '../../localization';
import {ModalService} from "../../services/modal.service";

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

  getIcon(type: ParType): IconDefinition{

    switch (type) {
      case ParType.Entr:
        return faBuilding;

      case ParType.Forma:
        return faBook;

      case ParType.Gradu:
        return faGraduationCap;

      default:
        return faQuestion;
    }

  }
}
