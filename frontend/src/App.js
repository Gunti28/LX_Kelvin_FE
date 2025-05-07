import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Demo from './pages/Demo';
import ProductDetailsPage from './pages/ProductDetailsPage';
import DeliveryAddress from './pages/DeliveryAddress';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> 
      <Demo /> */}
      {/* <ProductDetailsPage /> */}
      <DeliveryAddress />
    </div>
  );
}

export default App;
