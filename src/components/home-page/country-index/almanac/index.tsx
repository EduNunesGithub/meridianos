import { almanacFacts } from "@/data/almanac-facts";

export function Almanac() {
  return (
    <aside className="flex flex-col gap-8 border-y border-line-strong py-8 lg:flex-row lg:gap-12">
      <div className="flex shrink-0 flex-col gap-2 lg:w-55">
        <span className="type-label text-accent">Almanaque</span>
        <h3 className="type-quote-heading text-ink">Você sabia?</h3>
      </div>
      <ol className="grid flex-1 gap-6 md:grid-cols-3">
        {almanacFacts.map((fact) => (
          <li
            className="flex flex-col gap-3 border-l border-line pl-6"
            key={fact.number}
          >
            <span className="type-count text-accent">{fact.number}</span>
            <p className="type-display-md text-ink">{fact.statement}</p>
            <p className="type-body">{fact.detail}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}
