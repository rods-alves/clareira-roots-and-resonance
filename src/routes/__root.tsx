import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { WhatsAppFloatButton } from "../components/site/WhatsAppFloatButton";
import { Footer } from "../components/site/Footer";
import { NewsletterInline } from "../components/site/NewsletterInline";
import { ContactWhatsAppForm } from "../components/site/ContactWhatsAppForm";
import { CookieConsentBanner } from "../components/site/CookieConsentBanner";
import { site } from "../lib/site-data";
import clareiraSimbolo from "../assets/clareira-simbolo.svg";

// Google Consent Mode v2 default state — denied until the visitor chooses
// otherwise in CookieConsentBanner. No GA/Ads script is loaded yet (no
// measurement ID); this just gets the consent signal ready so wiring GA/Ads up
// later is a drop-in, not a rearchitecture.
const CONSENT_MODE_DEFAULT_SNIPPET = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
`;

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}${clareiraSimbolo}`,
  email: site.email,
  sameAs: [site.instagram],
  description:
    "Projeto regenerativo na Serra da Mantiqueira, nos Marins (Piquete-SP), com experiências, estadias e saberes que aproximam pessoas da natureza e do território.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.whatsapp,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Clareira" },
      { name: "theme-color", content: "#1F3B2E" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Must run before any other script (GA/Ads included, once installed). */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_DEFAULT_SNIPPET }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // /newsletter already has its own native newsletter capture — skip the global
  // block there so it isn't shown twice on that page.
  const isNewsletterPage = pathname === "/newsletter";
  // /contato embeds ContactWhatsAppForm directly in its own two-column layout —
  // skip the global block there so it isn't shown twice on that page.
  const isContatoPage = pathname === "/contato";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        {!isContatoPage && (
          <section className="px-6 sm:px-10 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl">
              <ContactWhatsAppForm />
            </div>
          </section>
        )}
        {!isNewsletterPage && (
          <section className="px-6 sm:px-10 py-20 sm:py-28">
            <div className="mx-auto max-w-4xl">
              <NewsletterInline />
            </div>
          </section>
        )}
        <Footer />
      </div>
      <WhatsAppFloatButton />
      <CookieConsentBanner />
    </QueryClientProvider>
  );
}
