import React,{useEffect} from 'react'
import style from './BasketAlert.module.css'

const BasketAlert = (props) => {
    const {name = "", handleCloseAlert = Function.prototype} = props;
    useEffect(() => {
      const timerId = setTimeout(handleCloseAlert, 3000);
      return () => {
        clearTimeout(timerId);
      }
    },[name])
  return (
    <div id="toast-container">
        <div className={`toast ${style.toastView}`}>{name} was added to basket</div>
    </div>
  )
}

export default BasketAlert;