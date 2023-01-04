import React from 'react'
import card1 from '../assets/muresco.jpg'
import card2 from '../assets/autora4.jpg'
import card3 from '../assets/avon.jpg'
import { AiOutlineWhatsApp } from 'react-icons/ai';


const Products = () => {
  return (
    <>
      <div className="container-fluid col-xxl-8 px-4 py-5">

        {/* <!-- Title --> */}
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="mb-0">Productos destacados</h2>
          </div>
        </div>

        <div class="row g-4">
          {/* <!-- Hotel item --> */}


          <div class="col-sm-6 col-xl-4">
            <div class="card card-img-scale overflow-hidden bg-transparent border-white">
              {/* <!-- Image and overlay --> */}
              <div class="card-img-scale-wrapper rounded-3">
                {/* <!-- Image --> */}
                <img src={card1} class="card-img" alt="muresco"></img>
                {/* <!-- Badge --> */}
                <div class="position-absolute bottom-0 start-0 p-3">
                </div>
              </div>
              {/* <!-- Card body --> */}
              <div class="card-body px-2">
                {/* <!-- Title --> */}
                <h5 class="card-title">Papel Muresco</h5>
                {/* <!-- Price and rating --> */}
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="text-success mb-0"><small class="fw-light">Mas informacion consultar por WhatsApp</small> </h6>
                  <a href="https://api.whatsapp.com/send?phone=5491148275411" target="_blank" rel="noreferrer" className="contact__option" id='whatsapp'><h6 class="mb-0"><AiOutlineWhatsApp id='whatsapp'/></h6></a>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>



          {/* <!-- Hotel item --> */}
          <div class="col-sm-6 col-xl-4">
            {/* <!-- Card START --> */}
            <div class="card card-img-scale overflow-hidden bg-transparent border-white">
              {/* <!-- Image and overlay --> */}
              <div class="card-img-scale-wrapper rounded-3">
                {/* <!-- Image --> */}
                <img src={card2} class="card-img" alt="autor a4"></img>
                {/* <!-- Badge --> */}
                <div class="position-absolute bottom-0 start-0 p-3">
                </div>
              </div>

              {/* <!-- Card body --> */}
              <div class="card-body px-2">
                {/* <!-- Title --> */}
                <h5 class="card-title">Resma A4 Autor</h5>
                {/* <!-- Price and rating --> */}
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="text-success mb-0"><small class="fw-light">Mas informacion consultar por WhatsApp</small> </h6>
                  <a href="https://api.whatsapp.com/send?phone=5491148275411" target="_blank" rel="noreferrer" className="contact__option" id='whatsapp'><h6 class="mb-0" ><AiOutlineWhatsApp /></h6></a>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>

          {/* <!-- Hotel item --> */}
          <div class="col-sm-6 col-xl-4">
            {/* <!-- Card START --> */}
            <div class="card card-img-scale overflow-hidden bg-transparent border-white">
              {/* <!-- Image and overlay --> */}
              <div class="card-img-scale-wrapper rounded-3">
                {/* <!-- Image --> */}
                <img src={card3} class="card-img" alt="avon"></img>
                {/* <!-- Badge --> */}
                <div class="position-absolute bottom-0 start-0 p-3">
                </div>
              </div>

              {/* <!-- Card body --> */}
              <div class="card-body px-2">
                {/* <!-- Title --> */}
                <h5 class="card-title">Cuaderno Avon Cuadriculado y Rayado</h5>
                {/* <!-- Price and rating --> */}
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="text-success mb-0"><small class="fw-light">Mas informacion consultar por WhatsApp</small> </h6>
                  <a href="https://api.whatsapp.com/send?phone=5491148275411" target="_blank" rel="noreferrer" className="contact__option" id='whatsapp'><h6 class="mb-0"><AiOutlineWhatsApp id='whatsapp'/></h6></a>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>

          {/* <!-- Hotel item --> */}

        </div>
        {/* <!-- Row END --> */}
      </div>



    </>
  )
}

export default Products