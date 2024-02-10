import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import NavBar from "@/components/NavBar";
import 'react-toastify/dist/ReactToastify.css'




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz",
  description: "Take a Quiz",
};


const JOSEFINSLAB_FONT = localFont({
  src: [
    {
      path: '../../public/assets/fonts/JosefinSlab-Thin.ttf',
      weight: '50',
      style: 'thin',
    },
    {
      path: '../../public/assets/fonts/JosefinSlab-ExtraLight.ttf',
      weight: '100',
      style: 'extralight',
    },


    {
      path: '../../public/assets/fonts/JosefinSlab-Light.ttf',
      weight: '200',
      style: 'light',
    },

    {
      path: '../../public/assets/fonts/JosefinSlab-Regular.ttf',
      weight: '300',
      style: 'normal',
    },

    {
      path: '../../public/assets/fonts/JosefinSlab-Medium.ttf',
      weight: '400',
      style: 'midium',
    },

    {
      path: '../../public/assets/fonts/JosefinSlab-SemiBold.ttf',
      weight: '500',
      style: 'semibold',
    },

    {
      path: '../../public/assets/fonts/JosefinSlab-Bold.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  display: 'swap',
  variable: '--font-josefin',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={clsx(JOSEFINSLAB_FONT.variable, 'font-primary bg-primary-50 container mx-auto p-5')}>
      <NavBar/>
        <NextTopLoader color='#00F0A5' />
          {children}
        <ToastContainer />
      </body>
    </html>
  );
}
