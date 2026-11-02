import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe.</p>
      <Link className="underline underline-offset-4" to="/">
        Voltar para o início
      </Link>
    </main>
  );
}
