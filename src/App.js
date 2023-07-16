import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import Settings from './components/Settings'
import Test from './components/Test'
import RootLayout from './layouts/RootLayout'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route, RootLayout is a default template for pages
    <Route path="/" element={<RootLayout />}>
      //provides a page for root
      //add new routes to components here
      <Route path="/" element={<Home />}></Route>
      <Route path="/Restaurants" element={<Restaurants />}></Route>
      <Route path="/Settings" element={<Settings />}></Route>
      <Route path="/Test" element={<Test />}></Route>
    </Route>
  )
);

const App = () => {

  return (

    <>

      <RouterProvider router={router} />

    </>
  )

}

export default App;
