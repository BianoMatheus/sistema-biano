import Link from "next/link";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/clientes", label: "Clientes" },
  { href: "/projetos", label: "Projetos" },
  { href: "/kanban", label: "Kanban" },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <div className="mb-6">
        <div className="text-lg font-semibold">Sistema Interno</div>
        <div className="text-sm text-gray-500">Biano Store</div>
      </div>

      <nav className="space-y-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
