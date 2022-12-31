import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home'
import Admin from './page/Admin'
import Login from './page/Login'
import Regist from './page/Regist'
import Category from './page/CateDetail'
import Map from './page/MapDetail'
import Oauth2Login from "./page/Oauth2Login";
import FindPw from "./page/FindPw";
import MyPage from "./page/Mypage";
import Course from "./page/CourseRec"
import JeJuPlace from "./page/JeJuPlace";
import CourseDetail from "./page/CourseDetail";
import Survey from './page/Survey';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/regist' element={<Regist/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/map' element={<Map/>}/>
          <Route path='/Oauth2Login/:token' element={<Oauth2Login/>}/>
          <Route path="/FindPw" element={<FindPw/>}/>
          <Route path="/Mypage" element={<MyPage/>}/>
          <Route path="/Course" element={<Course/>}/>
          <Route path="/Jejuplace/:num" element={<JeJuPlace/>}/>
          <Route path="/CourseDetail" element={<CourseDetail/>}/>
          <Route path="/Survey" element={<Survey/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
