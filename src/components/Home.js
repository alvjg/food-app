import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import LoggedIn from './LoggedIn'
const Home = () => {
    //action data related to blankAction function
    const data = useActionData();
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(LoggedIn);
    };
    return (
        <>
            <Form class="login-form" method="post" action="/">
                <input class="info" type="text" name="username" placeholder="Enter Username" required></input>
                <input class="info" type="text" name="password" placeholder="Enter Password" required></input>
                <button onClick={handleClick} class="login" type="submit">Login</button>
                {/* if an action did occur and it is an error, display the error message */}    
                {/* FIX THIS: OVERLAPS WITH LOGIN BUTTON */}
                {data && data.error && <p id="logged-in-error">{data.error}</p>}
            </Form>

        </>)
}


// function that is used in the action of login
//request parameter contains all of the form's data
export const loggedInAction = async ({ request }) => {
    console.log(request);
    // we use await because this is an asychronous method
    const data = await request.formData();

    //use this data to submit a post request to a database and verify account info
    const submission = {
        username: data.get('username'),
        password: data.get('password')
    }

    console.log(submission);

    // send post request


    

    // redirect the user
    return redirect('/loggedin')
}


export default Home;