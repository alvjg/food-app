import { Outlet } from "react-router-dom"
import Navbar from '../components/NavBar'

export default function RootLayout() {
    return (
        <>
            {/* <div class="root-layout flex-items"> */}
            <Navbar  />
            {/* </div> */}
            <main >
                {/* renders the component(s) */}
                <Outlet />
            </main>
        </>



    )
}