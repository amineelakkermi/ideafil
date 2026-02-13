import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import FloatingButtons from "./components/FloatingButtons";

// Police personnalisée
const handicrafts = localFont({
  src: './fonts/TheYearofHandicrafts-Regular.otf',
  variable: '--font-handicrafts',
  weight: '400',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " أيدفل - وكالة تسويقية تملأ أفكارك بالإبداع. ",
  description: "وكالة تسويق رقمي متخصصة في تصميم الهوية البصرية، تطوير المواقع، وحلول التسويق الإبداعية في المملكة العربية السعودية",
  keywords: [
    "وكالة تسويق",
    "تصميم هوية بصرية", 
    "تطوير مواقع",
    "تسويق رقمي",
    "استشارات تسويق",
    "أيدفل",
    "المملكة العربية السعودية",
    "حلول إبداعية",
    "استراتيجيات تسويق"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${handicrafts.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollTop />
        <FloatingButtons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
