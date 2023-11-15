import { useContext } from "react"
import { Context } from "../services/Context"
import ProductCart from "./productCart"

function Products() {
  const [state] = useContext(Context);

  // Filtrar los productos según el estado del filtro
  const filteredProducts = state.filter === "all"
    ? Object.values(state.objects)
    : Object.values(state.objects).filter(product => product.category === state.filter);
  
  return (
    <>
      <div className="flex items-center justify-between mb-16 z-0">
        <h2 className="text-lg">Choose Dishes</h2>
        <select
          className="py-2 px-2 rounded-lg outline-none text-white bg-[#1E1D2B]"
          name="dine"
          id="dine"
        >
          <option className="bg-[#1F1C2A]" value="Cordoba">
            Cordoba
          </option>
          <option className="bg-[#1F1C2A]" value="Buenos Aires">
            Buenos Aires
          </option>
          <option className="bg-[#1F1C2A]" value="Santa Fe">
            Santa Fe
          </option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCart key={product.id} {...product}></ProductCart>
        ))}
      </div>
    </>
  )
}

export default Products
