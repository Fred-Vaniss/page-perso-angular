import {AfterViewInit, Component, OnInit} from '@angular/core';
import AOS from 'aos';
import { UrlService } from './services/url.service';
import {Lightbox} from "lightbox3";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Frédérick Van Isschot';

  constructor(private urlService: UrlService){}

  ngOnInit():void {

    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });

    this.urlService.init();

    Lightbox.init();

  }

  ngAfterViewInit():void {
    // Fix for Safari not scrolling to anchor when loading
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({behavior: 'instant'});
        }, 100)
      }
    }

    // Fix for AOS hiding on Safari
    setTimeout(() => {
      AOS.refresh();
    }, 300)
  }
}
