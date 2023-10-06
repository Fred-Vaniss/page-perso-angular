import { Component } from '@angular/core';
import { LangService } from '../lang.service';
import { LOCBUTTONS, LOCPORTFO } from '../localization';
import { PORTFOLIOLIST } from '../portfolio-list';

import { faStickyNote, faGlobe,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ModalService } from '../modal.service';

@Component({
  selector: '[app-portfolio]',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

  locTitle = LOCPORTFO;
  locBtns = LOCBUTTONS;
  lang: string = "";

  faStickyNote = faStickyNote;
  faGlobe = faGlobe;
  faGithub = faGithub;

  portfolioList = PORTFOLIOLIST;

  constructor(
    public langService: LangService,
    public modalService: ModalService
  ){}

  ngOnInit(): void {
    this.langService.languageChange.subscribe(lang => this.lang = lang)
    this.lang = this.langService.getLang()
  }

  getImg(img: string): string {
    return(`assets/img/portfolio/${img}.jpg`)
  }

  openArticle(id: string): void {
    this.modalService.openArticle(id);
  }

}
