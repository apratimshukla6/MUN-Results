import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/Chart'
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #511926; }'}</style>
      </Helmet>
      <div class="container">
      <input data-function="swipe" id="swipe" type="checkbox"/>
      <label data-function="swipe" for="swipe"><span class="close"></span></label>
      <label data-function="swipe" for="swipe"><span class="hamburger"></span></label>


      <div class="sidebar"><br/><br/>
        <nav class="menu">

          <img class="img1"   src="black1.png" alt="MUN"/><br/>

          <li ><a href="#">Home</a></li>
          <li><a href="#">XYZ</a></li>


          <li><a href="#">XYZ</a></li>
          <li><a href="#">XYZ</a></li>
          <li><a href="#">XYZ</a></li>
          <li><a href="#">XYZ</a></li>

        </nav>
      </div>

    </div>
      <div className="heading">
        RESULTS
      </div>
      <div className="box">
      <Chart />
      </div>
    </div> 
  );
}

export default App;
