import "./globals.css";

export const metadata = {
  title: "Abhay Kumar – Full-Stack Developer Portfolio",
  description:
    "Portfolio of Abhay Kumar, an aspiring full-stack developer building responsive web applications with React, Next.js, and modern web technologies.",
  keywords: ["Abhay Kumar", "portfolio", "full-stack developer", "React", "Next.js", "web development"],
  authors: [{ name: "Abhay Kumar" }],
  openGraph: {
    title: "Abhay Kumar – Full-Stack Developer Portfolio",
    description:
      "Portfolio of Abhay Kumar, an aspiring full-stack developer building responsive web applications with React, Next.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    siteName: "Abhay Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Kumar – Full-Stack Developer Portfolio",
    description: "Aspiring full-stack developer. React • Next.js • JavaScript.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}