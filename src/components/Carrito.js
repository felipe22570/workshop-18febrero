import React from "react";
import { CarritoStyle } from "../styles/carritoStyle";
import CarritoPago from "./CarritoPago";

import CarritoProductos from "./CarritoProductos";

const Carrito = () => {
   return (
      <CarritoStyle>
         <CarritoProductos />
         <CarritoPago />
      </CarritoStyle>
   );
};

export default Carrito;
