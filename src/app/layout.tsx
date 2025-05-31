import type {Metadata} from "next";
import {Inter,Noto_Sans_Display} from "next/font/google";
import "./globals.css";
import {ToastContainer} from "react-toastify";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const noto = Noto_Sans_Display({
  variable: "--font-noto-head",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ads_Fast",
  description: "A web app that helps dropshippers create high-converting Facebook ads — in seconds — using AI Instead of spending hours writing ad copy or hiring designers,users just fill in a simple form then they get the ad simple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${inter.className} ${noto.variable} bg-white text-black antialiased`}
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
