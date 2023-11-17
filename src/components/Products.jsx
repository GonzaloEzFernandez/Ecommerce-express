import { useContext } from "react"
import { Context } from "../services/Context"

import Header from "../shared/Header"

function Products() {
  const productCategorys = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ]
  const [state, dispatch] = useContext(Context);

  const setFilter = newCategory => {
    dispatch({
      type: "FILTER_PRODUCT",
      payload: newCategory,
    })
  }

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }

  const productCategory =
    state.filter === "all"
      ? Object.values(state.objects)
      : Object.values(state.objects).filter(
          product => product.category === state.filter
        )
        

  return (
    <section className="w-full lg:w-9/12 text-white p-6 scrollbar-container">
      <Header />

      <div className="flex items-center justify-between mb-16 z-0">
        <h2 className="text-lg">Products available</h2>
        <select
          className="py-2 px-2 rounded-lg outline-none text-white bg-[#1E1D2B]"
          name="product"
          id="product"
          value={state.filter}
          onChange={e => setFilter(e.target.value)}
        >
          {productCategorys.map(product => (
            <option value={product} key={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productCategory.map(product => (
          <div 
          key={product.id}
          className="flex flex-col justify-center relative items-center z-0 bg-[#1E1D2B] p-5 rounded-xl mb-8 transition-shadow hover:shadow-xl">
          <img
            className="w-40 h-40 object-cover -mt-14 rounded-full shadow-2xl"
            src={product.thumbnail}
            alt="product-image"
          />
          <p className="text-white py-3">
            {product.title} - ${product.price}
          </p>
          <button
          onClick={() => handleAddToCart(product)}
          className="text-[#EC7B6A] hover:text-white hover:bg-[#EC7B6A] p-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Products
