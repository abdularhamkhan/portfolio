import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#connect", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-apple-line bg-apple-header backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[52px] max-w-6xl items-center justify-between gap-3 px-5 md:h-14 md:px-8">
        <a
          href="/"
          className="shrink-0 text-[15px] font-semibold tracking-tight text-apple-ink transition-opacity hover:opacity-70"
        >
          Abdul Arham Khan
        </a>
        <nav
          className="mx-4 hidden min-w-0 flex-1 items-center justify-center gap-6 overflow-x-auto md:flex md:gap-8"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-medium text-apple-muted transition-colors hover:text-apple-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="https://drive.google.com/drive/folders/1RZp6oF_AN_49H6d0tOAkBErd8-LDAI_Y?usp=sharing"
            className="rounded-full bg-apple-blue px-4 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-apple-blue-hover md:px-5"
          >
            Résumé
          </a>
        </div>
      </div>
    </header>
  );
}
