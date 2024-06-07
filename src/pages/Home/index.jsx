import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home(){

    return(
           
        <div className='home'>

            <div className='titulo'>
                <center><h1>Home Jack</h1></center>
            </div>

            <div className='box'>
                <h2>Demonstrating the Box Model</h2>

                <p>
                    The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.
                </p>

                <div>
                    This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <a href="/usuario" className="usuario">Cadastrar Alunos</a>
            </div>

            <div className='box'>
                <h2>Demonstrating the Box Model</h2>

                <p>
                    The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.
                </p>

                <div>
                    This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <a href="/listausuario" className="usuario">Listar Alunos</a>
            </div>

            <div className='box'>
                <h2>Demonstrating the Box Model</h2>

                <p>
                    The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.
                </p>

                <div>
                    This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <a href="/funcionario" className="funcionario">Cadastrar Funcionario</a>
            </div>

            <div className='botao'>
                <a href="/usuario" className="usuario">Cadastrar Alunos</a>
                <a href="/listausuario" className="usuario">Listar Alunos</a>
                <a href="/funcionario" className="funcionario">Cadastrar Funcionario</a>
            </div>
        </div>
    )

}

export default Home;

