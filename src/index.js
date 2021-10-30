import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rout from "./Router";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Rout/>
  </BrowserRouter>
  
    
  </React.StrictMode>,
  document.getElementById('root')
);


