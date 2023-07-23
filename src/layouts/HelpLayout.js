import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
    return (
        <>
            <nav class="help-navbar">
                <NavLink class="help-navbar-items" to="faq"><b>FAQ</b></NavLink>
                <NavLink class="help-navbar-items" to="contact"><b>Contact us</b></NavLink>
            </nav>

            <h2>This is the help section</h2>



            <Outlet />

        </>



    )
}