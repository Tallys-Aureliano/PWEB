import useSWR from 'swr'
import { useState } from 'react'
import tailwindConfig from '../../../tailwind.config'

export default function Movies3() {
    const [url, setUrl] = useState('')
    const { data, error } = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('http://www.omdbapi.com/?apikey=4b8b5472&s=ussr')
        else setUrl('')
    }

    return (
        <div>
            <link rel="stylesheet" href={tailwindConfig.theme.extend.colors.green} />
            <TheLink url={url} handler={onClickHandler} />
            <TheMovies data={error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }} show={url !== ''} />
        </div>
    )
}
async function theFetcher(url) {

    if (url === null || url === '') return { Search: '' }

    const res = await fetch(url);

    const json = await res.json();

    return json;

}
export function TheMovies({ data, show }) {

    if (!show) return (<div><h2>vish...</h2></div>)
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '') return (<div>carregando...</div>)
    
    return (
        <div>
            {data.Search.map((m) => <div className="text-center text-green border-2">{
            m.Title} --- {m.Year}</div>)}
        </div>
    )
}
export function TheLink({url, handler}){    
    return (
        <div>
            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}