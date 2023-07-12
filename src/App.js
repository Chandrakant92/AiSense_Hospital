import Home from "./component/Home";
import Demo from "./component/Demo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
       <Route exact path='/demo' element={<Demo/>}/>
     {/*} <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/courses' element={<CourseListPage/>}/>
      <Route exact path='/courseInfo/:courseId' element={<CourseInfo/>}/> */}
     
    </Routes>
    
    </>
  );
}

export default App;
