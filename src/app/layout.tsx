import type { Metadata } from "next";
import Head from "next/head";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     
      <Head>
        <title>Asia | portfolio</title>
        <meta name="description" content="portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

     
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212428]`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </div>
    </>
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
//       <body className={`${geistSans.variable}${geistMono.variable}antialiased bg-[#212428]`}
//       >
//         <ResponsiveNav/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
       
