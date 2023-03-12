import './App.css';
import { Routes , BrowserRouter, Route } from 'react-router-dom'


import Home from './pages/home/home'
import Signin from './pages/signin/signin'
import Signup from './pages/signup/signup'
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>       
      </BrowserRouter>
        
    </div>
  );
}

export default App;
