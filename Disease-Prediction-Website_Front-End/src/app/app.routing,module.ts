import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
