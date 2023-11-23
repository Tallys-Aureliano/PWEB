import React, { useState } from 'react';

export default function Movies({ data }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        // Adicione lógica para buscar dados usando o novo termo de pesquisa (searchTerm)
        e.preventDefault();
        const apiKey = process.env.API_KEY;
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

        try {
            const res = await fetch(url);
            const newData = await res.json();
            setData(newData);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }
                }
                />
                <button type="submit">Buscar</button>
            </form>
            <div>
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Poster</th>
                    </thead>
                    <tbody>
                        {data.Search.map((m) =>
                            <tr>
                                <td>{m.Title}</td>
                                <td>{m.Year}</td>
                                <td><img src={m.Poster} style={{width: 100}}></img></td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </div>  
        </div>
    )
}
export async function getServerSideProps(context) {
    const searchTerm = context.query.search || 'batman'; // Obtém o termo de pesquisa da query ou usa 'batman' como padrão
    if (!process.env.API_KEY) {
        return {
            props: {
                data: []
            }
        }
    }
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${searchTerm}`)
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