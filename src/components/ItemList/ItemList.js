import React from 'react';
import ReactDOM from 'react-dom';

const ItemList = ({
  items,
  onDeleteItem,
}) => (
  <div>
    <ul>
    {
      items.map((item, index) => (
        <li key={index}>
          <button onClick={onDeleteItem(index)}>X</button>
          {item.get('key')}-{item.get('value')}
        </li>
      )).toJS()
    }
    </ul>
  </div>
);

export default ItemList;