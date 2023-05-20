"use client";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { lexend } from "@/font";
import Navbar from "@/components/Navbar";
import useLoading from "@/utils/useLoading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Footer from "@/components/Footer";

const metadata = {
  title: "Jack&June",
  description: "Jack&June is a detailed shop for men and women fashion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useLoading();
  return (
    <html lang="en" className={lexend.className}>
      <body>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: `${lexend}`,
          }}
        >
          {loading ? (
            "Loading..."
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
