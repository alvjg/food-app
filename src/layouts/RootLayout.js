import { Outlet } from "react-router-dom"
import Navbar from '../components/NavBar'

export default function RootLayout() {
    return (
        <>
            {/* <div class="root-layout flex-items"> */}
            <Navbar class="flex-items" />
            {/* </div> */}
            <main class= "flex-items">
                {/* renders the component(s) */}
                <Outlet />
            </main>
        </>



    )
}