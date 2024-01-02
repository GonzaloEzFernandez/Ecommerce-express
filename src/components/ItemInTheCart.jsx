import { useContext, useState } from "react"
import { Context } from "../services/Context"

function ItemInTheCart({ id, price, thumbnail, title, quantity }) {
  const [, dispatch] = useContext(Context)
  const [desploy, setDesploy] = useState(false)

  const handleClick = () => {
    setDesploy(!desploy)
  }

  const handleDelete = id => {
    dispatch({
      type: "DELETE",
      payload: id,
    })
  }

  const handleIncrement = () => {
    console.log(id);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id
      }
    })
  }

  const handleDecrement = () => {
    console.log(id);
    dispatch({
      type: "DECREMENT",
      payload: {
        id
      }
    })
  }

  return (
    <div className="text-white  bg-[#252837] p-4 rounded-xl mb-2">
      <div className="grid grid-cols-6 mb-3">
        <div className="flex items-center col-span-4 gap-4">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src={thumbnail}
            alt=""
          />
          <div>
            <p>{title}</p>
            <p className="text-gray-300 font-bold">
              Price: <span className="font-normal"> ${price} </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col relative">
          <div 
          onClick={handleClick}
          className="flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transition-transform duration-300 ${
                  desploy && "rotate-180"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <span className="w-6 bg-transparent text-lg text-center outline-none">
              {quantity}
            </span>
          </div>
          {desploy && (
            <div className="flex flex-col  absolute top-5 left-0  bg-[#1E1D2B] mt-2 ">
              <button 
              onClick={handleIncrement}
              className="px-3 hover:bg-white hover:text-[#252837]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
              <button 
              onClick={handleDecrement}
              className="px-3 hover:bg-white hover:text-[#252837]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-[#252837] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="px-4">
          <span>${price}</span>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-6  items-center">
        <input
          className=" col-span-5 rounded-lg px-2 outline-none py-2 bg-[#1E1D2B]"
          type="text"
          placeholder="Order note..."
        />
        <div className="pl-2">
          <button
            onClick={() => handleDelete(id)}
            className="border ml-2 border-red-600 p-2 rounded-lg hover:bg-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemInTheCart
