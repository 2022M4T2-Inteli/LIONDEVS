import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainRastreio from './pages/PrincipalRastreio';
import Home from './pages/Home'
import SelectRastreio from './pages/SelecaoRastreio'
import Graphicss from './pages/Graphics'
import AdicionarDispositivo from './pages/AdicionarDispositivo';

import * as AWS from 'aws-sdk'
import {
  ConfigurationOptions
} from 'aws-sdk'
import Patrimonio from './pages/Patrimonio';


const configuration = ConfigurationOptions = {
  region: 'us-east-1'
}




AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode> 

{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}


  <Home />
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();