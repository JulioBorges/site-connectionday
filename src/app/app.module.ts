import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PreloadComponent } from './preload/preload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { HighlightComponent } from './highlight/highlight.component';
import { InfoComponent } from './info/info.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { ProgramComponent } from './program/program.component';

const rotas: Routes = [
  {
    path: 'speaker-detail',
    component: SpeakerDetailComponent
  }//, { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PreloadComponent,
    NavbarComponent,
    SliderComponent,
    HighlightComponent,
    InfoComponent,
    SpeakersComponent,
    SpeakerDetailComponent,
    ProgramComponent
  ],
  imports: [
    RouterModule.forChild(
      rotas
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
