import { Component, OnInit } from '@angular/core';

import { LangService } from '../lang.service';
import { LOCINTRO } from '../localization';

@Component({
  selector: '[app-intro]',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  loc = LOCINTRO;
  lang: string = "";

  constructor(public langService: LangService){}

  ngOnInit(): void {
    // this.langService.getLang().subscribe(lang => this.lang = lang);
    this.langService.languageChange.subscribe(lang => this.lang = lang);
    this.lang = this.langService.getLang();
  }

}
