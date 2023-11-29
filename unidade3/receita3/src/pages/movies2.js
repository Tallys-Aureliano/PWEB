import useSWR from 'swr'

export default function Movies2() {
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=batman`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div style={{ display: 'flex', gap: 50 }}>
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
            <div>
                {moviesDescripiton()}
            </div>
        </div>
    )
}
async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
export function dataMovies(data) {
    try {
        return data.Search.map((m) =>
            <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.imdbID}</td>
                <td><button type="button" onClick={() => moviesDescripiton(m.imdbID)}><img src={m.Poster} style={{ width: 100 }}></img></button></td>
            </tr>
        )
    }
    catch (error) {
        console.log(error)
        return (
            <tr><h1>Falha na busca</h1></tr>
        )
    }
}

export function moviesDescripiton(idMovie) {
    try {
        const { data, error } = useSWR(`https://www.omdbapi.com/?i=tt0372784&apikey=4b8b5472`, fetcher)
        if (error) return <div>falha na requisição...</div>
        if (!data) return <div>carregando...</div>
        return (
            <div>
                <h1>Movie Description</h1>
            </div>
        )
    } catch (error) {
        alert(error)
        return (
            <div>
                <h1>Falha na busca</h1>
            </div>
        )
    }
}