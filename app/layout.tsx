
import "./globals.css";

export const metadata = {
  title: "Lista de Presentes",
  description: "Curadoria pessoal de presentes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
