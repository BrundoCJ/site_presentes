
import "./globals.css";

export const metadata = {
  title: "Lista de Presentes",
  description: "08 . 04 . 2004"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
