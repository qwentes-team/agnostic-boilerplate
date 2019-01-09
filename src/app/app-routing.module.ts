import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Feature1Component} from './features/feature1/feature1.component';
import {Feature3Component} from './features/feature3/feature3.component';
import {Feature2Component} from './features/feature2/feature2.component';

const routes: Routes = [
  {
    path: 'uno',
    pathMatch: 'full',
    component: Feature1Component,
  },
  {
    path: 'due',
    pathMatch: 'full',
    component: Feature2Component,
  },
  {
    path: 'tre',
    pathMatch: 'full',
    component: Feature3Component,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'uno',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
