import React from "react";

function CartPage({cartItems, setCartItems}) {
  
  const deleteItem = (itemId) => {
    const filteredItems = cartItems.filter(item => {
      return item.id !== itemId;
    });
 
    setCartItems(filteredItems);
  };

  const deleteAll = () => {
    setCartItems([]);
    window.alert('Cart empty!')
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.picture} alt="item picture" />
          <p>{item.description}</p>
          <p>{item.price}€</p>
          <button onClick={() => deleteItem(item.id)} className="btn-delete">
              Delete 
          </button>
        </div>
      ))}
      <button onClick={() => deleteAll()} className="btn-delete">
              Don't Buy! 
      </button>
    </div>
  );
}

export default CartPage;
