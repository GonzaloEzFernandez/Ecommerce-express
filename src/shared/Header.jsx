import { useContext } from "react"
import { Context } from "../services/Context"

function Header() {
  const [state, dispatch] = useContext(Context)

  const setFilter = newFilter => {
    dispatch({
      type: "FILTER_PRODUCT",
      payload: newFilter,
    })
  }

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
        <ul className="flex justify-between md:justify-start md:gap-12 border-b-2  py-4 px-4">
          <li>
            <a
              onClick={() => {
                setFilter("all")
              }}
              className={state.filter === "all" ? "text-[#EC7C6A]" : ""}
              href="#all"
            >
              all
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilter("smartphones")}
              className={state.filter === "smartphones" ? "text-[#EC7C6A]" : ""}
              href="#smartphones"
            >
              smartphones
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilter("laptops")}
              className={state.filter === "laptops" ? "text-[#EC7C6A]" : ""}
              href="#laptops"
            >
              laptops
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilter("fragrances")}
              className={state.filter === "fragrances" ? "text-[#EC7C6A]" : ""}
              href="#fragrances"
            >
              fragrances
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilter("skincare")}
              className={state.filter === "skincare" ? "text-[#EC7C6A]" : ""}
              href="#skincare"
            >
              skincare
            </a>
          </li>
        {/*   <li>
            <a
              onClick={() => setFilter("groceries")}
              className={state.filter === "groceries" ? "text-[#EC7C6A]" : ""}
              href="#groceries"
            >
              groceries
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilter("home-decoration")}
              className={state.filter === "home-decoration" ? "text-[#EC7C6A] " : ""}
              href="#home-decoration"
            >
              home-decoration
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
