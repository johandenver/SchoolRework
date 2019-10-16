import React from "react";

function List(props) {
  console.log('props', props);
  const {
    groceries
  } = props;
  return (
    <ul className="list-group">
      {
        groceries.map(product => <li key={product.id}>Item Name: {product.name}</li>)
      }
    </ul>
  );
}

export default List;
