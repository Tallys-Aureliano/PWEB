import Link from 'next/link'
export default function recita4() {
    return (
        <div>
            <h1>Receita4 por Tallys Aureliano</h1>
            <Link href="./components/movies2">
                <h1>1. Movie2</h1>
            </Link>
            <Link href="./components/local">
                <h1>2. Seu Local</h1>
            </Link>
            <Link href="./components/movies">
                <h1>3. Movie</h1>
            </Link>
            <Link href="./components/movies3">
                <h1>4. Movie3</h1>
            </Link>
        </div>
    )
}   