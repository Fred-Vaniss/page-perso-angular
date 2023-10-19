import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  language: string = "fr";

  languageChange: Subject<string> = new Subject<string>();

  constructor() {}

  switchLang(): void {
    if (this.language === "fr") {
      this.language = "en";
    } else {
      this.language = "fr";
    }

    this.languageChange.next(this.language);
  }

  getLang(): string {
    return this.language;
  }

  setLang(lang: string): void {
    this.language = lang;
    this.languageChange.next(this.language);
  }

}
