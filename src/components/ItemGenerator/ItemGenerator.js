import React from 'react';
import ReactDOM from 'react-dom';

const ItemGenerator = ({
  onChangeKey,
  onChangeValue,
  onCreateItem,
  item,
}) => (
  <div>
    <span>Key: </span>
    <input type="text" value={item.get('key')} onChange={onChangeKey} />
    <span>Value: </span>
    <input type="text" value={item.get('value')} onChange={onChangeValue} />
    <button onClick={onCreateItem}>送出</button>
  </div>
);

export default ItemGenerator;