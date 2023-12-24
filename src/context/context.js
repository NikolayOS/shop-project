import { createContext,useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ""
}
export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer,initialState);
    value.handleBasketShow = () => {
        dispatch({type: "BASKET_SHOW"})
    }
    value.closeAlert = () => {
        dispatch({type: "CLOSE_ALERT"})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type: "REMOVE_FROM_BASKET",payload: {id: itemId}})
    }
    value.addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET",payload: item})
    }
    value.minusQuantity = (itemId) => {
        dispatch({type: "MINUS_QUANTITY", payload: {id : itemId} })
    }
    value.plusQuantity = (itemId) => {
        dispatch({type: "PLUS_QUANTITY", payload: {id : itemId} })
    }
    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload : data})
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}