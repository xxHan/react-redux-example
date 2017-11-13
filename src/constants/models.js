import Immutable from 'immutable';

export const ItemState = Immutable.fromJS({
  'items': [],
  'item': {
    id: '',
    key: '',
    value: '',
    text: '',
    updatedAt: '',
    completed: false,
  }
});

