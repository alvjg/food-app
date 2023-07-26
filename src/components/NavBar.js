import { NavLink } from "react-router-dom"
import { FaGear } from "react-icons/fa6";
import './NavBar.css'

const NavBar = () => {
    console.log(document.getElementsByClassName("navbar").parentElement + "hihih");
    return (
        <>
            <nav class="navbar">

                {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                <NavLink className="logo" to="/">Foodie Finder</NavLink>
                <NavLink to="/restaurants">Restaurants</NavLink>
                <NavLink to="/help">Help</NavLink>
                <NavLink to="/map">Map</NavLink>
                <NavLink className="setting" title="Settings" alt="Settings"  to="/settings"><FaGear id="settings-icon"/></NavLink>
            </nav>

        </>)
}

export default NavBar;