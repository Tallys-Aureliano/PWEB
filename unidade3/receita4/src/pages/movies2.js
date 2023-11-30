import useSWR from 'swr'
import Link from 'next/link'

export default function Movies2() {
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=batman`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div style={{ display: 'flex', gap: 50 }}>
            <table border="8" cellPadding="10">
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
    )
}
export async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

export function dataMovies(data) {
    try {
        if (Array.isArray(data.Search)) {
            return data.Search.map((m) =>
                <tr key={m.imdbID}>
                    <td>{m.Title}</td>
                    <td>{m.Year}</td>
                    <td>
                        <Link href={`/movie?id=${m.imdbID}`}>
                            
                                <img src={m.Poster} style={{ width: 100 }}></img>
                            
                        </Link>
                    </td>
                </tr>
            )
        }
        else {
            return (
                <tr>
                    <td>{typeof(data.Search)}</td>
                </tr>
            )   
        }
    }
    catch (error) {
        alert(error)
        return (
            <tr><h1>Algo deu errado</h1></tr>
        )
    }
}