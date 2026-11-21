import type { MetadataRoute } from "next";

// Rend l'application installable (Chrome/Edge/Android : « Installer l'application »).
// Pas de service worker : les pages affichent des données de sécurité authentifiées, rien ne doit être mis en cache hors ligne.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Openkido — Sécurité applicative",
    short_name: "Openkido",
    description: "SCA, CVE scanning, SBOM pour vos repos GitHub.",
    lang: "fr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d0c22",
    theme_color: "#0d0c22",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
