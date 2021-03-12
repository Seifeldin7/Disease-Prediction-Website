import * as FieldActions from '../actions/field.actions';
import { Field } from '../models/field.model';
import * as fromApp from '../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    fields: State
  }

export interface State {
    fields: Field[];
}

const initialState: State = {
    fields: []
};

export function fieldReducer(state = initialState, action: FieldActions.FieldActions) {
    switch (action.type) {
        case FieldActions.SET_FIELDS:
            return {
                ...state,
                fields: action.payload
            };
        default:
            return state;
    }
}
