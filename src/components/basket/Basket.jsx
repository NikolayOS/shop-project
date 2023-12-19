import React from 'react'
import style from './Basket.module.css'
const Basket = (props) => {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
  return (
    <div className={`#ffa726 orange lighten-1 white-text ${style.basket }`} onClick={handleBasketShow}>
        <i className='material-icons'>shopping_basket</i>
        {quantity ? <span className={style.basketQuantity}>{quantity}</span> : null}
    </div>
  )
}

export default Basket;