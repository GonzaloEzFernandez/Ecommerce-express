import { useContext } from "react"
import { showContext } from "../services/showProvider"
import { auth } from "../accesibilty/firebase"
import { signOut } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"

function SideBar() {
  const { showMenu } = useContext(showContext)

  const navigate = useNavigate()

  const handleLoginOut = async () => {
    try {
      const res = await signOut(auth)
      navigate("/")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav
      className={`transition-all z-20 w-28 h-screen bg-[#1E1D2A] flex flex-col justify-between rounded-r-xl top-0 fixed lg:left-0  ${
        showMenu ? "left-0 " : "-left-full"
      }`}
    >
      <div className="z-0">
        <ul className="pl-4">
          <li>
            <h1 className="my-3 text-center text-white font-bold text-2xl uppercase">
              Logo
            </h1>
          </li>
          <li className="flex justify-center text-[#EC7B6A] bg-[#252837] rounded-l-xl p-3">
            <Link
              to="/"
              className="p-3 bg-[#EC7C6A] text-white block rounded-xl"
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </li>
          <li className="flex justify-center hover:bg-[#252837] text-[#EC7B6A] rounded-l-xl p-3 group transition-colors">
            <Link
              className="p-3 block rounded-xl group-hover:bg-[#EC7C6A] group-hover:text-white transition-colors"
              to="/"
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
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </Link>
          </li>

          <li className="flex justify-center hover:bg-[#252837] text-[#EC7B6A] rounded-l-xl p-3 group transition-colors">
            <Link
              to="#"
              className="p-3 block rounded-xl group-hover:bg-[#EC7C6A] group-hover:text-white transition-colors"
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </li>
          <li className="flex justify-center hover:bg-[#252837] text-[#EC7B6A]  my-1 rounded-l-xl p-3 group transition-colors">
            <a
              onClick={handleLoginOut}
              className="p-3 block rounded-xl group-hover:bg-[#EC7C6A] group-hover:text-white transition-colors"
              href=""
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  )
}

export default SideBar
