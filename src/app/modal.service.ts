import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalChange, PORTFOLIOLIST } from './portfolio-list';


@Injectable({
  providedIn: 'root'
})

export class ModalService implements OnInit {

  articles = PORTFOLIOLIST;
  modalChange: Subject<ModalChange> = new Subject<ModalChange>();

  ngOnInit(): void {}

  openArticle(id: string) {
    let article = PORTFOLIOLIST.find(h => h.id === id);
    let doUpdateUrl = true
    
    if (!article) {

      article = PORTFOLIOLIST.find(h => h.id === "error")
      doUpdateUrl = false

    }

    this.modalChange.next({
      article: article,
      doUpdateUrl: doUpdateUrl
    })

  }
}
