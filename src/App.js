import Home from "./component/Home";
import Demo from "./component/Demo";
import Slider from "./component/Slider";
import Nikcomponant from "./component/Sliders"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
       <Route exact path='/demo' element={<Demo/>}/>
      <Route exact path='/nik' element={<Nikcomponant/>}/>

      {/* <Route exact path='/courses' element={<CourseListPage/>}/> */}
      {/* <Route exact path='/courseInfo/:courseId' element={<CourseInfo/>}/> */}
     
    </Routes>
    
    </>
  );
}

export default App;
