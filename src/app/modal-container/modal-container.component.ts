import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { LangService } from '../lang.service';
import { LOCBUTTONS } from '../localization';
import { ModalService } from '../modal.service';
import { PortfolioEntry } from '../portfolio-list';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})

export class ModalContainerComponent implements OnInit {

  lang: string = ""
  locBtns = LOCBUTTONS;
  isShown: boolean = false;
  currentArticle? : PortfolioEntry = null;
  faTimes = faTimes;

  constructor(
    public langService: LangService,
    public modalService: ModalService
  ){}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang)

    this.modalService.modalChange.subscribe(article => {
      this.currentArticle = article;
      this.isShown = true;
    })
  }

  closeModal(): void {
    this.isShown = false;

    setTimeout(() => {
      this.currentArticle = null;
    }, 400);
  }

  bgCloseModal(e: Event): void{
    const target = e.target as HTMLDivElement
    const className = target.className

    if (className === "portfolio-modal transition shown") {
      this.closeModal();
    }
  }

}
