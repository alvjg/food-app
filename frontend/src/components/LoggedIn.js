import { useState } from "react";
import { Navigate } from "react-router-dom"

const LoggedIn = () => {
    const [user, setUser] = useState('fei1')

    if (!user) {
        //replace method replaces the previous page in history with the home page (so the user can't access the Logged In page after they logged out)
        return <Navigate to='/' replace={true} />
    }

    return (
        <>
            <>The login button worked 😲</>

            <button onClick={() => setUser(null)}>Log Out</button>

        </>)
}


export default LoggedIn;