function Reducer(state, action) {
  switch (action.type) {
    case "SET_STATE": {
      const products = action.payload
      const newState = {
        order: products.map(product => product.id),
        objects: products.reduce(
          (object, product) => ({ ...object, [product.id]: product }),
          {}
        ),
        filter: "all"
      }
      return newState
    }
    case "FILTER_PRODUCT": {
      return {
        ...state,
        filter: action.payload
      };
    }
    default: return state;
  }
}

export default Reducer
