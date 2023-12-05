import React from "react"
export default function NavBar({link1, link2}) {
    return (
        <nav className="bg-gray-800">
            <h1>Componente Nav Bar</h1>
            <a href="/">{link1}</a>
            <a href="/">{link2}</a>
        </nav>
    )
}