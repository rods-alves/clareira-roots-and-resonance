import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoHorizontal from "@/assets/clareira-logo-horizontal.svg";
import { nav, site } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60"
            : "bg-[color:var(--forest)]/35 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
            <img
              src={logoHorizontal}
              alt={site.name}
              className="h-11 sm:h-12 w-auto shrink-0 object-contain"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
              decoding="async"
            />
          </Link>

          <nav
            className={`hidden lg:flex items-center gap-1 ${
              scrolled ? "" : "text-[color:var(--cream)]"
            }`}
            style={scrolled ? undefined : { textShadow: "0 1px 3px rgba(0,0,0,0.45)" }}
          >
            {nav.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm transition-colors ${
                    scrolled
                      ? "text-primary/80 hover:text-primary"
                      : "text-[color:var(--cream)] hover:text-white"
                  }`}
                  activeProps={{ className: "font-medium" }}
                  activeOptions={{ exact: item.to === "/" }}
                  aria-haspopup={item.children ? "menu" : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.children && (
                  <div
                    role="menu"
                    className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-0 top-full pt-2 transition-all duration-200"
                  >
                    <div className="min-w-[220px] rounded-md border border-border bg-background/95 backdrop-blur-md shadow-lg py-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          hash={c.hash}
                          role="menuitem"
                          className="block px-4 py-2 text-sm text-primary/80 hover:text-primary hover:bg-secondary/60 focus-visible:bg-secondary/60 focus-visible:outline-none transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              scrolled ? "border-border text-primary" : "border-white/40 text-[color:var(--cream)]"
            }`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[72px] bg-background transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full overflow-y-auto px-6 py-8 flex flex-col gap-1">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-border/50">
              <div className="flex items-center justify-between">
                <Link
                  to={item.to}
                  onClick={() => !item.children && setOpen(false)}
                  className="flex-1 py-4 font-serif text-2xl text-primary"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                    aria-label="Expandir"
                    className="p-3 text-primary/60"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openGroup === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.children && openGroup === item.label && (
                <div className="pb-4 pl-2 flex flex-col gap-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      hash={c.hash}
                      onClick={() => setOpen(false)}
                      className="py-2 text-base text-primary/70"
                    >
                      — {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
