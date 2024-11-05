import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResponsiveNav from "./components/Home/Nav/ResponsiveNav"; // Importing the responsive navigation
import Footer from "./components/Home/Footer/Footer"; // Importing the footer

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

// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#212428] antialiased">
        {/* Use ResponsiveNav for navigation */}
        <header>
          <ResponsiveNav /> {/* Render the ResponsiveNav component */}
        </header>

        {/* Main content area where children will be rendered */}
        <main>{children}</main>

        {/* Use Footer for footer content */}
        <footer>
          <Footer /> {/* Render the Footer component */}
        </footer>
      </body>
    </html>
  );
}


// // import { Html } from 'next/document';
// import type { Metadata } from "next";
//  import localFont from "next/font/local";
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

// // src/app/layout.tsx
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-[#212428] antialiased">
//       {/* Add a Header component if needed */}
//       <header>
//         <nav>
//           {/* Navigation links go here */}
//         </nav>
//       </header>

//       {/* Main content area where children will be rendered */}
//       <main>{children}</main>

//       {/* Add a Footer component if needed */}
//       <footer>
//         {/* Footer content goes here */}
//       </footer>
//     </div>
//   );
// }




// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212428]`}
//       >
//         <ResponsiveNav />
//         {children}
//         <Footer />
       
//       </body>
//     </html>
//   );
// }










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
