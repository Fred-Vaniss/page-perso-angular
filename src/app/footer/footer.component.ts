import { Component } from '@angular/core';
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  footerLogo: string = "assets/img/logo-footer.svg"
  faGithub: IconDefinition = faGithub;
  faLinkedIn: IconDefinition = faLinkedin;
}
