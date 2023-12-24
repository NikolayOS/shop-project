import React, { useContext } from 'react'
import style from './Basket.module.css'
import { ShopContext } from '../../context/context';
const Basket = (props) => {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const quantity= order.length
  return (
    <div className={`#ffa726 orange lighten-1 white-text ${style.basket }`} onClick={handleBasketShow}>
        <i className='material-icons'>shopping_basket</i>
        {quantity ? <span className={style.basketQuantity}>{quantity}</span> : null}
    </div>
  )
}

export default Basket;