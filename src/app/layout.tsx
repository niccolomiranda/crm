import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "CRM Manager",
  description: "Customer Relationship Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gradient-to-b from-[#181C22] to-[#233040]">
          <Sidebar />
          <main className="flex-1 flex justify-center items-stretch">
            <div className="main-container">
              <div className="main-content-inner">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
