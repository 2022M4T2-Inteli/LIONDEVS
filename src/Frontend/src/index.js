import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import AdicionarDispositivo from './pages/AdicionarDispositivo';
import Relatorios from './pages/Relatorios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Localizacao from './pages/Localizacao';

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
      <Route path="localizacao" element={<Localizacao />} />
    </Routes>
</BrowserRouter>

</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();