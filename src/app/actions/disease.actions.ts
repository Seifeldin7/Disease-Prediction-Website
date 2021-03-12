import { Action } from '@ngrx/store';
import { Disease } from '../models/disease.model';


export const GET_DISEASES = 'GET_DISEASES';
export const SET_DISEASES = 'SET_DISEASES';
export const PREDICT_DISEASE = 'PREDICT_DISEASE';
export const SET_PREDICTION = 'SET_PREDICTION';

export class getDiseases implements Action {
  readonly type = GET_DISEASES;
}
export class setDiseases implements Action {
  readonly type = SET_DISEASES;

  constructor(public payload: Disease[]) { }
}
export class predictDisease implements Action {
  readonly type = PREDICT_DISEASE;

  constructor(public payload: {diseaseId: number, formValues: any}) {}
}
export class setPrediction implements Action {
  readonly type = SET_PREDICTION;

  constructor(public payload: number) { }
}
export type DiseaseActions = getDiseases | setDiseases | predictDisease | setPrediction
