import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

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


export function markdownOptionsFactory(): MarkedOptions {

  const renderer = new MarkedRenderer();
  const linkRenderer = renderer.link;

  renderer.link = (href,title,text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a role="link" tabindex="0" target="_blank" rel="nofollow noopener noreferrer" ');
  }

  return {
    renderer
  }

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
        provide: MarkedOptions,
        useFactory: markdownOptionsFactory
      }
    }),
    ModalRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
