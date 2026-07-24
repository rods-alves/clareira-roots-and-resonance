import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.asset.json";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img src={logoSymbol.url} alt="" className="h-10 w-10 shrink-0 object-contain" />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-serif text-xl text-primary truncate">{site.name}</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground truncate">
              experiências no território
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-primary/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>
              {item.children && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 transition-all duration-200">
                  <div className="min-w-[220px] rounded-md border border-border bg-background/95 backdrop-blur-md shadow-lg py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        hash={c.hash}
                        className="block px-4 py-2 text-sm text-primary/80 hover:text-primary hover:bg-secondary/60 transition-colors"
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
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
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
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
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