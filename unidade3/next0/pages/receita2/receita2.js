import { home } from "./components/home";
import { login } from "./components/login";
import { navaBar } from "./components/navaBar";
export default function index() {
    return (
        <><section>
            {navaBar("home","login")}
            <div>
            {home()}
            {login()}
            </div>
        </section>
        <style jsx>
            {`
            * {
                margin: 0px;
                padding: 0px;
            }
            div {
                display: flex;
            }
            `}
        </style></>
    )
}