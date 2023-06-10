import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <>
            <div className="root-layout">
                <header>
                    {/* when screen is "lg" this class will be active*/}
                    <nav class="navbar navbar-expand-lg">
                        {/* NavLink has conditional class="active" (only appears when user clicks on the link)*/}
                        <NavLink to="/" id="navbar-brand">Foodie Finder</NavLink>
                        <NavLink to="/Settings">Settings</NavLink>
                    </nav>


                </header >


                <main>
                    {/* renders the component(s) */}
                    <Outlet />
                </main>
            </div>
        </>



    )
}