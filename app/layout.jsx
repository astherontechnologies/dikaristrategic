import "./globals.css";

export const metadata = {
  title: "Dikari Strategic",
  description:
    "Dikari Strategic: agensi strategi pemasaran dan pengembangan IP, bagian dari Dayana Network. Make it and Sale!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Silkscreen:wght@400;700&family=Montserrat:wght@800&family=Libre+Baskerville:ital@1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
