import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { LOCCONTACT } from '../localization';
import { faEnvelope, faMobileAlt, faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lang: string = "";
  loc = LOCCONTACT;

  faEnvelope: IconDefinition = faEnvelope;
  faMobileAlt: IconDefinition = faMobileAlt;
  faHome: IconDefinition = faHome;

  constructor(public langService: LangService){}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang);
  }
}
