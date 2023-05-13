import React from 'react'
import './App.css';
import ReactDOM from 'react-dom/client'


const Index = (props) => {

    return (
      <>
        <div>
          
        </div>
        <div class="starter" >Hello World.</div>
        <div class="navigation-bar">
  
        </div>
  
        <div class="login-form">
          <input type="text" placeholder="Enter Username" required></input>
          <input style={{marginTop:"5%"}}type="text" placeholder="Enter Password" required></input>
  
          <button type="submit">Login</button>
  
  
        </div>
      </>
  
    )
  }
ReactDOM.createRoot(document.getElementById('root')).render(<Index />)