import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI — Auto-generate Shopify App Review Responses",
  description: "AI-powered tool that generates personalized responses to Shopify app store reviews. Analyze sentiment, extract issues, and craft brand-consistent replies in seconds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d8183ccd-5a4d-4b60-a5d5-c644915a6273"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
