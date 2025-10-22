import "./globals.css";
import Header from "../components/Header/Header"; // import Footer from "./components/Footer";
import Footer from "../components/Footer/Footer";
export const metadata = {
  title: "ShopProject",
  description: "Luxury shop website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}