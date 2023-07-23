import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    console.log(document.getElementsByClassName("navbar").parentElement + "hihih");
    return (
        <>
            <nav class="navbar">

                {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                <NavLink class="logo" style={{}} to="/">Foodie Finder</NavLink>
                <NavLink to="/restaurants">Restaurants</NavLink>
                <NavLink class="setting" to="/settings">Settings</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>

        </>)
}

export default NavBar;