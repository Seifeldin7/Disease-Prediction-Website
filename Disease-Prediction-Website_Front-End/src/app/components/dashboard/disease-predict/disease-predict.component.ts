import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Disease } from '../../../models/disease.model'
@Component({
  selector: 'app-disease-predict',
  templateUrl: './disease-predict.component.html',
  styleUrls: ['./disease-predict.component.scss']
})
export class DiseasePredictComponent implements OnInit {
  predictionForm: FormGroup;
  disease: Disease = { id: 1, name: 'Heart Disease', image: '', description: '', fields: [{type: 'text', label: 'Whatever'}] };
  fields: any[];
  constructor() { }

  ngOnInit() {
    this.predictionForm = new FormGroup({
      'disease-data': new FormArray([])
    });
    this.fields = this.disease.fields;
    for (let field of this.disease.fields) {
      const control = new FormControl(null);
      (<FormArray>this.predictionForm.get('disease-data')).push(control);
    }

  }

}
