import { Component, Input, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { Gallery } from '../portfolio-list';

@Component({
  selector: '[app-modal-gallery]',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})

export class ModalGalleryComponent implements OnInit {

  @Input() gallery?: Gallery = null

  lang: string = "";
  galId: number = Math.floor(Math.random()*99999);

  constructor(public langService: LangService){}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang)
  }

  getThumb(img: string): string {
    return `assets/img/portfolio/gallery/${img}-thumb.jpg`
  }

  getHref(img: string, format: string): string {
    return `assets/img/portfolio/gallery/${img}.${format}`
  }

}
