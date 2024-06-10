// import logo from './logo.svg';
import './App.css';
import Head1 from '../src/Headercomponent/Head1';
import { Route, Routes } from 'react-router-dom';
import Login from './Headercomponent/Login';
import Register from './Headercomponent/Register';
import Profile from './Headercomponent/profile';
function App() {
  return (
<>
<Routes>
  {/* <Head1/> */}
  <Route path='/' element={<Head1/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/profile/:id' element={<Profile/>}/>
  <Route path='*' element={<h1>Route Not found 404</h1>}/>
</Routes>
</>
  );
}

export default App;