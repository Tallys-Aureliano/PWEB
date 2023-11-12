import { home } from "./components/home";
import { login } from "./components/login";
export default function index() {

    return (
        <div>
            <h1>Bem vindo ao Next</h1>
            {home()}
            {login()}
        </div>
    )
}