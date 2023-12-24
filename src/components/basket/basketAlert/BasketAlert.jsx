import React,{useContext, useEffect} from 'react'
import style from './BasketAlert.module.css'
import { ShopContext } from '../../../context/context';

const BasketAlert = (props) => {
    const {alertName = "", handleCloseAlert = Function.prototype} = useContext(ShopContext);
    useEffect(() => {
      const timerId = setTimeout(handleCloseAlert, 3000);
      return () => {
        clearTimeout(timerId);
      }
      //eslint-disable-next-line
    },[alertName])
  return (
    <div id="toast-container">
        <div className={`toast ${style.toastView}`}>{alertName} was added to basket</div>
    </div>
  )
}

export default BasketAlert;