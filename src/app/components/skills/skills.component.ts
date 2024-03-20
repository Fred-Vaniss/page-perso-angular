import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { SKILLS, SOFTSKILLS } from '../../data/skills-list';
import { LOCSKILLS } from '../../data/localization';

@Component({
  selector: '[app-skills]',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills = SKILLS;
  softSkills = SOFTSKILLS;
  loc = LOCSKILLS;
  lang: string = "";

  constructor(public langService: LangService){}

  ngOnInit(): void{
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang);
  }

  getImg(img: string): string{
    return `assets/img/skills/${img}.svg`;
  }
}
