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
import { FunfactsComponent } from './funfacts/funfacts.component';
import { DownloadComponent } from './download/download.component';
import { VenueComponent } from './venue/venue.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { SalvattoreDirective } from './salvattore.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ProgramComponent,
    FunfactsComponent,
    DownloadComponent,
    VenueComponent,
    RegisterComponent,
    GalleryComponent,
    TestimonialComponent,
    SponsorsComponent,
    FooterComponent,
    SubfooterComponent,
    SalvattoreDirective
  ],
  imports: [
    RouterModule.forChild(
      rotas
    ),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
