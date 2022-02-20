import React from "react";
import { ContProd } from "../styles/carritoStyle";

const Prods = () => {
   return (
      <ContProd>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1644611144/cld-sample.jpg"
            alt=""
         />
         <div className="info-prods">
            <span>Aguacate Hass</span>
            <h4>$17.48</h4>
         </div>
         <div className="cant-prods">
            <button>-</button>
            <span>7</span>
            <button>+</button>
         </div>
      </ContProd>
   );
};

export default Prods;
