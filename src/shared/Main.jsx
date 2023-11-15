import Header from "./Header"
import Products from "../components/Products"
import Orders from "../components/Orders"
function Main({showOrder, handleShowOrder}) {

  return (
    <main className="flex w-full h-screen lg:pl-28">
      <section className="w-full lg:w-9/12 text-white p-6 scrollbar-container">
        <Header />
        <Products />
      </section>
      <section className={`lg:w-3/12 lg:static fixed top-0 w-full h-full bg-[#1E1D2B] z-30 transition-all ${showOrder ? "right-0" : "-right-full"}`}>
       {/* Orders */}

       <Orders handleShowOrder={handleShowOrder} />
      </section>
    </main>
  )
}

export default Main
