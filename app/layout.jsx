import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Roushan Poddar",
  description: "Roushan's Portfolio Website",
  icons: {
    icon: ["/images/iconr4.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`scrollbar-hide`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
