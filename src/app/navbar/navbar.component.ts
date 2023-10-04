import { Component, HostListener, OnInit } from '@angular/core';

import { LangService } from '../lang.service';
import { LOCNAVBAR } from '../localization';

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

  constructor(public langService: LangService){}

  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void{
    this.getLang();
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
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  getLang(): void{
    this.lang = this.langService.getLang();
  }

  switchLang(): void{
    this.langService.switchLang();
    this.getLang();
  }


}
