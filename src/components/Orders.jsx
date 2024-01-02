import { useContext, useState } from "react"
import { showContext } from "../services/showProvider"
import { Context } from "../services/Context"
import ItemInTheCart from "./ItemInTheCart"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from "axios"

function Orders() {
  const [preferenceID, setPreferenceID] = useState(null)
  const [state] = useContext(Context)
  console.log(state.cart)

  const ProductArray = state.cart?.map(product => ({
    title: product.title,
    unit_price: product.price,
    quantity: product.quantity,
  }))


  console.log(ProductArray)

  initMercadoPago("APP_USR-b46bb821-d5a0-4e44-9541-201e1ae14566", {
    locale: "es-AR",
  })
  const createPreference = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3001/create-preference",
        { products: ProductArray }
      )
      console.log(result.data)
      const { id } = result.data
      return id
    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy = async () => {
    const id = await createPreference()
    if (id) {
      setPreferenceID(id)
    }
  }

  const subTotal = state.cart
    ? state.cart.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    : 0

  const { handleShowOrder, showOrder } = useContext(showContext)

  return (
    <section
      className={`lg:w-4/12 lg:static fixed top-0 w-full h-full bg-[#1E1D2B] z-30 transition-all
    ${showOrder ? "right-0" : "-right-full"}`}
    >
      <div className="flex flex-col gap-3 px-3 h-full relative lg:mt-0 ">
        <div className="lg:hidden">
          <button
            onClick={handleShowOrder}
            className="bg-[#252837] absolute mt-2 p-4  rounded-full  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl text-center text-white mt-16 mb-4 lg:mt-6">
          Order #531
        </h1>

        <div className="grid grid-cols-6 text-white px-4 gap-2 ">
          <p className="col-span-4">Item</p>
          <div className="flex ">
            <p>Qty</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>

        <div className="scrollbar-container max-h-screen mb-[145px] h-full">
          {state.cart?.map(cartItem => (
            <ItemInTheCart key={cartItem.id} {...cartItem} />
          ))}
        </div>

        <div className="bg-[#252837] absolute left-0 bottom-0 w-full px-6 text-white z-30 ">
          <div className="flex justify-between py-3">
            <span className="text-gray-300">Discount</span>
            <span className="text-lg">$ 0</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-300">SubTotal</span>
            <span className="text-lg">$ {subTotal}</span>
          </div>
          <div>
            <button
              onClick={handleBuy}
              className="bg-[#EC7C6A] w-full py-2 rounded-xl"
            >
              Continue to payment
            </button>
            {preferenceID && (
              <Wallet initialization={{ preferenceId: preferenceID }} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders
