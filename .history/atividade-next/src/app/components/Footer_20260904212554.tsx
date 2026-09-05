import Link from "next/link";

export default function Footer()
{
    return(
        <footer className="relative bg-[#101828] w-screen h-53 grid grid-cols-3 pt-10 bottom-20">
            <article>
                <h1 className="text-[#FF6900] text-3xl pl-10
                ">
                    Sabor & Arte
                </h1>

                <p>
                    O melhor menu digital da regiao. Pratos artesanais feitos com
                    paixão, ingredientes frescos e entrega rápida na sua mesa.
                </p>
            </article>

            <nav className="flex flex-col">
                <h2 className="text-white font-bold text-xl">
                    Navegação
                </h2>

               <Link href= "" className="text-white">Início</Link>
               <Link href= "" className="text-white">Cardápio Completo</Link>
               <Link href= "" className="text-white">Categorias</Link>
            </nav>

            <article>
                <h2 className="text-white font-bold text-xl">
                    Funcionamento
                </h2>

                <p>
                    Terça a Domingo: 18h às 23h30
                    Atendimento local e Delivery
                </p>

                <hr />

                <p>Dúvidas ou Reservas?</p>
                <p className="text-[#FF6900] font-bold">(47) 99999-9999</p>
            </article>
        </footer>
    );
}