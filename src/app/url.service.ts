import { Injectable } from '@angular/core';
import { LangService } from './lang.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UrlService{

  queryLang: string = '';
  hash: string = '';

  constructor(
    public langService: LangService,
    private location: Location
  ){}

  init(): void {

    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    
    const lang: string = urlParams.get("lang");

    this.hash = window.location.hash;

    if (lang === "fr" || lang === "en"){

      this.langService.setLang(lang);
      this.queryLang = `?lang=${lang}`;

    } else {
      
      this.queryLang = `?lang=fr`;
      this.updateUrl();

    }

    this.langService.languageChange.subscribe(lang => this.setQueryLang(lang));

  }

  setHash(hash: string): void {

    this.hash = `#${hash}`;

    this.updateUrl();

  }

  setQueryLang(lang: string): void {

    this.queryLang = `?lang=${lang}`;
    this.updateUrl();

  }

  updateUrl(): void {
    this.location.replaceState(`/${this.queryLang}${this.hash}`);

    console.log(this.hash);
    
  }

}
