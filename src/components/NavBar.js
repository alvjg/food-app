import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    console.log(document.getElementsByClassName("navbar").parentElement + "hihih");
    return (
        <>
            <nav class="navbar">

                {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                <div class="logo">
                    
                </div>
                <NavLink class = "logo" style={{ }} to="/">Foodie Finder</NavLink>
                <NavLink class = "setting" to="/Settings">Settings</NavLink>
                

            </nav>

        </>)
}

export default NavBar;