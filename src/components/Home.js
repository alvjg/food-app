const Home = () => {

    return (
        <>
                <div class="login-form">
                    <input class = "info" type="text" placeholder="Enter Username" required></input>
                    <input class = "info" type="text" placeholder="Enter Password" required></input>
                    <button class = "login" type="submit" onCLick={handleLogin}>Login</button>
                    
                </div>
            
        </>)
}


export default Home;