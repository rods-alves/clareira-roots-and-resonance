# Deploy — Hostinger (export estático)

Sempre que o conteúdo do site mudar, repita este processo pra gerar uma pasta
`static-export/` pronta pra subir na Hostinger.

## Passo a passo

1. `npm run build`
   Gera o build de produção em `.output/` (client em `.output/public/`, servidor em `.output/server/index.mjs`).

2. `npx wrangler dev .output/server/index.mjs --port 8787`
   Sobe o worker localmente pra simular o ambiente Cloudflare. Deixe rodando num terminal — é contra ele que o script de export vai buscar o HTML de cada rota.

   Se aparecer um erro do tipo "Found both a user configuration file... and a deploy configuration file", apague a pasta `.wrangler/` na raiz do projeto (é só cache local, gitignored) e rode o comando de novo.

3. Em outro terminal: `python scripts/static-export.py`
   Copia todos os assets de `.output/public/` para `static-export/` e faz um `GET` em cada rota conhecida do site contra `http://127.0.0.1:8787`, salvando a resposta como `static-export/<rota>/index.html` (ex: `/sobre` → `static-export/sobre/index.html`; `/` → `static-export/index.html`).

   Se uma rota nova for adicionada ao site, inclua o caminho dela na lista `ROUTES` no topo do script.

4. Confira localmente antes de publicar:
   ```bash
   cd static-export
   python -m http.server 8000
   ```
   Abra `http://localhost:8000` e navegue pelo site (não abra os arquivos `.html` direto do disco com `file://` — os assets usam caminhos absolutos tipo `/assets/...` e só resolvem servidos a partir da raiz). Confirme que as páginas carregam com estilo certo, que interações client-side (como o accordion de FAQ em `/raiz-e-riso`) funcionam, e que o console do navegador não mostra 404 de asset.

5. Suba o conteúdo de `static-export/` (tudo o que está dentro da pasta, não a pasta em si) via Gerenciador de Arquivos do hPanel, para dentro de `public_html/`.

## Encerrando os processos locais

Depois de conferir, pode encerrar o `wrangler dev` (Ctrl+C no terminal dele) e o `python -m http.server` (Ctrl+C também).
