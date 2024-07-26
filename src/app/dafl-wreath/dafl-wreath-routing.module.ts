// import { PlanGracelandComponent } from './plan-graceland/plan-graceland.component';
import { FooterComponent } from '../footer/footer.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';

// import { FacilitiesComponent } from './facilities/facilities.component';
// import { SliderComponent } from './slider/slider.component';
// import { DetailLandingComponent } from './detail-landing/detail-landing.component';
// import { TypePlanComponent } from './type-plan/type-plan.component';
// import { DaflWreathComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaflWreathComponent } from './dafl-wreath.component';
// import { PanoramaBtnComponent } from './panorama-btn/panorama-btn.component';

const routes: Routes = [
  {
    path: '',
    component: DaflWreathComponent,
    children: [],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaflWreathRoutingModule {}
