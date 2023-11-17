import { useContext } from "react"
import { showContext } from "../services/showProvider"
import { Context } from "../services/Context"
import ItemInTheCart from "./ItemInTheCart"

function Orders() {
  const [state] = useContext(Context)
  console.log(state.cart)

  const { handleShowOrder, showOrder } = useContext(showContext)

  return (
    <section
      className={`lg:w-3/12 lg:static fixed top-0 w-full h-full bg-[#1E1D2B] z-30 transition-all
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

        <h1 className="text-3xl text-white mt-16 lg:mt-6">Orders #934</h1>
        <div className="flex gap-6">
          <button className="p-2 px-3 bg-[#EC7C6A] text-white rounded-xl">
            Dine In
          </button>
          <button className="p-2 px-3 text-[#EC7C6A] bg-[#252837] border border-white rounded-xl">
            To go
          </button>
          <button className="p-2 px-3 text-[#EC7C6A] bg-[#252837] border border-white rounded-xl">
            Delivery
          </button>
        </div>

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
          {state.cart &&
            state.cart.map(cartItem => (
              <ItemInTheCart key={cartItem.id} {...cartItem}/>
            ))}
        </div>

        <div className="bg-[#252837] absolute left-0 bottom-0 w-full px-6 text-white z-30 ">
          <div className="flex justify-between py-3">
            <span className="text-gray-300">Discount</span>
            <span className="text-lg">$0</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-300">SubTotal</span>
            <span className="text-lg">$4.22</span>
          </div>
          <div>
            <button className="bg-[#EC7C6A] w-full py-2 rounded-xl">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders
