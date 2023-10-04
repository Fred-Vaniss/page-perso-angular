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

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    SkillsComponent,
    AboutComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
