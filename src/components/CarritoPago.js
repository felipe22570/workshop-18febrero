import React from "react";
import { Button, Form } from "react-bootstrap";
import { PagoCarrito } from "../styles/carritoStyle";

const CarritoPago = () => {
   return (
      <PagoCarrito>
         <Form>
            <Form.Group className="mb-3 opcion" controlId="formBasicEmail">
               <Form.Label>Correo electrónico</Form.Label>
               <Form.Control type="email" className="input" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3 opcion" controlId="formBasicEmail">
               <Form.Label>Información de la tarjeta</Form.Label>
               <Form.Control type="email" className="input" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3 opcion" controlId="formBasicEmail">
               <Form.Label>Nombre de la tarjeta</Form.Label>
               <Form.Control type="email" className="input" />
            </Form.Group>
            <Button className="boton">Pagar</Button>
         </Form>
      </PagoCarrito>
   );
};

export default CarritoPago;
