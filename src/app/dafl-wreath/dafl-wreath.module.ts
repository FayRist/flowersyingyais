
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DaflWreathRoutingModule } from './dafl-wreath-routing.module';
import { DaflWreathComponent } from './dafl-wreath.component';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    CommonModule,
    DaflWreathRoutingModule,
    // GalleryModule,
    LightboxModule,

  ],
  exports: [
    DaflWreathComponent
  ],
  declarations: [
    DaflWreathComponent,

  ],
})
export class DaflWreathModule { }
