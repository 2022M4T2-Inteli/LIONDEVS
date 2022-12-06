import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainRastreio from './pages/PrincipalRastreio';
import Home from './pages/Home'
import SelectRastreio from './pages/SelecaoRastreio'
import Graphicss from './pages/Graphics'
import AdicionarDispositivo from './pages/AdicionarDispositivo';
import Login from "./pages/Login";
import Tabela from './components/ReactTable';
import Relatorios from './pages/Relatorios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Localizacao from './pages/Localizacao';
import * as AWS from 'aws-sdk'
import {
  ConfigurationOptions
} from 'aws-sdk'
import TabelaView from './components/ReactTable';


const configuration = ConfigurationOptions = {
  region: 'us-east-1'
}




AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode> 

<BrowserRouter>
      <Routes>
          <Route path="/" element={< Home/>} />
          <Route path='/Home' element={<Home/>}/>
          <Route index element={<Home />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="registro" element={<AdicionarDispositivo />} />
          <Route path="tabela" element={<TabelaView />} />
          <Route path="localizacao" element={<Localizacao />} />
      </Routes>
</BrowserRouter>

</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();