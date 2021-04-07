import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Disease } from '../../../models/disease.model';
import * as fromDisease from '../../../reducers/disease.reducers';
import * as DiseaseActions from '../../../actions/disease.actions';

@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.scss']
})
export class DiseaseListComponent implements OnInit {
  diseases: Observable<{diseases: Disease[]}> = this.store.select(state => state.diseases);

  constructor( private store: Store<fromDisease.FeatureState>) { }

  ngOnInit() {
    this.store.dispatch(new DiseaseActions.getDiseases());
  }
}
