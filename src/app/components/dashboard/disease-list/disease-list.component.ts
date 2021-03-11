import { Component, OnInit } from '@angular/core';
import { Disease } from '../../../models/disease.model'
@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.scss']
})
export class DiseaseListComponent implements OnInit {
  opened: boolean = false;
  diseases: Disease[] = [
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] },
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] },
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] },
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] },
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] },
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] },
    { id: 1, name: 'diabetes', description: "Some quick example text to build on the card title and make up the bulk of the card's content.", image: '', fields: [] }
  ];
  constructor() { }

  ngOnInit() {
  }
  log(s) {
    console.log(s)
  }
}
