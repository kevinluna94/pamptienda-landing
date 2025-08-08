// src/app/layout.tsx - Código Corregido
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PampTienda - Tu E-commerce en Minutos',
  description: 'Crea tu tienda online fácilmente con PampTienda, la plataforma de e-commerce sin código.',
};

// El layout ahora solo se encarga de la estructura HTML base y el children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
