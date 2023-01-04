import React from 'react'
import img from '../assets/plants.jpg';

import { AiOutlineWhatsApp } from 'react-icons/ai';


const Heroe = () => {
  return (
    <>
      <div class="container-fluid col-xxl-8 px-4 py-3">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-12  col-lg-4">
            <img src={img} class="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div class="col-lg-8">
            <h1 class="display-5 fw-bold lh-1 mb-3">Imprime tus archivos de la forma mas rapida</h1>
            <p class="lead">Todos los articulos de libreria para la universidad, secundario y primario. Contamos con juguetes para los mas chiquitos, papeles para regalos, mapas, calendarios y peluches. Mandanos tus archivos para imprimirlos en A4 y A3.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://api.whatsapp.com/send?phone=5491148275411" target="_blank" rel="noreferrer" className="contact__option"><button type="button" class="btn btn-outline-success btn-lg px-4 me-md-2"><AiOutlineWhatsApp/> WhatsApp</button>   </a>      
            </div>
          </div>
        </div>
      </div>






    </>
  )
}

export default Heroe