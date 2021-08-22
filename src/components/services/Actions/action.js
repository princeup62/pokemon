const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const fetchPlaceHolder = (num) => {
  return async function (dispatch) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    console.log(data);
    await dispatch(
      addToCart({
        name: data.name,
        height: data.height,
        weight: data.weight,
        avatar: data.sprites.back_default,
        id: data.id,
      })
    );
  };
};

export default addToCart;
