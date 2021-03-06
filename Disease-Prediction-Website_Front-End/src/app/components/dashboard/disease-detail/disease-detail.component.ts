import { Component, Input, OnInit } from '@angular/core';
import { Disease } from '../../../models/disease.model'
@Component({
  selector: 'app-disease-detail',
  templateUrl: './disease-detail.component.html',
  styleUrls: ['./disease-detail.component.scss']
})
export class DiseaseDetailComponent implements OnInit {
  opened: boolean = false;
  @Input()
  disease: Disease;
  constructor() { }

  ngOnInit() {
  }

}
