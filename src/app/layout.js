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
  description: "Explore thousands of job listings on our top job board. Find employment opportunities across various industries including IT, healthcare, finance, and more. Start your job search today!",
  keywords: "job listings, job search, job board, employment opportunities, careers, job openings, find jobs, work opportunities, IT jobs, healthcare jobs, finance jobs, remote jobs, part-time jobs, full-time jobs, internship opportunities, entry-level jobs"
};


export default async function RootLayout({ children }) {
  const session = await auth();
  console.log("session")
  console.log(session)

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
