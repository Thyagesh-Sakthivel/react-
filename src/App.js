import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Cart from './cart';
function App() {

  return (
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;