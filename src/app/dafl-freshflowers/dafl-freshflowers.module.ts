
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DaflFreshFlowersRoutingModule } from './dafl-freshflowers-routing.module';
import { DaflFreshFlowersComponent } from './dafl-freshflowers.component';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    CommonModule,
    DaflFreshFlowersRoutingModule,
    // GalleryModule,
    LightboxModule,

  ],
  exports: [
    DaflFreshFlowersComponent
  ],
  declarations: [
    DaflFreshFlowersComponent,

  ],
})
export class DaflFreshFlowersModule { }
