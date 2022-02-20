import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "../components/Carrito";
import NavBar from "../components/NavBar";
import App from "../containter/App";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/carrito" element={<Carrito />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
