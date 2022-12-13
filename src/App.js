
import { Route, Routes } from 'react-router';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFoundPage from './Pages/Shared/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path='/service/:serviceID' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
      <Route path ="/register"element={<Register></Register>}></Route>


        <Route path="*"element={<NotFoundPage></NotFoundPage>}></Route>
        

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;