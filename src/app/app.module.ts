import { NgModule } from '@angular/core';

import {BrowserModule, REMOVE_STYLES_ON_COMPONENT_DESTROY} from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MarkdownModule, MARKED_OPTIONS, MarkedOptions, MarkedRenderer} from 'ngx-markdown';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalGalleryComponent } from './components/modal-gallery/modal-gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarkdownModalLinkDirective } from './directives/markdown-modal-link.directive';
import {Tokens} from "marked";


export function markdownOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.link = (token: Tokens.Link) => {
    const href = token.href || '';
    const title = token.title ? ` title="${token.title}"` : '';
    const text = token.text || '';

    return `<a role="link" tabindex="0" target="_blank" rel="nofollow noopener noreferrer" href="${href}"${title}>${text}</a>`;
  };

  return { renderer };
}

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    SkillsComponent,
    AboutComponent,
    TimelineComponent,
    PortfolioComponent,
    ModalContainerComponent,
    ModalGalleryComponent,
    ContactComponent,
    FooterComponent,
    MarkdownModalLinkDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markdownOptionsFactory
      }
    }),
    ModalRoutingModule,
  ],
  providers: [
    { provide: REMOVE_STYLES_ON_COMPONENT_DESTROY, useValue: false }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
