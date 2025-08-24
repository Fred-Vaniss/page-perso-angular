import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { UrlService } from './services/url.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'Frédérick Van Isschot';

  constructor(private urlService: UrlService){}

  ngOnInit():void {

    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });

    this.urlService.init();

  }
}
