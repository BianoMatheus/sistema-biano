import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Sistema Biano Store",
  description: "Sistema interno da Biano Store",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">
            <header className="mb-6">
              <h1 className="text-2xl font-semibold">Sistema Interno Biano Store</h1>
              <p className="text-sm text-gray-500">CRM • Projetos • Kanban</p>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

