import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Component/AdminPanel/Admin';
import AppCarousel from './Component/AdminPanel/Pages/AppCarousel';
import UserInfo from './Component/AdminPanel/Pages/UserInfo';
import HeroCarousel from './Component/HeroSlider/HeroCarousel';
import AllCarouselImg from './Component/AdminPanel/Pages/AllCarouselImg';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroCarousel />}></Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="carousel" element={<AppCarousel />} />
            <Route path="userInfo" element={<UserInfo />} />
            <Route path="allCarousel" element={<AllCarouselImg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
