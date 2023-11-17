function ItemInTheCart({price, thumbnail, title, quantity}) {


  return (
        <div className="text-white  bg-[#252837] p-4 rounded-xl mb-2">
      <div className="grid grid-cols-6 gap-2 mb-3">
        <div className="flex items-center col-span-4 gap-4">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src={thumbnail}
            alt=""
          />
          <div>
            <p>{title}</p>
            <span className="text-gray-300">{price}</span>
          </div>
        </div>
        <div className="flex ">
          <span className="pl-2">{quantity}</span>
        </div>
        <div>
          <span>{price}</span>
        </div>
      </div>

      <div className="grid grid-cols-6  items-center">
        <form className="col-span-5">
          <input
            className="  rounded-lg px-2 outline-none py-2 bg-[#1E1D2B]"
            type="text"
            placeholder="Order note..."
          />
        </form>
        <div className="pl-2">
          <button className="border border-red-600 p-2 rounded-lg hover:bg-red-600">
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
