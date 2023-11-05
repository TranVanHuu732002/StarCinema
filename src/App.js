import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Register from './pages/Register/Register';
import BuyTicket from './pages/BuyTicket';
import Details from './pages/Details/Details';


function App() {

  const mainStyle = {
    paddingBottom: '20px', 
    minHeight: '80vh',
    position: 'relative',
  };
  
  const footerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  };

  return (
    <BrowserRouter>
      <div style={mainStyle}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/tickets/buy' element={<BuyTicket/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/details' element={<Details/>}/>
          {/* <Route path='/movie/nowshowing' element={</>}/>
          <Route path='/movie/comingsoon' element={</>}/> */}
        </Routes>
      </div>
      <Footer style={footerStyle}/>
    </BrowserRouter>
  );
}

export default App;
