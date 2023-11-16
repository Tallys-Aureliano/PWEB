export function navaBar(link1, link2) {
    return (
        <><nav>
            <h1>Componente Nav Bar</h1>
            <a href="/">{link1}</a>
            <a href="/">{link2}</a>
        </nav>
        <style jsx>
        {`
            nav {
                display: flex;
                color: white;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                background-color: black;
                height: 100px;
            }
            a {
                color: orange;

            }
        `}
        </style></>
    )
}