
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DaflEventRoutingModule } from './dafl-event-routing.module';
import { DaflEventComponent } from './dafl-event.component';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    CommonModule,
    DaflEventRoutingModule,
    // GalleryModule,
    LightboxModule,

  ],
  exports: [
    DaflEventComponent
  ],
  declarations: [
    DaflEventComponent,

  ],
})
export class DaflEventModule { }
