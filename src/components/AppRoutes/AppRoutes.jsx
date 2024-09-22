import { Route, Routes } from "react-router-dom";

import Login from "../Login/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<div>Home</div>} />

    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
