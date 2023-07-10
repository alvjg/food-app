import { NavLink, Outlet } from "react-router-dom"
import Navbar from '../components/NavBar'
export default function RootLayout() {
    return (
        <>
            <div className="root-layout" class="flex-container">
                <nav class="navbar">
                    <div class="container">
                        {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                        <Navbar />
                        {/* <div class="logo">
                            <NavLink to="/">Foodie Finder</NavLink>
                        </div>
                        <NavLink to="/MainPage">Restaurants</NavLink>
                        <NavLink to="/Settings">Settings</NavLink> */}
                    </div>
                </nav>

                <main>
                    {/* renders the component(s) */}
                    <Outlet />
                </main>
            </div>
        </>



    )
}