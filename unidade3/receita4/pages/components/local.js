import useSWR from 'swr'
import { fetcher } from './movies2'
export default function Local() {
    const { data, error } = useSWR(`https://extreme-ip-lookup.com/json/?key=demo2`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            <h1>Cidade: {data.city}</h1>
            <h2>Continente: {data.continent}</h2>
            <h2>País: {data.country}</h2>
            <h2>Latitude: {data.lat}</h2>
            <h2>Longitude: {data.lon}</h2>
            <h2>Orgnaização: {data.org}</h2>
            <h2>ip: {data.query}</h2>
            <h2>Regiao: {data.region}</h2>
            <h2>Horario: {data.timezone}</h2>
        </div>
    )
}