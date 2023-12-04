import Home from "./components/home";
import Login from "./components/login";
import NavBar from "./components/navBar";
export default function index() {
    return (
        <div>
            <NavBar link1="home" link2="login"/>
            <div>
            <Home />
            <Login />
            </div>
        </div>
    )
}