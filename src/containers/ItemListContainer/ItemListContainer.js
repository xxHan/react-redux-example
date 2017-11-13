import { connect } from 'react-redux';
import ItemList from '../../components/ItemList';

import {
  deleteItem,
} from '../../actions';

export default connect(
  (state) => ({
    items: state.getIn(['item', 'items'])
  }),
  (dispatch) => ({
    onDeleteItem: (index) => () => (
      dispatch(deleteItem({ index }))
    )
  })
)(ItemList);