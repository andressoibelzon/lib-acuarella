import React from 'react'
import { AiOutlineWhatsApp, AiOutlineShopping} from 'react-icons/ai';
import { FiPrinter } from 'react-icons/fi';

const Cards = () => {
  return (

    <>

<div className="container-fluid col-xxl-8 px-4 py-3 text-center" >
<div className="row row-cols-1 row-cols-md-3 g-4 py-5">
  <div className="col">
    <div className="card h-100" id='card-container'>
    <h3 className="card-title mt-3">1</h3>
      <div className="card-body">
        <h5 className="card-title">Mandanos un WhatsApp</h5>
        <p className="card-text">Envialo a +54 9 11 4827-5411
Especifica si es en A3 o A4, simple cara o ambas caras y toda otra informacion que creas necesaria. En blanco y negro.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><AiOutlineWhatsApp/></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" id='card-container'>
    <h3 className="card-title mt-3">2</h3>
      <div className="card-body">
        <h5 className="card-title">Imprimimos tus hojas</h5>
        <p className="card-text">Lo antes posible y segun tus requerimientos. Te avisaremos cuando lo puedes venir a retirar.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><FiPrinter/></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" id='card-container'>
    <h3 className="card-title mt-3">3</h3>
      <div className="card-body">
        <h5 className="card-title">¡Acercate a retirarlos!</h5>
        <p className="card-text">Lo podes venir a retirar en Aguero 1784, Barrio de Recoleta, CABA.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><AiOutlineShopping/></small>
      </div>
    </div>
  </div>
</div>
</div>
</>

  )
}

export default Cards