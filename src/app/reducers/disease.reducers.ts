import * as DiseaseActions from '../actions/disease.actions';
import { Disease } from '../models/disease.model';
import * as fromApp from '../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    diseases: State
  }

export interface State {
    diseases: Disease[];
}

const initialState: State = {
    diseases: []
};

export function diseaseReducer(state = initialState, action: DiseaseActions.DiseaseActions) {
    switch (action.type) {
        case DiseaseActions.SET_DISEASES:
            return {
                ...state,
                diseases: action.payload
            };
        default:
            return state;
    }
}
