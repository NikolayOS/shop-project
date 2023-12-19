import React from 'react'
import GoodsCard from '../goodsCard/GoodsCard'
import style from './Goods.module.css'
const Goods = (props) => {
  const { goods = []} = props;
  if(!goods.products.length){
    return <h2>Nothing is here</h2>
  }
  return (
    <div className={style.goods}>
      {goods.products.map(item => (
      <GoodsCard key = {item.id}{...item} addToBasket={props.addToBasket}/>
      ))}
    </div>
  )
}

export default Goods;