import './app.css';
import { Routes, Route } from 'react-router-dom'
import ProductListingPage from './ProductListingPage';
import ProductPage from './ProductPage';
import NotFound from './NotFound';

function App() {

  return (
    <Routes>
      <Route path='/' element={<ProductListingPage />} />
      <Route path='/product/:id' element={<ProductPage />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;