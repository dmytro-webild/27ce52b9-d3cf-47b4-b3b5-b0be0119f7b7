import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Unusual Stories - Beyond Magic, Beyond Ordinary',
  description: 'Discover a unique collection of typed stories, penned by friends, offering unexpected narratives and imaginative worlds. New episodes posted regularly!',
  keywords: ["unusual stories, typed content, unique narratives, non-magic fantasy, sci-fi, mystery, adventure, creative writing, episodic stories"],
  openGraph: {
    "title": "Unusual Stories - Beyond Magic, Beyond Ordinary",
    "description": "Discover a unique collection of typed stories, penned by friends, offering unexpected narratives and imaginative worlds. New episodes posted regularly!",
    "url": "https://unusualstories.com",
    "siteName": "Unusual Stories",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/nude-woman-many-yellow-balloons_23-2148190086.jpg",
        "alt": "Open book revealing magical landscape"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Unusual Stories - Beyond Magic, Beyond Ordinary",
    "description": "Discover a unique collection of typed stories, penned by friends, offering unexpected narratives and imaginative worlds. New episodes posted regularly!",
    "images": [
      "http://img.b2bpic.net/free-photo/nude-woman-many-yellow-balloons_23-2148190086.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
