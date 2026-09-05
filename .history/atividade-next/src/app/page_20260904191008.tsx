

export default function Home() {
  return (
  <main className="flex flex-col items-center justify-center min-h-[70vh]">
  <h1 className="text-4xl font-bold text-orange-600">Bem-vindo ao Sabor & Arte</h1>
  <p className="mt-4 text-gray-600">O melhor cardápio da região, agora na sua
  tela.</p>
  </main>
  );
}

import ListaProdutos from './ListaProdutos'; // Server
import BotaoCarrinho from './BotaoCarrinho'; // Client
export default function PaginaVendas() {
return (
<main>
<h1>Pedidos Online</h1>
<BotaoCarrinho /> {/* Só este pedacinho gasta JS no cliente */}
<ListaProdutos /> {/* Todo o resto é HTML puro e rápido */}
</main>
);
}