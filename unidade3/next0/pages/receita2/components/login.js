export default function login() {
    return (
        <><div>
            <h2>Componente Login</h2>
            <forms>
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Senha
                    <input type="password" />
                </label>
                <button type="submit">Entrar</button>
            </forms>
        </div>
            <style jsx>
                {`
                div {
                    background-color: red;
                    color: white;
                    height: 90vh;
                    display: flex;
                    padding: 10px;
                    flex-direction: column;
                    align-items: center;
                    width: 50%;
                }
        `}
            </style></>
    )
}