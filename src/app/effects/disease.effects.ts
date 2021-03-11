import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Disease } from '../models/disease.model';
import * as DiseaseActions from '../actions/disease.actions';
import { Observable, of } from 'rxjs';
import { DiseaseService } from '../services/disease.service';


@Injectable()
export class DiseaseEffects {
    @Effect()
    loadDiseases$: Observable<Action> = this.actions$.pipe(
        ofType(DiseaseActions.GET_DISEASES),
        switchMap(() => this.diseaseService.getAllDiseases()
            .pipe(
                map(diseases => ({ type: DiseaseActions.SET_DISEASES, payload: diseases }))
            )
        )
    );

    constructor(private actions$: Actions,
        private diseaseService: DiseaseService) {
    }
}
