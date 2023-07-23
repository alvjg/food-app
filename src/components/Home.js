import { Form, redirect, useActionData } from "react-router-dom"

const Home = () => {
    //action data related to blankAction function
    const data = useActionData();

    return (
        <>
            <Form method="post" action="/">
                <div class="login-form">
                    <input class="info" type="text" name="username" placeholder="Enter Username" required></input>
                    <input class="info" type="text" name="password" placeholder="Enter Password" required></input>
                    <button class="login" type="submit">Login</button>

                </div>

                {/* if an action did occur and it is an error, display the error message */}
                {data && data.error && <p>{data.error}</p>}
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


    if (submission.username === "fei") {
        return { error: 'No account exists with that username' }
    }

    // redirect the user
    return redirect('/loggedin')
}


export default Home;