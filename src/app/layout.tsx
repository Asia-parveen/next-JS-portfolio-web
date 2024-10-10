// import { Html } from 'next/document';
import type { Metadata } from "next";
 import localFont from "next/font/local";
import "./globals.css";
import ResponsiveNav from "./components/Home/Nav/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Asia | portfolio",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212428]`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
       
      </body>
    </html>
  );
}










// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import ResponsiveNav from "./components/Home/Nav/ResponsiveNav";
// import Footer from "./components/Home/Footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Asia | portfolio",
//   description: "portfolio website",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212428]`}>

//         <ResponsiveNav/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
