import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Funcionario from './pages/Funcionario';
import ListaUsuario from './pages/ListaUsuario';
import Login from './pages/Login';

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-usuario" element={<Usuario/>}/>
                <Route path="/usuario" element={<ListaUsuario/>}/>
                <Route path="/add-funcionario" element={<Funcionario/>}/> 
            </Routes>
        
    
    </BrowserRouter>
 )
}
export default RoutesApp;
