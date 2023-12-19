import React from 'react'
import BasketItem from '../basketItem/BasketItem';
import style from './BasketList.module.css'
const BasketList = (props) => {
    const {order = [], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        minusQuantity = Function.prototype,
        plusQuantity = Function.prototype
    } = props;
    const totalPrice = order.reduce((sum,el) => {
        return sum + el.price * el.quantity
    },0)
  return (
    <ul className={`collection z-depth-5  ${style.basketList}`}>
    <li className="collection-item #ff6d00 orange accent-4 active">Basket
    <span className={`secondary-content ${style.closeBasket}`} onClick={handleBasketShow}>
        <i className="material-icons ">cancel</i>
    </span>
    </li>
    {order.length ? order.map(item => (<BasketItem key={item.id} {...item} 
    minusQuantity={minusQuantity} 
    plusQuantity={plusQuantity}
    removeFromBasket={removeFromBasket}
    />))
    : <li className="collection-item">The basket is empty</li>
}
    <li className="collection-item #ff6d00 orange accent-4 active">Total Price : {totalPrice}
    <button className={`#fff9c4 yellow lighten-4 btn-small ${style.makeOrder}`}>make an order</button>
</li>
  </ul>
  )
}

export default BasketList;