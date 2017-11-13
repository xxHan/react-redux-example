import React from 'react';
import ReactDOM from 'react-dom';
import ItemGeneratorContainer from '../../containers/ItemGeneratorContainer';
import ItemListContainer from '../../containers/ItemListContainer';

const Main = () => (
  <div>
    <ItemListContainer />
    <ItemGeneratorContainer />
  </div>
);

export default Main;