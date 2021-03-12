import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/models/field.model';
import * as FieldActions from '../../../actions/field.actions';
import * as DiseaseActions from '../../../actions/disease.actions';
import * as fromField from '../../../reducers/field.reducers';
import * as fromDisease from '../../../reducers/disease.reducers';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-disease-predict',
  templateUrl: './disease-predict.component.html',
  styleUrls: ['./disease-predict.component.scss']
})
export class DiseasePredictComponent implements OnInit {
  predictionForm: FormGroup;
  diseaseId: number;
  fieldsObservable: Observable<{ fields: Field[] }> = this.fieldsStore.select(state => state.fields);
  fields: Field[];
  prediction: Observable<{ prediction: number }> = this.diseaseStore.select(state => state.diseases);

  constructor(private route: ActivatedRoute,
    private fieldsStore: Store<fromField.FeatureState>,
    private diseaseStore: Store<fromDisease.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.diseaseId = +params['id'];
    });

    this.predictionForm = new FormGroup({
      'disease-data': new FormArray([])
    });

    this.fieldsStore.dispatch(new FieldActions.getFields(this.diseaseId));

    this.fieldsObservable.subscribe((fields) => {
      this.fields = fields.fields;
      for (let field of this.fields) {
        const control = new FormControl(null);
        (<FormArray>this.predictionForm.get('disease-data')).push(control);
      }
    })

  }

  onPredict() {
    this.diseaseStore.dispatch(new DiseaseActions.predictDisease({
      diseaseId: this.diseaseId, formValues: this.predictionForm.value['disease-data']
    }));
    //this.predictionForm.reset();
  }
}
