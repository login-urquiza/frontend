export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-950">
      <div className="bg-white px-10 py-8 rounded-md text-black flex flex-col gap-5">
        <h1 className="text-4xl mb-5 font-semibold">Registro</h1>
        <form className="flex flex-col justify-center gap-6">
          <input
            type="text"
            name="dni"
            className="text-black text-[18px] px-2 py-4 rounded-md min-w-[400px] border-2 border-gray-500"
            placeholder="DNI"
          />
          <input
            type="email"
            name="email"
            className="text-black px-2 text-[18px] py-4 rounded-md min-w-[400px] border-2 border-gray-500"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="text-black px-2 text-[18px] py-4 rounded-md min-w-[400px] border-2 border-gray-500"
            placeholder="Contraseña"
          />
          <input
            type="password"
            name="re-password"
            className="text-black px-2 text-[18px] py-4 rounded-md min-w-[400px] border-2 border-gray-500"
            placeholder="Repetir Contraseña"
          />
          <button
            type="submit"
            className="p-2 bg-purple-950 text-white rounded-md text-xl"
          >
            Registrarse
          </button>
        </form>

        <button className="text-xl text-end text-purple-800">
          {"<- "}
          <span className=" underline">Ingresar</span>
        </button>
      </div>
    </div>
  );
};
