"use client";
import React, { useState } from 'react';
import Image from 'next/image'

export default function Movies() {
    const [searchTerm, setSearchTerm] = useState('');
    const data = getMovies("batman")
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>
            <div>
                <table border="2" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Ano</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataMovies(data)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
// Nao sei como substituir o getServerSideProps
export async function getMovies(searchTerm) {
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=4b8b5472&s=${searchTerm}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export function dataMovies(data) {
    try {
        return data.map((m) =>
            <tr key={m.imdbID}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>
                    <Image src={m.Poster} width={100} height={100} alt={m.Title} />
                </td>
            </tr>
        )
    } catch (error) {   
        return (
            <tr>
                <td>Algo deu errado</td>
            </tr>
        )
    }
}