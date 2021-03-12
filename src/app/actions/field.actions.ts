import { Action } from '@ngrx/store';
import { Field } from '../models/field.model';


export const GET_FIELDS = 'GET_FIELDS';
export const SET_FIELDS = 'SET_FIELDS';

export class getFields implements Action {
  readonly type = GET_FIELDS;

  constructor(public diseaseId: number) {}
}
export class setFields implements Action {
    readonly type = SET_FIELDS;
  
    constructor(public payload: Field[]) {}
  }

export type FieldActions = getFields | setFields
