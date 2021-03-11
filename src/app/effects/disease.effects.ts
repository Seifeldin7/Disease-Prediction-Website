import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Disease } from '../models/disease.model';
import * as DiseaseActions from '../actions/disease.actions';
import { Observable, of } from 'rxjs';
import { DiseaseService } from '../services/disease.service';


@Injectable()
export class DiseaseEffects {

    loadDiseases$: Observable<Action> = createEffect(
        (): any => this.actions$.pipe(
            ofType(DiseaseActions.getDiseases),
            switchMap(() => this.diseaseService.getAllDiseases()
                .pipe(
                    map(diseases => ({ type: DiseaseActions.GET_DISEASES, payload: diseases }))
                )
            )
        )
    );

    constructor(private actions$: Actions,
        private diseaseService: DiseaseService) {
    }
}
