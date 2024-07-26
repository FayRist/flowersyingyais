// import { PlanGracelandComponent } from './plan-graceland/plan-graceland.component';
import { FooterComponent } from '../footer/footer.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';

// import { FacilitiesComponent } from './facilities/facilities.component';
// import { SliderComponent } from './slider/slider.component';
// import { DetailLandingComponent } from './detail-landing/detail-landing.component';
// import { TypePlanComponent } from './type-plan/type-plan.component';
// import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';

// import { PanoramaBtnComponent } from './panorama-btn/panorama-btn.component';



const routes: Routes = [

  { path: '', component: LandingpageComponent,
    children: [
      {
        path: 'Product',
        component: ProductComponent,
      },
      {
        path: 'Gallery',
        component: GalleryComponent,
      },
      {
        path: ' AboutUs',
        component: AboutUsComponent,
      },
      { path: '', redirectTo: 'Product', pathMatch: 'full' },
      { path: '**', redirectTo: 'Product', pathMatch: 'full' }
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
