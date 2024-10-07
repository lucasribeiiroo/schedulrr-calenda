import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import "./globals.css";
import CreateEventDrawer from "@/components/create-event";

export const metadata: Metadata = {
  title: "Schedulrr",
  description: "Metting Scheduling App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 p-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>@Copywright 2024</p>
            </div>
          </footer>
          {/* Footer */}
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
