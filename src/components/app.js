import React from 'react';
import './app.css';
import Scrapbook from './scrapbook'

const App =()=>{
    return(
        <div className="main-container">
            <div onClick={
                ()=>{
                    document.querySelectorAll(".modal")[0].style.display='none'
                    document.querySelectorAll(".modal_container")[0].innerHTML="";
              }
             }className="modal hide">
              <div className="modal_container">
              </div>
            </div>
            <h1 className="main-title">Scrapbook</h1>
            <Scrapbook/>
            
        </div>
    )
}

export default App;

