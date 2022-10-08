
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import MyCart from './Components/MyCart/MyCart';
import Dogs from './Components/Dogs/Dogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from 'react';
import { CartContext } from './Context/CartContext'
function App() {
  const [dogs, setDogs] = useState([]);
  const [cart, addToCart] = useState([]); // danh sach cho duoc chon
  const [total, setTotal] = useState(0)
  // get data tu server
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://localhost:8080/v1/dogs")
      return res;
    }
    getData().then(res => setDogs(res.data))
      .catch(err => console.log(err))


  }, [])
  return (
    <CartContext.Provider value={{ cart, addToCart, total, setTotal }}>
      <Router>
        <div className='page-container'></div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dogs' element={<Dogs allDogs={dogs} />}></Route>
          <Route path='/mycart' element={<MyCart />}></Route>
        </Routes>
      </Router>
    </CartContext.Provider>


  );
}

export default App;
