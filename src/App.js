import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Register from './pages/Register';
import BuyTicket from './pages/BuyTicket';


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
          <Route path='/post/byId/:id' element={<Post/>}/>
          <Route path='/details' element={<Post/>}/>

          <Route path='/tickets/buy' element={<BuyTicket/>}/>
          <Route path='/profile' element={<Profile/>}/>

        </Routes>
      </div>
      <Footer style={footerStyle}/>
    </BrowserRouter>
  );
}

export default App;
