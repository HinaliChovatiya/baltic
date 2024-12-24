import logo from './logo.svg';
import './App.css';
import Home from './modules/home';
import Header from './shared/components/header';
import Footer from './shared/components/footer';
import Builiding from './modules/building'; 
import Residences from './modules/residences';
import Amenties from './modules/amenties';
import Neighborhood from './modules/neighborhood';
import Contact from './modules/contact';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Builiding/>
      <Residences/>
      <Amenties/>
      <Neighborhood/>
      <Contact/>
      <Footer/> 
    </div>  
  );
}

export default App;
