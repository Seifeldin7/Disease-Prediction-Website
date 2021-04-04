import * as DiseaseActions from '../actions/disease.actions';
import { Disease } from '../models/disease.model';
import * as fromApp from '../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    diseases: State,
}

export interface State {
    diseases: Disease[];
    prediction: number;
}

const initialState: State = {
    diseases: [],
    prediction: 0
};

export function diseaseReducer(state = initialState, action: DiseaseActions.DiseaseActions) {
    switch (action.type) {
        case DiseaseActions.SET_DISEASES:
            return {
                ...state,
                diseases: action.payload
            };
        case DiseaseActions.SET_PREDICTION:
            return {
                ...state,
                prediction: action.payload
            };
        default:
            return state;
    }
}
