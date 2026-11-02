import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { useRevealOnEnter } from "@/hooks/use-reveal-on-enter";

export function ErrorPage() {
  const reveal = useRevealOnEnter();

  return (
    <motion.main
      className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center"
      {...reveal}
    >
      <h1>Algo deu errado</h1>
      <p>Não foi possível carregar esta página.</p>
      <Link className="underline underline-offset-4" reloadDocument to="/">
        Voltar para o início
      </Link>
    </motion.main>
  );
}
