import { Component, OnInit } from '@angular/core';

import { LOCABOUT } from '../localization';
import { LangService } from '../lang.service';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  loc = LOCABOUT;
  lang: string = "";

  constructor(public langService: LangService){}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang);
  }
}
