import { createAction } from 'redux-actions';
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  RETRIEVE_ITEM,
  DELETE_ITEM,
  CHANGE_KEY,
  CHANGE_VALUE,
} from '../constants/actionTypes';

export const createItem = createAction(CREATE_ITEM);
export const updateItem = createAction(UPDATE_ITEM);
export const retrieveItem = createAction(RETRIEVE_ITEM);
export const deleteItem = createAction(DELETE_ITEM);
export const changeKey = createAction(CHANGE_KEY);
export const changeValue = createAction(CHANGE_VALUE);