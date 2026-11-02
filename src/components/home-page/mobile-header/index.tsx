import { EditionLabel } from "@/components/edition-label";
import { ThemeToggle } from "@/components/theme-toggle";

export function MobileHeader() {
  return (
    <header className="flex items-center justify-between px-5 pt-4 md:hidden">
      <div className="flex flex-col">
        <span className="type-wordmark text-ink">Meridiano</span>
        <EditionLabel />
      </div>
      <ThemeToggle compact />
    </header>
  );
}
