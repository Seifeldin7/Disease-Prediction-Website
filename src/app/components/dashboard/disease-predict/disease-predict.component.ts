import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/models/field.model';
import { Disease } from '../../../models/disease.model';
import * as FieldActions from '../../../actions/field.actions';
import * as fromField from '../../../reducers/field.reducers';

@Component({
  selector: 'app-disease-predict',
  templateUrl: './disease-predict.component.html',
  styleUrls: ['./disease-predict.component.scss']
})
export class DiseasePredictComponent implements OnInit {
  predictionForm: FormGroup;
  disease: Disease = { id: 609, name: 'Heart Disease', image: '', description: '' };
  fieldsObservable: Observable<{ fields: Field[] }> = this.store.select(state => state.fields);;
  fields: Field[];
  constructor(private store: Store<fromField.FeatureState>) { }

  ngOnInit() {
    this.predictionForm = new FormGroup({
      'disease-data': new FormArray([])
    });
    this.store.dispatch(new FieldActions.getFields(this.disease.id));
    this.fieldsObservable.subscribe((fields) => {
      this.fields = fields.fields;
      for (let field of this.fields) {
        const control = new FormControl(null);
        (<FormArray>this.predictionForm.get('disease-data')).push(control);
      }
    })


  }

}
