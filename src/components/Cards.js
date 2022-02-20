import { Button, Card, Modal } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import "../styles/styles.css";

const Span = styled.span`
   color: gray;
   text-decoration: line-through;
`;

const Cards = ({ imagen, precio, sindescuento, nombre }) => {
   //  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
   //  const [fullscreen, setFullscreen] = useState(true);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div>
         <Card className="card" style={{ width: "14rem" }}>
            <img
               variant="top"
               src="https://res.cloudinary.com/paolavbm/image/upload/v1645302869/samples/workshop2/percentage_z0tzsj.png"
               alt=""
               width={50}
            />
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
               <Card.Title className="precio">
                  ${precio} <Span>{sindescuento}</Span>
               </Card.Title>
               <Card.Text>{nombre}</Card.Text>
               <Button className="boton w-100" onClick={handleShow}>
                  Agregar
               </Button>
            </Card.Body>
         </Card>

         <>
            <Modal
               show={show}
               size="xl"
               aria-labelledby="example-custom-modal-styling-title"
               scrollable={true}
               onHide={handleClose}
            >
               <Modal.Header closeButton></Modal.Header>
               <Modal.Body>
                  <center>
                     <img src={imagen} width={250} alt="" />
                  </center>
                  <h1>{nombre}</h1>
                  <h3>${precio}</h3>
                  <span>Precios con IVA incluido</span>
                  <h6>Precio aproximado por pieza puede variar de acuerdo al peso real.</h6>
                  <div className="cant-prods">
                     <div>
                        <button>-</button>

                        <span>1kg</span>
                        <button>+</button>
                     </div>
                     <center>
                        <Button className="boton2 mx-auto" onClick={handleShow}>
                           Agregar
                        </Button>
                     </center>
                  </div>
               </Modal.Body>
            </Modal>
         </>
      </div>
   );
};

export default Cards;
