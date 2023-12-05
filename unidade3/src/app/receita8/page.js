import React, { useState } from 'react';
import Image from 'next/image'

export default function Movies({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
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
                        {dataMovies(data)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const searchTerm = context.query.search || 'batman'; // Obtém o termo de pesquisa da query ou usa 'batman' como padrão
    const res = await fetch(`http://www.omdbapi.com/?apikey=4b8b5472&s=${searchTerm}`)
    try {
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
export function dataMovies(data) {
    if (data.Search) {
        return data.Search.map((m) =>
            <tr key={m.imdbID}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>
                    <Image src={m.Poster} width={100} height={100} alt={m.Title} />
                </td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>Error...</td>
            </tr>
        )
    }
}