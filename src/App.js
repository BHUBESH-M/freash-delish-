
import './App.css';
import Login from './compoent/Login'
import Navbar from './compoent/Navbar'
import { Route, Routes ,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
             <Route index='/'element={<Login/>}/>
             <Route path='Navbar' element={<Navbar/>}/>  
    
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
