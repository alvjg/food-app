import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    console.log(document.getElementsByClassName("navbar").parentElement + "hihih");
    return (
        <>
            <nav class="navbar">

                {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                <div class="logo">
                    <NavLink to="/">Foodie Finder</NavLink>
                </div>
                <NavLink to="/Restaurants">Restaurants</NavLink>
                <NavLink to="/Settings">Settings</NavLink>
                <NavLink to="/Test">Test</NavLink>

            </nav>

        </>)
}

export default NavBar;