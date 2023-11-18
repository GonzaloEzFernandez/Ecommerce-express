// Reducer.js
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
        filter: "all",
        cart: [],
      }
      return newState
    }

    case "FILTER_PRODUCT": {
      return {
        ...state,
        filter: action.payload,
      }
    }

    case "ADD_TO_CART": {
      const product = action.payload;

      const productIndexCart = state.cart.findIndex(
        item => item.id === product.id
      )

      if (productIndexCart !== -1) {
        const updateState = [...state.cart]
        updateState[productIndexCart].quantity += 1
        return {
          ...state,
          cart: updateState,
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        }
      }
    }

    case "DELETE": {
      const id = action.payload
      const newCart = state.cart.filter(item => item.id !== id)
      return {
        ...state,
        cart: newCart,
      }
    }

    default:
      return state
  }
}

export default Reducer
