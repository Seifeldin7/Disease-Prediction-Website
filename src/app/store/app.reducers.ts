//import { ActionReducerMap } from '@ngrx/store';

import * as fromDisease from '../reducers/disease.reducers';

export interface AppState {
  disease: fromDisease.State,
}

export const reducers: any = {
    disease: fromDisease.diseaseReducer,
};
