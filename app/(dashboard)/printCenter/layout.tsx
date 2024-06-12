import Header from "@/components/layout/header-print-center";
import Sidebar from "@/components/layout/sidebar-printCenter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hibrit Posta",
  description: "Postalar için servis",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
