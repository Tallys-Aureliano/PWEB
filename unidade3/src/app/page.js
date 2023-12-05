import Link from "next/link"
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline b">
        Hello world!
      </h1>
      <div>
            <h1>Terceira Unidade por <a href="https://github.com/tallysdev/PWEB">Tallys Aureliano</a></h1>
            <Link href="/receita0/">
                <h1>Receita 0 - 1</h1>
            </Link>
            <Link href="/receita2/">
                <h1>Receita2</h1>
            </Link>
            <Link href="/receita3/">
                <h1>Receita3</h1>
            </Link>
            <Link href="/receita4/">
                <h1>Receita4</h1>
            </Link>
            <Link href="/receita5/">
                <h1>Receita5</h1>
            </Link>
            <Link href="/receita6/">
                <h1>Receita6</h1>
            </Link>
            <Link href="/receita7/">
                <h1>Receita7</h1>
            </Link>
            <Link href="/receita8/">
                <h1>Receita8</h1>
            </Link>
            <Link href="/receita9/">
                <h1>Receita9</h1>
            </Link>
        </div>
    </main>
  )
}
