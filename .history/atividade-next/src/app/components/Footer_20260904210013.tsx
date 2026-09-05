import Link from "next/link";

export default function Footer()
{
    return(
        <footer className="relative bg-[#101828] w-screen">
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
                    Terça a Domingo: 18h às 23h30
                    Atendimento local e Delivery
                </p>

                <hr />

                <p>Dúvidas ou Reservas?</p>
                <p>(47) 99999-9999</p>
            </article>
        </footer>
    );
}