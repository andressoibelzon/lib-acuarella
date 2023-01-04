import Cards from './components/Cards';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Heroe from './components/Heroe';
import Map from './components/Map';
import Products from './components/Products';

const mapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAon8wb3DsIBjWWxxgcr0SQOsZy5FLVr_A";


function App() {
  return (
    <>
    <Header/> 
    <Heroe/>
    <Cards/>
    <Products/>
    <Map />
    <Footer/>
    </>
  );
}

export default App;
