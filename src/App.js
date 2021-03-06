import {Routes, Route} from 'react-router-dom';
import About from './Pages/About/About';
import Admission from './Pages/Admission/Admission';
import Blogs from './Pages/Blog/Blogs';
import UpdateBlog from './Pages/Blog/UpdateBlog';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Setting from './Pages/Setting/Setting';
import Nav from './Pages/Shared/Nav';
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/admission' element={<Admission/>}></Route>
        <Route path='/blog' element={<Blogs/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
        <Route path='/update/:id' element={<UpdateBlog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
