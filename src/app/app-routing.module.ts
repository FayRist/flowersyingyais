import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
// import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'fresh-flowers',
    loadChildren: () => import('./dafl-freshflowers/dafl-freshflowers.module')
      .then(mod => mod.DaflFreshFlowersModule)
  },
  {
    path: 'artificial-flowers',
    loadChildren: () => import('./dafl-af/dafl-af.module')
      .then(mod => mod.DaflAfModule)
  },
  {
    path: 'wreath',
    loadChildren: () => import('./dafl-wreath/dafl-wreath.module')
      .then(mod => mod.DaflWreathModule)
  },
  {
    path: 'gifts-set',
    loadChildren: () => import('./dafl-giftsset/dafl-giftsset.module')
      .then(mod => mod.DaflGiveSetModule)
  },
  {
    path: 'balloon',
    loadChildren: () => import('./dafl-balloon/dafl-balloon.module')
      .then(mod => mod.DaflBalloonModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./dafl-event/dafl-event.module')
      .then(mod => mod.DaflEventModule)
  },
  { path: '**', component: LandingpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
