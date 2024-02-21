
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Custsidbar from './Components/Custsidbar';
import Custnavbar from './Components/Custnavbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Profile from './Pages/Profile';
import Schedule from './Pages/Schedule';
import VideoLibrary from './Pages/VideoLibrary';
import TopTrainers from './Pages/TopTrainers';
import Eachproduct from './Pages/Eachproduct';
import Clients from './Pages/Clients';
import Feedback from './Pages/Feedback';
import Dashboard from './Pages/Workoutplan';
import Workoutplan from './Pages/Workoutplan';
import Workoutplans from './Pages/Workoutplans';
// import Clients from 
const Navi=()=>{
  const location=useLocation();
  if(location.pathname==="/" || location.pathname==="/signup")
  {
    return null;
  }
  return(
    <>
      <Custnavbar loc={location.pathname}/>
      <Custsidbar loc={location.pathname}/>
    </>
  )
}
function App() {
  return (
    <div className='bg'>
      <BrowserRouter>
        <Navi/>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/videolibrary" element={<VideoLibrary/>}/>
            <Route path="/toptrainers" element={<TopTrainers/>}/>
            <Route path="/clients" element={<Clients/>}/>
            <Route path="/product/:id" element={<Eachproduct/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/workoutplan" element={<Workoutplan/>}/>
            <Route path="/workoutplans" element={<Workoutplans/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
