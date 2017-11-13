import { connect } from 'react-redux';
import ItemGenerator from '../../components/ItemGenerator';

import {
  createItem,
  changeKey,
  changeValue,
} from '../../actions';

export default connect(
  (state) => ({
    item: state.getIn(['item', 'item'])
  }),
  (dispatch) => ({
    onChangeKey: (event) => (
      dispatch(changeKey({ key: event.target.value }))
    ),
    onChangeValue: (event) => (
      dispatch(changeValue({ value: event.target.value }))
    ),
    onCreateItem: () => {
      dispatch(createItem());
      dispatch(changeKey({ key: '' }));
      dispatch(changeValue({ value: '' }));
    }
  })
)(ItemGenerator);
