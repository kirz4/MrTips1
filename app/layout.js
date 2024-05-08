import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr.Tips",
  description: "Site de piteiras de vidro exclusivas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="public/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
