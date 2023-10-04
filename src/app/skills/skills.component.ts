import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { SKILLS } from './skills-list';
import { LOCSKILLS } from '../localization';

@Component({
  selector: '[app-skills]',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills = SKILLS;
  loc = LOCSKILLS;
  lang: string = "";

  constructor(public langService: LangService){}

  ngOnInit(): void{
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang)
  }

  getImg(img: string): string{
    return `/assets/img/skills/${img}.svg`
  }
}
