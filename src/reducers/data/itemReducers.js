import { handleActions } from 'redux-actions';
import { ItemState } from '../../constants/models';

import {
  CREATE_ITEM,
  UPDATE_ITEM,
  RETRIEVE_ITEM,
  DELETE_ITEM,
  CHANGE_KEY,
  CHANGE_VALUE,
} from '../../constants/actionTypes';

const itemReducers = handleActions({
  CREATE_ITEM: (state) => {
    let items = state.get('items').push(state.get('item'));
    return state.set('items', items)
  },
  DELETE_ITEM: (state, { payload }) => (
    state.set('items', state.get('items').splice(payload.index, 1))
  ),
  CHANGE_KEY: (state, { payload }) => {
    return state.mergeDeep({ 'item': payload })
  },
  CHANGE_VALUE: (state, { payload }) => {
    return state.mergeDeep({ 'item': payload })
  }
}, ItemState);

export default itemReducers;
