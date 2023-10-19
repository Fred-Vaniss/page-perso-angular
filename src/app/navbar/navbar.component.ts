import { Component, HostListener, OnInit } from '@angular/core';

import { LangService } from '../lang.service';
import { LOCNAVBAR } from '../localization';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  loc = LOCNAVBAR;
  lang: string = "";

  isSticky: boolean = false;
  isMenuOpen: boolean = false;

  cvLink: string = `assets/cv-${this.lang}.pdf`;

  constructor(
    public langService: LangService,
    private urlService: UrlService
  ){}

  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void{
    this.lang = this.langService.getLang();
    this.langService.languageChange.subscribe(lang => {
      this.lang = lang
      this.cvLink = `assets/cv-${this.lang}.pdf`;
    });
    this.onScroll();
  }

  onScroll(){
    if (window.pageYOffset > window.innerHeight-60){
			this.isSticky = true;
		} else {
			this.isSticky = false;
		}
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  switchLang(): void{
    this.langService.switchLang();
  }

  navTo(anchor: string): void{
    document.getElementById(anchor).scrollIntoView({behavior: 'smooth'});
    this.urlService.setHash(anchor);
  }

}
