import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DiseaseListComponent } from './disease-list/disease-list.component';
import { DiseasePredictComponent } from './disease-predict/disease-predict.component';


const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: DiseaseListComponent },
    { path: 'predict/:id', component: DiseasePredictComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule],

})
export class DashboardRoutingModule {}
