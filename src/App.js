import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Component/AdminPanel/Admin';
import AppCarousel from './Component/AdminPanel/Pages/AppCarousel';
import UserInfo from './Component/AdminPanel/Pages/UserInfo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route path="carousel" element={<AppCarousel />} />
            <Route path="userInfo" element={<UserInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
