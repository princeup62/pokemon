import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaceHolder } from "./components/services/Actions/action";

function App() {
  const holderState = useSelector((state) => state.cartItems);
  const [inputItem, setInputItem] = useState(1);

  const dispatch = useDispatch();

  console.log(holderState);

  return (
    <>
      <div className="card">
        <img className="size-zoom" src={holderState.avatar} alt="" />
        <h1>Name: {holderState.name}</h1>
        <h2>Height: {holderState.height}</h2>
        <h2>Weight: {holderState.weight}</h2>
        <h1>{holderState.id}</h1>
      </div>

      <br />
      <br />

      <button
        onClick={() => {
          setInputItem(inputItem + 1);
          dispatch(fetchPlaceHolder(parseInt(inputItem)));
        }}
      >
        Add to cart
      </button>
    </>
  );
}

export default App;
