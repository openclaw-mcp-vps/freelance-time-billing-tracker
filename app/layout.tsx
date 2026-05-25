import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTrack — Track billable time with automatic client invoicing",
  description: "Time tracking tool that automatically generates invoices based on logged hours, integrates with payment processors, and sends payment reminders. Built for freelancers, consultants, and service providers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="46be75a3-a9df-4c27-8666-561dd950412c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
