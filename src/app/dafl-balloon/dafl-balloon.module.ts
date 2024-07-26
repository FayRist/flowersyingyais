
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DaflBalloonRoutingModule } from './dafl-balloon-routing.module';
import { DaflBalloonComponent } from './dafl-balloon.component';
import { LightboxModule } from 'ngx-lightbox';
// import { GalleryModule } from '@ks89/angular-modal-gallery';


@NgModule({
  imports: [
    CommonModule,
    DaflBalloonRoutingModule,
    LightboxModule,
    // GalleryModule,
  ],
  exports: [
    DaflBalloonComponent
  ],
  declarations: [
    DaflBalloonComponent,

  ],
})
export class DaflBalloonModule { }
