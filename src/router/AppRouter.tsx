import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components"
import { Home, Login, Menu, Register } from "../pages"

const AppRouter = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
