import os
import shutil
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_PUBLIC = os.path.join(ROOT, ".output", "public")
OUT_DIR = os.path.join(ROOT, "static-export")
BASE_URL = "http://127.0.0.1:8787"

ROUTES = [
    "/",
    "/sobre",
    "/raiz-e-riso",
    "/newsletter",
    "/contato",
    "/termos-de-uso",
    "/politica-de-privacidade",
    "/politica-de-cookies",
    "/blog",
    "/estadias",
    "/mato-adentro",
    "/saberes-digitais",
    "/territorio-local",
    "/experiencias/personalizadas",
]

if os.path.exists(OUT_DIR):
    shutil.rmtree(OUT_DIR)
shutil.copytree(SRC_PUBLIC, OUT_DIR)
print(f"Copied assets from {SRC_PUBLIC} -> {OUT_DIR}")

for route in ROUTES:
    url = BASE_URL + route
    with urllib.request.urlopen(url) as resp:
        status = resp.status
        html = resp.read()

    route_dir = os.path.join(OUT_DIR, route.strip("/"))
    os.makedirs(route_dir, exist_ok=True)
    out_path = os.path.join(route_dir, "index.html")
    with open(out_path, "wb") as f:
        f.write(html)

    print(f"{route} -> {status} ({len(html)} bytes) -> {out_path}")

print("Done.")
