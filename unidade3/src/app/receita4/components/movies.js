import Link from 'next/link'
export default function Movies({ data }) {
    return (
        <div>
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
    const res = await fetch(`http://www.omdbapi.com/?apikey=4b8b5472&s=batman`)
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
    try {
        return data.Search.map((m) =>
            <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <Link href={`./movie?id=${m.imdbID}`}>
                    <td><img src={m.Poster} style={{ width: 100 }}></img></td>
                </Link>
            </tr>
        )
    } catch (error) {
        <h1>Algo deu errado me Movie</h1>
    }
}