import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import * as FieldActions from '../actions/field.actions';
import { Observable, of } from 'rxjs';
import { FieldService } from '../services/field.service';
import * as fromField from '../reducers/field.reducers';


@Injectable()
export class FieldEffects {
    @Effect()
    loadedFields$: Observable<Action> = this.actions$.pipe(
        ofType(FieldActions.GET_FIELDS),
        switchMap(((action: any) => this.fieldService.getDiseaseFields(action.diseaseId)
            .pipe(
                map(fields => ({ type: FieldActions.SET_FIELDS, payload: fields })),
            )
        )
        )
    );

    constructor(private actions$: Actions,
        private fieldService: FieldService,
        private store: Store<fromField.FeatureState>) {
    }
}
