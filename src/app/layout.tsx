import type { Metadata } from "next";
import { Header, Footer } from '@/components'
import "./globals.css";


export const metadata: Metadata = {
  title: "MangaAcademia",
  description: "MangaAcademia es un streamer apasionado de Overwatch, conocido por sus habilidades en el juego y su entretenido contenido en vivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
