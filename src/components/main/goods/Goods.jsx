import React,{useContext} from 'react'
import GoodsCard from '../goodsCard/GoodsCard'
import { ShopContext } from '../../../context/context'
import style from './Goods.module.css'
const Goods = () => {
  const { goods = []} = useContext(ShopContext);
  if(!goods.products.length){
    return <h2>Nothing is here</h2>
  }
  return (
    <div className={style.goods}>
      {goods.products.map(item => (
      <GoodsCard key = {item.id}{...item}/>
      ))}
    </div>
  )
}

export default Goods;