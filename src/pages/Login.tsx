import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Login = (): JSX.Element => {
  return (
    <main className="mx-auto container h-[calc(100vh-70px)] flex justify-center items-center">
      <div className="flex flex-col justify-center gap-y-2">
        <form className="w-[300px] p-4 flex flex-col gap-y-2 border border-gray-800 shadow-lg">
          <h1 className="text-3xl text-gray-800 font-semibold">Login</h1>

          <label htmlFor="email" className="flex flex-col items-start text-gray-800">
            E-mail:
            <input type="email" name="email" id="email" placeholder="E.g: Kevin@correo.com" className="w-full p-2 border border-gray-800 outline-none" />
          </label>

          <label htmlFor="password" className="flex flex-col items-start text-gray-800">
            Password:
            <input type="password" name="password" id="password" placeholder="******" className="w-full p-2 border border-gray-800 outline-none" />
          </label>

          <button type="submit" className="mt-6 w-full py-2 flex justify-center items-center gap-x-2 text-white bg-gray-800 hover:cursor-pointer">
            Log in
            <IoLogIn className="text-2xl" />
          </button>
        </form>

        <p className="self-end text-gray-800 ">
          You do not have an account?<span> </span>
          <Link to="/auth/register" className="text-orange-600 underline">Register</Link>
        </p>
      </div>
    </main>
  );
};
