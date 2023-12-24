import React from 'react'
import Goods from '../goods/Goods';
import style from './Content.module.css'
import { useEffect,useContext } from 'react';
import {API_URL} from '../../../config';
import Preloader from '../../preloader/Preloader';
import Basket from '../../basket/Basket';
import BasketList from '../../basket/basketList/BasketList';
import BasketAlert from '../../basket/basketAlert/BasketAlert';
import { ShopContext } from '../../../context/context';
const Content = () => {
    const {loading,order,isBasketShow,alertName,setGoods} = useContext(ShopContext);

    useEffect(function getGoods(){
      fetch(API_URL, {
      }).then(response => response.json()).then(data => {
        data && setGoods(data);
      })
      //eslint-disable-next-line
    },[])
  return (
    <div className={`container ${style.content}`}>
      <Basket quantity={order.length}/>
        {loading ? <Preloader/> : <Goods />}
        {isBasketShow ? <BasketList/> : null}
        {
          alertName && <BasketAlert/>
        }
    </div>
  )
}

export default Content;