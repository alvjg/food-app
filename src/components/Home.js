export default function Home() {
    return (
        <>
            <div>this is home</div>
            <div class="login-form">
                <input type="text" placeholder="Enter Username" required></input>
                <input style={{ marginTop: "5%" }} type="text" placeholder="Enter Password" required></input>

                <button type="submit">Login</button>


            </div>

        </>)
}