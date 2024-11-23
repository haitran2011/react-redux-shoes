import React from 'react';
import Image from './Image';
import Typhography from './Typhography';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/app.actions';

function ShopItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: item.color }}
      >
        <Image src={item.image} />
      </div>
      <Typhography className="shopItem_name">{item.name}</Typhography>
      <Typhography className="shopItem_description">{item.description}</Typhography>
      <div className="shopItem_bottom">
        <Typhography className="shopItem_price">${item.price}</Typhography>
        <Typhography 
          className="shopItem_button"
          onClick={() => {
            const cartItem = {
              ...item,
              quanlity: 1
            }
            dispatch(addCartItem(cartItem));
          }}
        >
          ADD TO CART
        </Typhography>
      </div>
    </div>
  )
}

export default ShopItem