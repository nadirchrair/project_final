import './App.css';
import Cart from './components/Cart';
import Index from './components/Index';
import Navbarss from './components/Navbarss';
import { Route, Routes } from 'react-router-dom';
import DetailsProduct from './components/DetailsProduct';
function App() {
  return (
    <div>
      <Navbarss />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/produit/:id' element={<DetailsProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;

