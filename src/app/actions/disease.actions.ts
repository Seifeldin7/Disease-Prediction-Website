import { Action } from '@ngrx/store';
import { Disease } from '../models/disease.model';


export const GET_DISEASES = 'GET_DISEASES';

export class getDiseases implements Action {
  readonly type = GET_DISEASES;

  constructor(public payload: Disease) {}
}


export type DiseaseActions = getDiseases 
