import { Component, OnInit } from '@angular/core';

import { LangService } from '../lang.service';
import { LOCNAVBAR } from '../localization';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  loc = LOCNAVBAR;
  lang: string = "";

  constructor(public langService: LangService){}

  ngOnInit(): void{
    this.getLang();
    console.log(this.lang);
  }

  getLang(): void{
    this.langService.getLang().subscribe(lang => this.lang = lang);
  }

  switchLang(): void{
    this.langService.switchLang();
    this.getLang();
  }


}
