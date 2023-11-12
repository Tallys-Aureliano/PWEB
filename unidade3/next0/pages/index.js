import { home } from "./modules/home";
import { login } from "./modules/login";
export default function index() {

    return (
        <div>
            <h1>Bem vindo ao Next</h1>
            {home()}
            {login()}
        </div>
    )
}