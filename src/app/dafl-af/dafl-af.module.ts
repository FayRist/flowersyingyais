
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DaflAfRoutingModule } from './dafl-af-routing.module';
import { DaflAfComponent } from './dafl-af.component';

import { GalleryModule } from '@ks89/angular-modal-gallery';

@NgModule({
  imports: [
    CommonModule,
    DaflAfRoutingModule,
    GalleryModule,
  ],
  exports: [
    DaflAfComponent
  ],
  declarations: [
    DaflAfComponent,

  ],
})
export class DaflAfModule { }
