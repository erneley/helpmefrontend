import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Usuarios from "./components/Usuarios"
import Milista from "./components/Milista"
import Login from "./components/Login"
import Forma from "./components/listados"



import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login></Login>}></Route>
       <Route path='/user' element={<Usuarios></Usuarios>}></Route>
       <Route path='/lista' element={<Milista></Milista>}></Route>
       <Route path='/form' element={<Forma></Forma>}></Route>        
     </Routes>

     </BrowserRouter>

  );
}

export default App;
