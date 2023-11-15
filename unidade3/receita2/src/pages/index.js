import { home } from "./components/home";
import { login } from "./components/login";
import { navaBar } from "./components/navaBar";
export default function index() {

    return (
        <section>
            {navaBar()}
            {home()}
            {login()}
        </section>    
    )
}