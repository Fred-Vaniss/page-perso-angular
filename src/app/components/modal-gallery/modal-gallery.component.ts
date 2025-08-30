import { Component, Input, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { Gallery } from '../../data/portfolio-list';

@Component({
    selector: 'app-modal-gallery',
    templateUrl: './modal-gallery.component.html',
    styleUrls: ['./modal-gallery.component.scss'],
    standalone: false
})

export class ModalGalleryComponent implements OnInit {

  @Input({ required: true }) gallery: Gallery;
  @Input({ required: true }) artId: string;

  lang: string = "";
  galId: number = Math.floor(Math.random()*99999);

  constructor(public langService: LangService){}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => this.lang = lang);
  }

  getThumb(img: string): string {
    return `assets/portfolio/${this.artId}/gallery/${img}-thumb.jpg`;
  }

  getHref(img: string, format: string): string {
    return `assets/portfolio/${this.artId}/gallery/${img}.${format}`;
  }

}
