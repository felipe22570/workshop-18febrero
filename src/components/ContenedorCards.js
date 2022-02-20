import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContCardsStyle } from "../styles/contCardsStyle";
import Cards from "./Cards";

const H2 = styled.h4`
   margin: 100px 0 20px 5%;
`;

const ContenedorCards = () => {
   const url = "https://back-workshop18febrero.herokuapp.com/productos";

   const [productos, setProductos] = useState([]);

   const getData = () => {
      axios
         .get(url)
         .then((response) => {
            setProductos(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <H2>Ofertas</H2>
         <ContCardsStyle>
            {productos.map((u) => (
               <Cards
                  imagen={u.imagen}
                  precio={u.precio}
                  sindescuento={u.sindescontar}
                  nombre={u.nombre}
               />
            ))}
         </ContCardsStyle>
         <H2>Los más populares</H2>
         <ContCardsStyle>
            {productos.map((u) => (
               <Cards
                  imagen={u.imagen}
                  precio={u.precio}
                  sindescuento={u.sindescontar}
                  nombre={u.nombre}
               />
            ))}
         </ContCardsStyle>
      </div>
   );
};

export default ContenedorCards;
