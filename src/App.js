

import ReactDOM from "react-dom/client";
import './App.css';
const App = (props) => {

  return (
    <>
      <div>
        
      </div>
      <div class="starter" >Hello World.</div>
      <div class="navigation-bar">

      </div>

      <div class="login-form">
        <input type="text" placeholder="Enter Username" required></input>
        <input style={{marginTop:"5%"}}type="text" placeholder="Enter Passweord" required></input>

        <button onClick={New} type="submit">Login</button>


      </div>
    </>

  )
}
const New = (props) =>{
  return(
    <>
    <div>
        
        </div>
        <div class="starter" >Hello World.</div>
        <div class="navigation-bar">
  
        </div>
    </>
  )
}

export default App;
