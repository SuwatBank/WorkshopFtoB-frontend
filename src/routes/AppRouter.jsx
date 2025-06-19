import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";

// React router is use for create route for each path
export default function AppRouter(){
  return(
    <Routes>
      {/* Public */}
      <Route path="/" element={<Layout/>}>
        {/* index attribute is use for choose page for show after parent element */}
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>

      {/* Private */}
      <Route path="admin" element={<LayoutAdmin/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/admin/manage" element={<Manage/>}/>
      </Route>
    </Routes>
  )
}