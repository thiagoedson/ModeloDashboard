import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Dashboard Whitelabel",
  description: "Dashboard moderno com Next.js 15, React 19, Tailwind CSS e shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
