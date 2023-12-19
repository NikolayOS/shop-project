import React from 'react'
import Goods from '../goods/Goods';
import style from './Content.module.css'
import { useState,useEffect } from 'react';
import {API_URL} from '../../../config';
import Preloader from '../../preloader/Preloader';
import Basket from '../../basket/Basket';
import BasketList from '../../basket/basketList/BasketList';
import BasketAlert from '../../basket/basketAlert/BasketAlert';

const Content = () => {

    const [goods,setGoods] = useState([]);
    const [loading,setLoading] = useState(true);
    const [order,setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertName,setAlertName] = useState("");

    useEffect(function getGoods(){
      fetch(API_URL, {
        // headers: {
        //   "Authorization": API_KEY,
        // },
      }).then(response => response.json()).then(data => {
        data && setGoods(data);
        setLoading(false);
      })
    },[])
    function addToBasket(item){
      const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
      if(itemIndex < 0){
        const nemItem = {
          ...item,
          quantity: 1,
        }
        setOrder([...order, nemItem]);
      }else{
        const newOrder = order.map((orderItem,index) => {
          if(index === itemIndex){
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          }else{
            return orderItem;
          }
        })
        setOrder(newOrder);
      }
      setAlertName(item.title);
    }
    function handleBasketShow(){
      setIsBasketShow(!isBasketShow);
    }
    function removeFromBasket(itemId){
      const newOrderItem = order.filter(item => item.id !== itemId);
      setOrder(newOrderItem);
    }
    function minusQuantity(itemId){
      const changedOrder = order.map((item) => {
        if(item.id === itemId){
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity >= 0 ? newQuantity : 0
          }
        }else{
          return item;
        }
      })
      return setOrder(changedOrder);
    }
    function plusQuantity(itemId){
      const changedOrder = order.map((item) => {
        if(item.id === itemId){
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }else{
          return item;
        }
      })
      return setOrder(changedOrder);
    }
    function handleCloseAlert(){
      setAlertName("");
    }
  return (
    <div className={`container ${style.content}`}>
      <Basket quantity={order.length} handleBasketShow={handleBasketShow}/>
        {loading ? <Preloader/> : <Goods goods={goods} addToBasket={addToBasket}/>}
        {isBasketShow ? <BasketList order = {order} 
        handleBasketShow={handleBasketShow} 
        removeFromBasket={removeFromBasket}
        minusQuantity={minusQuantity}
        plusQuantity={plusQuantity}
        /> : null}
        {
          alertName && <BasketAlert name={alertName} handleCloseAlert={handleCloseAlert}/>
        }
    </div>
  )
}

export default Content;