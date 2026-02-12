export default function Page() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Clientes</h2>
        <button className="rounded-md bg-black px-3 py-2 text-sm text-white">
          Novo Cliente
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600">Lista de clientes vai aparecer aqui.</p>
    </div>
  );
}
