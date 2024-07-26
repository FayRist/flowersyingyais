
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DaflGiveSetRoutingModule } from './dafl-giftsset-routing.module';
import { DaflGiveSetComponent } from './dafl-giftsset.component';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    CommonModule,
    DaflGiveSetRoutingModule,
    // GalleryModule,
    LightboxModule,

  ],
  exports: [
    DaflGiveSetComponent
  ],
  declarations: [
    DaflGiveSetComponent,

  ],
})
export class DaflGiveSetModule { }
