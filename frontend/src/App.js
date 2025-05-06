import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Demo from './pages/Demo';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> 
      <Demo /> */}
      <ProductDetailsPage />
    </div>
  );
}

export default App;
