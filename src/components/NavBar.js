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
                <NavLink class="setting" to="/settings"></NavLink>
                <NavLink to="/help">Help</NavLink>
                <NavLink to="/map">Map</NavLink>
            </nav>

        </>)
}

export default NavBar;