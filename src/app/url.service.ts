import { Injectable } from '@angular/core';
import { LangService } from './lang.service';
import { Location } from '@angular/common';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService{

  queryLang: string = '';
  queryArticle: string = '';
  hash: string = '';

  constructor(
    public langService: LangService,
    private modalService: ModalService,
    private location: Location
  ){}

  init(): void {

    let urlNeedUpdate = false;
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const lang: string = urlParams.get("lang");

    this.hash = window.location.hash;

    if (lang === "fr" || lang === "en"){

      this.langService.setLang(lang);
      this.queryLang = `?lang=${lang}`;

    } else {
      
      this.queryLang = `?lang=fr`;
      urlNeedUpdate = true

    }

    const article: string = urlParams.get("article")

    if (article) {

      setTimeout(() => {
        this.modalService.openArticle(article)
      }, 100);

    }

    if (urlNeedUpdate) { this.updateUrl(); }

    this.langService.languageChange.subscribe(lang => this.setQueryLang(lang));
    this.modalService.modalChange.subscribe(modalChange => {

      if (modalChange.doUpdateUrl) {
        this.setQueryArticle(modalChange.article.id)
      }

    });

  }

  setHash(hash: string): void {

    this.hash = `#${hash}`;
    this.updateUrl();

  }

  setQueryLang(lang: string): void {

    this.queryLang = `?lang=${lang}`;
    this.updateUrl();

  }

  setQueryArticle(article: string): void {

    this.queryArticle = `&article=${article}`
    this.updateUrl()

  }

  cleanQueryArticle(): void {
    
    this.queryArticle = ''
    this.updateUrl()

  }

  updateUrl(): void {
    this.location.replaceState(`/${this.queryLang}${this.queryArticle}${this.hash}`);
  }

}
