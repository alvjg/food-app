import { NavLink } from "react-router-dom"
import './NavBar.css'
export default function NavBar() {
    return (
        <>
            <nav class="navbar">
                <div class="container">
                    {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                    <div class="logo">
                        <NavLink to="/Home"> Foodie Finder</NavLink>
                    </div>
                    <NavLink to="/MainPage">Restaurants</NavLink>
                    <NavLink to="/Settings">Settings</NavLink>
                </div>
            </nav>

        </>)
}
