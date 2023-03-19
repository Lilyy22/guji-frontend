import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../pages/Auth/Login";
const Home = lazy(() => import("../pages/Home/index"));


const RoutesList = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/login" element={<Home />} />
      </Route>
    </Routes>
  );
  }
export default RoutesList;
