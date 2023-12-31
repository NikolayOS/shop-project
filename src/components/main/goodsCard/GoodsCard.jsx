import React,{useContext} from "react";
import { ShopContext } from "../../../context/context";
import style from './GoodsCard.module.css'
const GoodsCard = (props) => {
  const {
    id,
    title,
    description,
    price,
  } = props;
  const {addToBasket} = useContext(ShopContext)
  return (
        <div className={`card ${style.card}`} id = {id}>
          <div className="card-image">
            <img src={props.images[0]} alt={title}/>
            <span className="card-title" style={{color: "black", position: "relative"}}>{title}</span>
          </div>
          <div className={`card-content ${style.cardContent}`}>
            <p>{description}</p>
          </div>
          <div className="card-action">
          <button className="btn #ffc107 amber" style={{color: "black"}} onClick={() => addToBasket({id,title,price})}>Buy</button>
          <span className="right">{price}$</span>
          </div>
        </div>
  );
};

export default GoodsCard;
