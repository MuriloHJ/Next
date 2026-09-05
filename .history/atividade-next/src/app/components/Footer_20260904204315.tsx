import Link from "next/link";

export default function Footer()
{
    return(
        <footer>
            <article>
                <h1>
                    Sabor & Arte
                </h1>

                <p>
                    O melhor menu digital da regiao. Pratos artesanais feitos com
                    paixão, ingredientes frescos e entrega rápida na sua mesa.
                </p>
            </article>

            <nav>
                <h2>
                    Navegação
                </h2>

               <Link href= "" className=""></Link>
               <Link href= "" className=""></Link>
               <Link href= "" className=""></Link>
            </nav>

            <article>
                <h1>
                    Funcionamento
                </h1>

                <p>
                    
                </p>
            </article>
        </footer>
    );
}