import './normalize.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Panel from './components/Panel';
import Layout from './components/Layout';

function App() {
  return (
    <div>    
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route index  path='/' element={<Home/>}/> */}
      <Route path='about' element={<About/>}/>
      {/* </Route> */}
      <Route path='panel' element={<Panel/>}>
      <Route path='about' element={<About/>}/>

      </Route>    

    </Routes>
   
    </div>
  );
}

export default App;
