import logo from './logo.svg';
import './App.css';
import WhiteFrame from './component/whiteframe';
import { Routes, Route } from 'react-router-dom';
import Home from './component-pages/home';
import Courses from './component-pages/courses';
import Admission from './component-pages/admission';
import Testimonial from './component-pages/testimonial';
import Header from './component/header';
import Courses1 from './card-container/courses1';
import Courses2 from './card-container/courses2';
import Courses3 from './card-container/courses3';
import Courses4 from './card-container/courses4';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
          <Routes>
            <Route path='/' element={<WhiteFrame/>}/>
            <Route path="/home" element={<Home/>} />
              <Route path='/courses' element={<Courses/>} >
                <Route path='/courses/courses1' element={<Courses1/>} />
                <Route path='/courses/courses2' element={<Courses2/>} /> 
                <Route path='/courses/courses3' element={<Courses3/>} /> 
                <Route path='/courses/courses4' element={<Courses4/>} />
              </Route>
            <Route path='/admission' element={<Admission/>} />
            <Route path='/testimonial' element={<Testimonial/>} />
            </Routes>
        </div>
       
    </div>
  );
}

export default App;
