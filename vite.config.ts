// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { loadEnv } from "vite";
import { defineConfig, lovableAssetsProxyPlugin } from "@lovable.dev/vite-tanstack-config";

// Vite doesn't load unprefixed vars from .env* into process.env on its own —
// pull them in manually so lovableAssetsProxyPlugin() can see LOVABLE_PREVIEW_HOST
// (see .env.local). No-op when that var isn't set (e.g. inside Lovable itself).
Object.assign(process.env, loadEnv("development", process.cwd(), ""));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Forwards /__l5e/assets-v1/* (image URLs from *.asset.json) to the Lovable
  // preview host when LOVABLE_PREVIEW_HOST is set, so images load when running
  // `npm run dev` outside the Lovable editor. See PROJECT_NOTES.md.
  plugins: [lovableAssetsProxyPlugin()],
});
