import { Link, NavLink } from "react-router-dom";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="mx-auto container py-4 flex justify-between items-center">
      <Link className="text-3xl text-gray-800 font-bold" to="/">
        Pizza<span className="font-semibold text-orange-600">ct</span>
      </Link>

      <div className="flex justify-center items-center gap-x-4">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-800"}`}>
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-800"}`}>
          Menu
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-x-2">
        <NavLink
          to="/login"
          className="px-6 py-2 text-orange-600 font-semibold border border-orange-600 bg-white hover:text-white hover:bg-orange-600">
          Login
        </NavLink>

        <NavLink
          to="/register"
          className="px-6 py-2 text-white font-semibold border border-gray-800 bg-gray-800">
          Register
        </NavLink>
      </div>
    </nav>
  );
};
