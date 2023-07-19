import { useState } from 'react'
import Blank from './blank.js'

const Home = () => {

    //useState always returns two values: a function and the current state (depends on useState parameter)
    const [clicked, isClicked] = useState(false);

    const handleLogin = () => {
        isClicked(true);
    }

    return (
        <>
            {clicked ?

                (<Blank />)

                :
                (<div class="main">
                    <div class="login-form">
                        <input type="text" placeholder="Enter Username" required></input>
                        <input type="text" placeholder="Enter Password" required></input>
                        <button type="submit" onCLick={handleLogin}>Login</button>
                    </div>
                </div>)
            }
        </>)
}


export default Home;