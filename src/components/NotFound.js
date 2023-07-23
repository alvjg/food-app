import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <>
            <h2>Page not found!</h2>
            <p>Please go <Link to="/">here</Link>.</p>

        </>
    )
}