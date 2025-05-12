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
        <div className="flex min-h-screen bg-[#F8F8F8]">
          <Sidebar />
          <div className="flex-1 flex justify-center items-start">
            <div className="main-container">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
