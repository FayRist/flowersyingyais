import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
// import { ProductComponent } from './product/product.component';
// import { GalleryComponent } from './gallery/gallery.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ProductComponent } from './product/product.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { DaflEventComponent } from './dafl-event/dafl-event.component';
// import { DaflBalloonComponent } from './dafl-balloon/dafl-balloon.component';
// import { DaflAfComponent } from './dafl-af/dafl-af.component';
// import { LandingComponent } from './landing/landing.component';
import { DaflAfComponent } from './dafl-af/dafl-af.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CommonModule } from '@angular/common';
// import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AboutUsComponent,
    FooterComponent,
    // ProductComponent,
    // GalleryComponent,
    // DaflAfComponent,
    // LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // GalleryModule,
    LightboxModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
