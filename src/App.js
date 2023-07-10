import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Settings from './components/Settings'
import RootLayout from './layouts/RootLayout'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route, RootLayout is a default template for pages
    <Route path="/" element={<RootLayout />}>
      //provides a page for root
      <Route path="/" element={<Home />}></Route>
      <Route path="/Settings" element={<Settings />}></Route>
    </Route>
  )
);

const App = () => {
    <>

      <div class = "flex-container">
        <div class="navigation-bar">

        </div>

        <div class="login-form">
          <input type="text" placeholder="Enter Username" required></input>
          <input style={{marginTop:"5%"}}type="text" placeholder="Enter Password" required></input>

          <button >Login</button>


        </div>

      <ul>
 
        <li><a id = "setting" href="#about">Settings</a></li>
      </ul>
      </div>
      
      

      <RouterProvider router={router} />

    </>
}

export default App;
