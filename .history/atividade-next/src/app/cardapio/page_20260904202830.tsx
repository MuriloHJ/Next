import Image from 'next/image';
import Link from 'next/link'; // Adicionado para criar o link para a página [id]
import BotaoFavorito from '../components/BotaoLike';

// 1. CORRIGIDO: imagem alterada de 'number' para 'string'
interface Produto {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  imagem: string; // Corrigido aqui
  destacado: boolean;
  fixo: boolean;
  porcoes: number;
  valor_energetico: number;
  criado_em: string;
  atualizado_em: string;
}

export default async function PaginaCardapio() {
  let produtos: Produto[] = [];

  // 4. Adicionado bloco try/catch para evitar que a página inteira caia se a API falhar
  try {
    const resposta = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos', {
      next: { revalidate: 60 }
    });

    if (!resposta.ok) {
      throw new Error('Falha ao buscar os produtos');
    }

    // 3. CORRIGIDO: Tipando o retorno do JSON para o TypeScript reconhecer o array
    produtos = (await resposta.json()) as Produto[];
  } catch (error) {
    console.error("Erro na API:", error);
    return (
      <main className="p-10 text-center">
        <p className="text-red-500 font-semibold">Não foi possível carregar o cardápio no momento.</p>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 font-serif">Nosso Cardápio</h1>
          <p className="text-gray-500 mt-2">Pratos artesanais preparados com ingredientes frescos.</p>
        </div>
        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-400">
          {produtos.length} itens encontrados
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtos.map((prato) => {
          const urlImagemLimpa = prato.imagem?.replace(/[<>]/g, '').trim();

          return (
            <div key={prato.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-shadow group">
              {/* Envolvendo a imagem e textos com o Link para abrir o detalhe do prato */}
              <Link href={`/cardapio/${prato.id}`} className="flex flex-col flex-grow">
                <div className="relative h-56 w-full">
                  {urlImagemLimpa ? (
                    <Image
                      src={urlImagemLimpa}
                      alt={prato.nome || "Foto do prato"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                      Sem Imagem
                    </div>
                  )}
                  {prato.destacado && (
                    <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      ESTRELA DA CASA ⭐
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{prato.nome}</h2>
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                      {prato.categoria}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {prato.descricao}
                  </p>
                </div>
              </Link>

              {/* Botão de favoritos e preço ficam fora do Link principal para evitar conflito de cliques */}
              <div className="px-6 pb-6 mt-auto flex items-center justify-between border-t pt-4 bg-white">
                <span className="text-2xl font-bold text-green-700">
                  R$ {Number(prato.preco || 0).toFixed(2)}
                </span>
                <BotaoFavorito />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
