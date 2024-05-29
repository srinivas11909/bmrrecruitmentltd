import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import Headers from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CommonHeader from "@/components/header/CommonHeader";
const inter = Inter({ subsets: ["latin"] });
import { auth } from "@/auth";


export const metadata = {
  title: "BMR Recruitment Ltd",
  description: "One Stop for your job search",
};

export default async function RootLayout({ children }) {
  const session = await auth();


  return (
   <SessionProvider session={session}> 
    <html lang="en">
      <body className={inter.className}>
        <CommonHeader />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
    </SessionProvider>
  );
}
