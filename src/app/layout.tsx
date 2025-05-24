import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ToastContainer} from "react-toastify";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas_Portolio",
  description: "A web devloper raised in morocco , 18yr passionate about building responsive fullstack website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${inter.className} bg-background text-white antialiased`}
      >
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
