import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiseaseDetailComponent } from './disease-detail/disease-detail.component';
import { DiseaseListComponent } from './disease-list/disease-list.component';
import { DiseasePredictComponent } from './disease-predict/disease-predict.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatSidenavModule, MatRadioModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { diseaseReducer } from 'src/app/reducers/disease.reducers';


@NgModule({
  declarations: [
    DiseaseDetailComponent,
    DiseaseListComponent,
    DiseasePredictComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    StoreModule.provideStore({diseases: diseaseReducer}),
    EffectsModule.forFeature([])
  ],
  exports: [
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatOptionModule,
      
  ]
})
export class DashboardModule {}
