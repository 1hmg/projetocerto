// npm install react-hook-form
import  {useState} from "react";
import {cadastrarUsuario} from '../services/api'
import { useNavigate } from 'react-router-dom';
import './usuario.css';

import { useState } from "react";
import api from "../../services/api";

const Usuario = () => {

const navigator = useNavigate();

const[nome, setNome] = useState('')
const[cpf, setCpf ] = useState('')
const[email, setEmail] = useState('')
const[senha, setSenha] = useState('')

const [errors, setErrors] = useState({
  nome: '',
  cpf: '',
  email: '',
  senha: ''
})

const handleNome = (e) => {(e.target.value)}

const handleCpf = (e) => {setCpf(e.target.value)}

const handleEmail = (e) => {setEmail(e.target.value)}

const handleSenha = (e) => {setSenha(e.target.value)}

function cadastrarUsuario() {
  e.preventDeafult();

  const usuario = {nome, email, senha}
  console.log(usuario);


  cadastrarUsuario(usuario).then((response) => {
    console.log(response.data);
    navigator('/usuario')
  })
}

function validateForm() {
  let valid = true;

  const errorsCopy = {... errors}

  if(nome.trim()) {
    errorsCopy.nome = '';
  } else {
    errorsCopy.nome = 'Escreva o nome';
    valid = false;
  }

  if(cpf.trim()) {
    errorsCopy.cpf = '';
  } else {
    errorsCopy.cpf = 'Escreva o CPF';
    valid = false;
  }

  if(email.trim()) {
    errorsCopy.email = '';
  } else {
    errorsCopy.email = 'Escreva o E-mail';
    valid = false;
  }

  if(senha.trim()) {
    errorsCopy.senha = '';
  } else {
    errorsCopy.senha = 'Escreva a senha';
    valid = false;
  }

  setErrors(errorsCopy);

  return valid;
}

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input 
        type="text"
        placeholder="Seu Nome"
        value={nome}
        onChange={handleNome} 
        /> 
      </div>

      <div className="form-group">
        <label>CPF</label>
        <input 
        type="text"
        placeholder="Seu Cpf"
        value={cpf}
        onChange={handleCpf} 
        /> 
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input 
        type="email" 
        placeholder="Seu Email" 
        value={email} 
        onChange={handleEmail} 
        /> 
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input 
        type="password" 
        placeholder="Sua Senha"
        value={senha}  
        onChange={handleSenha} /> 
      </div>

      <div className="form-group">
            
            <button onClick={handleSubmit}>Criar Conta</button>
      </div>

    </div>
  )

}

export default Usuario;