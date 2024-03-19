import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
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
