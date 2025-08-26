import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { LangService } from '../../services/lang.service';
import { LOCBUTTONS } from '../../data/localization';
import { ModalService } from '../../services/modal.service';
import { Article, Gallery, GalleryCall, PortfolioEntry } from '../../data/portfolio-list';
import { UrlService } from '../../services/url.service';
import {PortfolioArticleService} from "../../services/portfolio-article.service";

@Component({
    selector: 'app-modal-container',
    templateUrl: './modal-container.component.html',
    styleUrls: ['./modal-container.component.scss'],
    standalone: false
})

export class ModalContainerComponent implements OnInit {

  lang: string = "";
  locBtns = LOCBUTTONS;
  isShown: boolean = false;
  currentArticle? : PortfolioEntry = null;
  faTimes = faTimes;
  articleBlocks: (string | { gallery: number } | { video: string }) [] = [];

  constructor(
    public langService: LangService,
    public modalService: ModalService,
    public urlService: UrlService,
    private articleService: PortfolioArticleService,
  ){}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang);

    this.modalService.modalChange.subscribe(modalChange => {
      this.currentArticle = modalChange.article;
      if (this.currentArticle) {
        this.articleService.loadArticle(this.lang, this.currentArticle.id).subscribe(blocks => {
          this.articleBlocks = blocks;
          this.isShown = true;
        })
      }
    })
  }

  closeModal(): void {
    this.isShown = false;
    this.urlService.cleanQueryArticle()

    setTimeout(() => {
      this.currentArticle = null;
      this.articleBlocks = [];
    }, 400);
  }

  bgCloseModal(e: Event): void{
    const target = e.target as HTMLDivElement;
    const className = target.className;

    if (className === "portfolio-modal transition shown") {
      this.closeModal();
    }
  }

  checkType(item: any): string{
    return typeof item;
  }

  getGallery(item: Article): Gallery {

    return this.currentArticle.galleries[(item as GalleryCall).galIndex];

  }

}
