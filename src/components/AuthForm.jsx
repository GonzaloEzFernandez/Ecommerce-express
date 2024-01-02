function AuthForm({
  email,
  password,
  handleChangeInput,
  handleSingIn,
  handleSignUp,
  isLogin,
  handleLoginGoogle,
  handleLoginFacebook,
}) {
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
        className="flex flex-col gap-4 bg-[#1E1D2B] "
      >
        <input
          className="py-3 px-2 rounded-lg outline-none text-[#1E1D2B]"
          type="email"
          value={email}
          onChange={e => handleChangeInput("email", e.target.value)}
          placeholder="Email"
        />
        <input
          className="py-3 px-2 rounded-lg outline-none text-[#1E1D2B]"
          type="password"
          value={password}
          onChange={e => handleChangeInput("password", e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={isLogin ? handleSignUp : handleSingIn}
          className="bg-[#ea6c59] mt-2 transition-colors mb-0 text-lg font-semibold text-white  py-3 px-2 rounded-lg"
        >
          {isLogin ? "Create account" : "Login"}
        </button>
        {!isLogin && (
          <>
          <div className="flex items-center w-full">
            <div className="h-[1px] w-1/2 bg-gray-500"></div>
            <span className="px-4">O</span>
            <div className="h-[1px] w-1/2 bg-gray-500"></div>
          </div>
           <div className="flex items-center">
           <button
              onClick={handleLoginGoogle}
              className="flex items-center justify-center  gap-2 bg-white text-black transition-colors  text-lg font-semibold  py-3 mr-2 rounded-lg w-1/2 "
            >
              
            <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
          
              Google
            </button>
            <button
              onClick={handleLoginFacebook}
              className="flex items-center gap-2 justify-center bg-[#1877F2] transition-colors  text-lg font-semibold text-white  py-3 ml-2 rounded-lg  w-1/2 "
            >
              
            <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" />
          
               Facebook
            </button>
           </div>
          </>
        )}
      </form>
    </>
  )
}

export default AuthForm
