import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Scroll Kingdom",
  description: "Scroll Kingdom Co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
