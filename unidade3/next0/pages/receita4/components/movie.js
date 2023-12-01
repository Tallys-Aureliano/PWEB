import { useRouter } from 'next/router';
import useSWR from 'swr'
import { fetcher } from './movies2';

export default function Movie() {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    try {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={data.Poster}></img>
                <h1>Título: {data.Title}</h1>
                <h2>Ano: {data.Year}</h2>
                <h3>Gênero: {data.Genre}</h3>
                <h3>Sinopse: {data.Plot}</h3>
                <h3>Diretor: {data.Director}</h3>
                <h3>Atores: {data.Actors}</h3>
            </div>
        );
    } catch (error) {
        alert(error)
        return (
            <div>
                <h1>Algo deu errado</h1>
            </div>
        )
    }
}