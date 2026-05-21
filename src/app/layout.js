import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SunCart",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        <div className="min-h-[calc(100vh-300px)]">
          {children}
        </div>

        <Footer />

        <Toaster/>

      </body>

    </html>
  );
}