import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reparin",
  description: "Cepat, Tepat, dan Terpercaya.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <h1>Pindah ke reparin</h1>
        <p>This page will redirect to https://reparin.xyz .</p>
      </body>
    </html>
  );
}
