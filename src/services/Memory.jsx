import { useEffect, useReducer } from "react"
import Reducer from "./Reducer"
import { Context } from "./Context"
import { useFetch } from "./useFetch"

const initialState = {
  order: [], // lista con ids
  objects: [], // mapa de cada ids con cada propiedad
}

function Memori({ children }) {
  const { data } = useFetch("https://dummyjson.com/products")

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_STATE", payload: data })
    }
  }, [data])

  const [state, dispatch] = useReducer(Reducer, initialState)

  console.log(initialState, state);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export default Memori
