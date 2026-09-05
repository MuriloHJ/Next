
export default async function DetalhePrato({ params } : ) 
{
// Capturando o ID único (UUID) que vem da URL
const { id } = await params;
return 
(
    <div className="p-10">
    <h1 className="text-2xl font-bold">Ficha Técnica do Produto</h1>
    <p className="mt-4">ID do Sistema: <span className="font-mono
    text-orange-600">{id}</span></p>
    <hr className="my-4" />
    <p className="text-gray-600 italic">
    Buscando ingredientes e valores nutricionais para o item de identificação {id}...
    </p>
    </div>
);
}