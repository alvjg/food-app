import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home, { loggedInAction } from './components/Home'
import Restaurants from './components/Restaurants'
import Settings from './components/Settings'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import Contact from './components/help/Contact'
import FAQ from './components/help/FAQ'
import './App.css'
import NotFound from './components/NotFound'
import LoggedIn from './components/LoggedIn'

const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route, RootLayout is a default template for nested pages (in this case, the navbar will be present in all pages)
    <Route path="/" element={<RootLayout />} action={loggedInAction}>
      {/* add new routes to components here */}

      {/* provides a page for root */}
      <Route index element={<Home />}></Route>
      <Route path="/Restaurants" element={<Restaurants />}></Route>
      <Route path="/settings" element={<Settings />}></Route>

      <Route path="/help" element={<HelpLayout />}>
        <Route path="/help/contact" element={<Contact />}></Route>
        <Route path="/help/faq" element={<FAQ />}></Route>
      </Route>

      <Route path="/loggedin" element={<LoggedIn />}></Route>

      {/* error path for when a directory does not exist */}
      <Route path="*" element={<NotFound />}></Route>
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
