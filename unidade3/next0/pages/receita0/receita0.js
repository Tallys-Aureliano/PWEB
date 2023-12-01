import { home } from "./home";
import { login } from "./login";
export default function index() {

    return (
        <div>
            <h1>Bem vindo ao Next</h1>
            {home()}
            {login()}
        </div>
    )
}