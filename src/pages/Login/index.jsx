import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
    function onChange(event) {

    };

    return (
        <div id="login">

            <form class="card">

                <div class="card-header">

                    <h2>Login</h2>

                </div>

                <div class="card-content">

                    <div class="card-content-area">

                        <label for="usuario">Usuário</label>

                        <input type="text" id="usuario" autocomplete="off" />

                    </div>

                    <div class="card-content-area">

                        <label for="password">Senha</label>

                        <input type="text" id="password" autocomplete="off" />

                    </div>

                </div>

                <div class="card-footer">

                    <input type="submit" value="login" class="submit" />

                   
                </div>

            </form>

        

        <footer>
        <div class="footer1">   
            <div class="row">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                    <li><a href="doe.html">Doe</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </div>
            
            <div class="row">
                <p>ONFIT Copyright © 2023 ONFIT - Todos os direitos resevados</p>
            </div>
        </div>
        </footer>

        
        </div>
    );
}

export default Login;