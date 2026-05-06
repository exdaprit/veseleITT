import { ReactNode } from "react";

export const metadata = {
  title: "Administrace - Veselé IT",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
