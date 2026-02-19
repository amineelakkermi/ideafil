import localFont from "next/font/local"
import "./globals.css"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import FloatingButtons from "./components/FloatingButtons"
import SmoothProvider from "./components/SmoothProvider"

const handicrafts = localFont({
  src: "./fonts/TheYearofHandicrafts-Regular.otf",
  variable: "--font-handicrafts",
  weight: "400",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://ideafil.sa/"), 

  title: {
    default: "ايدفل | افضل شركة تصميم هوية بصرية وتسويق رقمي في السعودية",
    template: "%s | أيدفل وكالة تسويق رقمي",
  },

  description:
    "أيدفل وكالة تسويق رقمي في السعودية متخصصة في تصميم الهوية البصرية، تطوير المواقع والتطبيقات، إدارة العلامات التجارية، الحملات الإعلانية، واستراتيجيات التسويق وصناعة المحتوى.",

  keywords: [
    "وكالة تسويق رقمي",
    "تصميم هوية بصرية",
    "تصميم مواقع إلكترونية",
    "تطوير مواقع",
    "تطوير تطبيقات",
    "إدارة العلامة التجارية",
    "خطة تسويقية",
    "حملات إعلانية",
    "تصميم ثلاثي الأبعاد",
    "شركة تسويق في السعودية",
    "Website Development Saudi Arabia",
    "Branding Agency Saudi Arabia",
  ],

  authors: [{ name: "أيدفل" }],
  creator: "أيدفل",
  publisher: "أيدفل",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "أيدفل | وكالة تسويق رقمي وهوية بصرية وتطوير مواقع",
    description:
      "وكالة متخصصة في البراندينق، تطوير المواقع والتطبيقات، واستراتيجيات التسويق الإبداعية في المملكة العربية السعودية.",
    url: "https://ideafil.sa/",
    siteName: "أيدفل",
    locale: "ar_SA",
    type: "website",
  },


  category: "Marketing Agency",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${handicrafts.variable} antialiased`}>

        <ScrollTop />
        <FloatingButtons />

        <SmoothProvider>
          {children}
          <Footer />
        </SmoothProvider>

      </body>
    </html>
  )
}
