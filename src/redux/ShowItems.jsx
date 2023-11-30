import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './store/actions/item';

function ShowItems({ items, addItem }) {
  const newProduct = { name: "bus" };

  const handleAddItem = () => {
    addItem(newProduct);
  };

  return (
    <div>
      <h2>ShowItems</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Product</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowItems);
