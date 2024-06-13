import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';



function Home(){

       

    return(
        <div class="image-container">
        <div className='home'>
                <div className='titulo'>
                    
                    <center><h1>Bem-vindo ao sistema da sua academia!</h1></center>
                </div>

                <div className='box1'>
                    <h2>Crie a conta do seu aluno aqui!</h2>


                    <div>
                    Aqui é o campo onde você professor,vai fazer o cadastro do seu aluno, em nosso aplicativo Onfit!Conforme os dados,você deve inserir:
                    </div>

                    <ul>
                        <li>
                            Nome  
                        </li> 
                        <li>
                            CPF
                        </li> 
                        <li>
                            E-mail
                        </li> 
                        <li>
                            Senha
                        </li>
                    </ul> 

                    <div>
                    Lembre-se ter o acompanhamento do mesmo e verificar as informações para que se evite erros.
                    </div> 

                    <a href="/usuario" className="usuario">Cadastrar Aluno</a>
                </div> 
       

                
                <div className='box2'>
                
                    <h2>Veja seus alunos!</h2>

                    <div>
                    Aqui é onde você professor pode análisar e fazer um maior gerencionamento dos alunos inseridos com as informações obtidas.
                    </div>

                    <a href="/listausuario" className="usuario">Listar Alunos</a>

                </div> 
       

               
                <div className='box3'>
                
                    <h2>Crie a conta do Funcionario</h2>

                
                    <div>
                    Faça o cadastro de professores que farão o controle e cadastro de novos alunos para a Onfit!Aqui informarão:
                    </div>  

                    <ul>
                        <li>
                            Nome  
                        </li> 
                        <li>
                            ID
                        </li> 
                        <li>
                            E-mail
                        </li> 
                        <li>
                            Senha
                        </li>
                    </ul> 
                    <div>
                    Atenção haja com resonsabilidade mediante os dados obtidos com seu acesso
                    </div> 
                    <a href="/funcionario" className="funcionario">Cadastrar Funcionario</a>
                </div>
                </div>
                <footer>
        <div class="footer">   
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
    )

    }
export default Home;

