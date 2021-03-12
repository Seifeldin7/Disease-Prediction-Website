import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiseaseDetailComponent } from './disease-detail/disease-detail.component';
import { DiseaseListComponent } from './disease-list/disease-list.component';
import { DiseasePredictComponent } from './disease-predict/disease-predict.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatSidenavModule, MatRadioModule, MatSelectModule, MatOptionModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { diseaseReducer } from 'src/app/reducers/disease.reducers';
import { DiseaseEffects } from 'src/app/effects/disease.effects';
import { FieldEffects } from 'src/app/effects/field.effects';
import { fieldReducer } from 'src/app/reducers/field.reducers';


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
    MatIconModule,
    FormsModule,
    StoreModule.forFeature('diseases', diseaseReducer),
    StoreModule.forFeature('fields', fieldReducer),
    EffectsModule.forFeature([DiseaseEffects, FieldEffects])
  ],
  exports: [
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatOptionModule,
      
  ]
})
export class DashboardModule {}
