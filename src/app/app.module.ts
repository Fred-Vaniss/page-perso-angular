import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalContainerComponent } from './modal-container/modal-container.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    SkillsComponent,
    AboutComponent,
    TimelineComponent,
    PortfolioComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MarkdownModule.forRoot(),
    ModalRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
