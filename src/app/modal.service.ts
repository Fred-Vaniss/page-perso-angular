import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PORTFOLIOLIST, PortfolioEntry } from './portfolio-list';


@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit {

  articles = PORTFOLIOLIST;
  lang = "";
  isModalShown = false;
  modalChange: Subject<PortfolioEntry> = new Subject<PortfolioEntry>()

  ngOnInit(): void {}

  openArticle(id: string) {
    const article = PORTFOLIOLIST.find(h => h.id === id);
    this.modalChange.next(article)
  }

  getArticle(id: string): PortfolioEntry {
    const article = PORTFOLIOLIST.find(h => h.id === id);
    return article;
  }
}
