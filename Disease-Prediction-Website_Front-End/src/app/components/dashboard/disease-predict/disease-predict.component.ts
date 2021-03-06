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
  diseases: any = [{ type: 'text' }, { type: 'radio' }]
  constructor() { }

  ngOnInit() {
    this.predictionForm = new FormGroup({
      'disease-data': new FormArray([])
    });
    for (let disease in this.diseases) {
      console.log(disease)
      const control = new FormControl(null);
      (<FormArray>this.predictionForm.get('disease-data')).push(control);
    }

  }

}
