function Header() {

  return (
    <header className=" flex flex-col gap-6 mb-8">
      {/* Title and Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:px-2">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold ">Jeager Resto</h1>
          <span className="text-gray-400 text-sm">07 Noviembre 2023</span>
        </div>

        <form>
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-3 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className="pl-12 py-2 rounded-lg w-full outline-none text-white bg-[#1E1D2B]"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav>
        <div className="bg-[#EC7B6A] h-[1.5px] w-full"></div>
      </nav>
    </header>
  )
}

export default Header
