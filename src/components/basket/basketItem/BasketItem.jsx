import React from 'react'
import style from './BasketItem.module.css'
const BasketItem = (props) => {
    const {
        id,
        title,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        minusQuantity = Function.prototype,
        plusQuantity = Function.prototype,
    } = props;
  return (
    <li className={`collection-item ${style.item}`}>
        {title} x 
        <span><button className={`waves-effect btn-small #ff6d00 orange accent-4 ${style.quantityBtn} 
        ${quantity < 1 ? "disabled" : null}`} onClick={()=>minusQuantity(id)}
        >-</button></span>
        {quantity}
        <span><button className={`waves-effect btn-small #ff6d00 orange accent-4 ${style.quantityBtn}`} 
        onClick={()=>plusQuantity(id)}
        >+</button></span>
            = {price*quantity}
        <span className={`secondary-content ${style.cancelBtn}`} onClick={()=> removeFromBasket(id)}>
        <i className="material-icons ">cancel</i>
        </span>
    </li>
  )
}

export default BasketItem;