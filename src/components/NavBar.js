import React from "react";
import { Carrito, ContenedorNav, ContLeft, Ubicacion } from "../styles/navbarStyle";

const NavBar = () => {
   return (
      <ContenedorNav>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1645300587/Tiendita_j86pv1.png"
            alt=""
         />
         <ContLeft>
            <Ubicacion>
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1645300587/Icons_zyl4iv.png"
                  alt=""
               />
               <span>México City Marriot Reforma Hotel</span>
            </Ubicacion>
            <hr />
            <Carrito>
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1645300587/Icons-carrito_jxplv9.png"
                  alt=""
               />
               <span>6</span>
            </Carrito>
         </ContLeft>
      </ContenedorNav>
   );
};

export default NavBar;
