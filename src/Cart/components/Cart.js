import React from "react";
import Banner from "../../Shared/components/Banner";
import CartItem from "./CartItem";
import ButtonActions from "./CartButtonAction";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <React.Fragment>
      <Banner />
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{
            name: item.name,
            quantity: item.quantity,
            total: item.total,
            price: item.price,
            id: item.id,
            imageUrl: item.imageUrl,
          }}
        />
      ))}
      <ButtonActions />
    </React.Fragment>
  );
};
export default Cart;
