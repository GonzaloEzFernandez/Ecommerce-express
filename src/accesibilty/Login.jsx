import { useState } from "react"
import { auth } from "./firebase"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import AuthForm from "../components/AuthForm"
import { useNavigate } from "react-router-dom"

function Login() {
  // Manejo del estado del formulario.
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  })

  const { email, password } = dataForm

  const handleChangeInput = (prop, value) => {
    setDataForm(dataForm => ({ ...dataForm, [prop]: value }))
  }

  // Manejo de los formularios signIn y singUp
  const [showSingUp, setSwowSingUp] = useState(false)
  const handleShowSingUp = () => {
    setSwowSingUp(!showSingUp)
  }

  // hook useNavigate
  const navigate = useNavigate()

  // Login con firebase
  // Manejo de SingIn
  const handleSingIn = async e => {
    e.preventDefault()
    try {
      const authWithsingIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      navigate("/")
      console.log("click sing In", authWithsingIn)
    } catch (error) {
      console.error("Error en el sing in", error)
    }
  }
  // Manejo de SingUp
  const handleSignUp = async e => {
    e.preventDefault()
    try {
      const authWithLogUp = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log("click en sing Up", authWithLogUp)
    } catch (error) {
      console.log("Error al crear una cuenta", error)
    }
  }
  // Manejo de login con Google.
  const handleLoginGoogle = async e => {
    e.preventDefault()
    try {
      const responseGoogle = new GoogleAuthProvider()
      return await signInWithPopup(auth, responseGoogle)
    } catch (error) {
      console.log(error)
    }
  }

  // Manejo de login con facebook.
  const handleLoginFacebook = async e => {
    e.preventDefault()
    try {
      const response = new FacebookAuthProvider()
      return await signInWithPopup(auth, response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#252837] text-white ">
      <div className="bg-[#1E1D2B] w-[500px] px-16 rounded-lg">
        <h1 className=" text-3xl font-bold my-6">Bienvenido</h1>
        {showSingUp ? (
          <AuthForm
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSingIn={handleSingIn}
            email={email}
            password={password}
            isLogin={true}
            handleSignUp={handleSignUp}
          />
        ) : (
          <AuthForm
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSingIn={handleSingIn}
            handleLoginGoogle={handleLoginGoogle}
            handleLoginFacebook={handleLoginFacebook}
            email={email}
            password={password}
            isLogin={false}
          />
        )}
        <div className="flex items-center gap-2 pb-10 py-3 ">
          <span className="text-gray-400">
            {showSingUp ? "¿Ya tienes una cuenta?" : "¿Primera vez en la app?"}
          </span>
          <button onClick={handleShowSingUp} className="hover:text-[#EC7B6A] ">
            {showSingUp ? "Sing In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
