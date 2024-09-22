import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./components/AppRoutes/AppRoutes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
