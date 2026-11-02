import { Link } from "@tanstack/react-router";

export function ErrorPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <h1>Algo deu errado</h1>
      <p>Não foi possível carregar esta página.</p>
      <Link className="underline underline-offset-4" reloadDocument to="/">
        Voltar para o início
      </Link>
    </main>
  );
}
