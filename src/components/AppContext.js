// AppContext.js
import React, { createContext, useReducer, useContext, useState } from "react";

const AppContext = createContext();

const initialState = {
  items: [],
  fav: [],
  qty: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: action.payload };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "ADD_FAV":
      return { ...state, fav: [...state.fav, action.payload] };
    case "UPDATE_ITEM":
      return {
        ...state,
        fav: state.fav.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                price: action.payload.price,
                desc: action.payload.desc,
                image: action.payload.image,
                qty: state.qty + 1,
              }
            : item
        ),
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                price: action.payload.price,
                desc: action.payload.desc,
                image: action.payload.image,
                qty: state.qty + 1,
              }
            : item
        ),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        fav: state.fav.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_FAV":
      return {
        ...state,
        fav: [],
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sucessMsg, setSucessMsg] = useState(false);
  return (
    <AppContext.Provider value={{ state, dispatch, setSucessMsg, sucessMsg }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
