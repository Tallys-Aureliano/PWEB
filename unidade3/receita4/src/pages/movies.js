import React, { useState } from 'react';

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
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searchTerm}`)
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
            <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td><img src={m.Poster} style={{ width: 100 }}></img></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>Carregando...</td>
            </tr>
        )
    }
}