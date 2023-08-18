import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BcgComponent } from './bcg/bcg.component';
import { SocialComponent } from './social/social.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MylabelsComponent } from './mylabels/mylabels.component';
import { ChipModule } from 'primeng/chip';
import { ProjectsComponent } from './projects/projects.component';
import { PjspreviewComponent } from './pjspreview/pjspreview.component';
import { RouterModule, Routes } from "@angular/router";
import { Card, CardModule } from 'primeng/card';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  { path: '', component: BcgComponent },
  { path: 'projects', component: PjspreviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CardModule,
    SocialComponent,
    PjspreviewComponent,
    ProjectsComponent,
    MylabelsComponent,
    BcgComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
