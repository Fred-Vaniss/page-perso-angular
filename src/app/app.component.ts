import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frédérick Van Isschot';

  ngOnInit():void {

    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });
    
  }
}
