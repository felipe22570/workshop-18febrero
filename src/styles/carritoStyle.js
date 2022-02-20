import styled from "styled-components";

export const CarritoStyle = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const ContProductosCarrito = styled.div`
   width: 40%;
   display: flex;
   flex-direction: column;

   padding: 20px;
`;

export const PagoCarrito = styled.div`
   display: flex;
   flex-direction: column;
   width: 40%;

   padding: 20px;

   .opcion {
      display: flex;
      flex-direction: column;
   }

   .input {
      height: 30px;
      border-radius: 5px;
      border: 0.5px solid black;
   }

   .boton {
      margin-top: 40px;
      width: 100%;
      height: 40px;
      display: flex;
      background-color: #0ac763;
      text-align: center;
      color: white;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 10px;
   }
`;

export const ContProd = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;

   img {
      width: 100px;
   }

   .cant-prods {
      display: flex;
      align-items: center;
      margin-left: 25%;
      gap: 10px;
      font-weight: 600;
      padding: 20px;

      button {
         padding: 5px 15px 5px 15px;
         font-size: 1.2rem;
         font-weight: 600;
         border: none;
         background-color: inherit;
         cursor: pointer;
      }
   }
`;
