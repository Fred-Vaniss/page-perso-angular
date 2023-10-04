import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

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

    this.languageChange.next(this.language)
    console.log(`Switched to ${this.language}`)
  }

  getLang(): string {
    return this.language;
  }

}
