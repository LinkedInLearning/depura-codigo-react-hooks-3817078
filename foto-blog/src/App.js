import { Routes, Route } from "react-router-dom"
import { useDispatch } from 'react-redux'
import Posts from './vistas/Posts/Posts'
import Login from './vistas/Login/Login'
import Perfil from './vistas/Perfil/Perfil'
import RutaProtegida from './vistas/RutaProtegida/RutaProtegida'
import UseLocalStorage from './hooks/UseLocalStorage'
import { login } from './reducers/perfiles'

function App() {
  
  const [valor, ] = UseLocalStorage('nombreUsuario', undefined);
  useDispatch()(login(valor));

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RutaProtegida />}>
        <Route path="posts" element={<Posts />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}

export default App;
