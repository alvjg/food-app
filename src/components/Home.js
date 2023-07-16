import blank from './blank.js'
import { useState } from 'react'

const Home = () => {

    const renderNewPage = () => {


    }
    return (
        <>
            <div class="login-form main">
                <input type="text" placeholder="Enter Username" required></input>
                <input style={blank} type="text" placeholder="Enter Password" required></input>

                <button type="submit" onCLick={this.displayNewPage}>Login</button>


            </div>

        </>)
}


export default Home;