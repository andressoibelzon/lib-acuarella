import React from 'react';
// import { GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';


// const Map = withScriptjs(withGoogleMap((props) => {
//   return (
//     <>
//       <GoogleMap
//         apiKey={"AIzaSyAon8wb3DsIBjWWxxgcr0SQOsZy5FLVr_A"}
//         style={{ height: "500px", width: "370px" }}
//         defaultZoom={10}
//         defaultCenter={{
//           lat: -34.138,
//           lng: 1.546,
//         }}
//         markers={{
//           lat: -34.138,
//           lng: 1.546,
//         }}
//       />
//     </>
//   )
// }
// ));

const Map = () => {

  return (
    <>
      <div className="container-fluid col-xxl-8 px-4 py-5 text-center" >
        <iframe className="rounded border border-light w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.997826666781!2d-58.406744112594666!3d-34.590561339181406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9b495ce79b%3A0xa4d7ae0eac9e6f28!2sLibreria%20Acuarella!5e0!3m2!1ses-419!2ses!4v1672776780888!5m2!1ses-419!2ses" title='map'  allowfullscreen="" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </>
  )
}

export default Map

// width="800" 