import Link from 'next/link'
export default function index() {

    return (
        <div>
            <h1>Terceira Unidade por <a href="https://github.com/tallysdev/PWEB">Tallys Aureliano</a></h1>
            <Link href="/receita0/receita0">
                <h1>Receita 0 - 1</h1>
            </Link>
            <Link href="/receita2/receita2">
                <h1>Receita2</h1>
            </Link>
            <Link href="/receita3/receita3">
                <h1>Receita3</h1>
            </Link>
            <Link href="/receita4/receita4">
                <h1>Receita4</h1>
            </Link>
            <Link href="/receita5/receita5">
                <h1>Receita5</h1>
            </Link>
            <Link href="/receita6/receita6">
                <h1>Receita6</h1>
            </Link>
        </div>
    )
}