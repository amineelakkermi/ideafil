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
  title: " أيدفل - وكالة تسويقية تملأ أفكارك بالإبداع. ",
  description:
    "وكالة تسويق رقمي متخصصة في تصميم الهوية البصرية، تطوير المواقع، وحلول التسويق الإبداعية في المملكة العربية السعودية",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
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
