import { toast } from "sonner"

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
        filter: {
          category: "all",
          serchTerm: "",
        },
        cart: [],
        user: null,
      }
      return newState
    }

    case "FILTER_SERCH_TERM": {
      return {
        ...state,
        filter: {
          ...state.filter,
          serchTerm: action.payload,
        },
      }
    }

    case "FILTER_CATEGORY": {
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload,
        },
      }
    }

    case "DECREMENT": {
      const id = action.payload.id

      const productIndexCart = state.cart.findIndex(item => item.id === id)
      toast.error(`Se elimino ${productIndexCart.title} del carrito`)

      if (productIndexCart !== -1) {
        const deletedProduct = state.cart[productIndexCart]
        toast.error(`Se eliminó ${deletedProduct.title} del carrito`)

        const updateState = [...state.cart]
        updateState[productIndexCart].quantity -= 1

        if (updateState[productIndexCart].quantity === 0) {
          updateState.splice(productIndexCart, 1)
        }

        return {
          ...state,
          cart: updateState,
        }
      } else {
        return state
      }
    }

    case "ADD_TO_CART": {
      const product = action.payload

      const productIndexCart = state.cart.findIndex(
        item => item.id === product.id
      )
      toast.success(`Se añadio al ${product.title} carrito`)
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
      const product = state.cart.find(item => item.id === id)
      if (product) {
        toast.error(`Se elimino ${product.title} del carrito`)
      }
      const deleteProduct = state.cart.filter(item => item.id !== id)
      return {
        ...state,
        cart: deleteProduct,
      }
    }

    case "LOGIN": {
      const isLogin = action.payload
      return {
        ...state,
        user: isLogin,
      }
    }

    case "LOGOUT": {
      const isLogaut = null
      return {
        ...state,
        user: isLogaut,
      }
    }

    default:
      return state
  }
}

export default Reducer
