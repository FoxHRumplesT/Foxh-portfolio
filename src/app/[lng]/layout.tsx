import { dir } from 'i18next';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/assets/styles/styles.scss";
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n';

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'landing');
  return {
    title: t('page.title'),
    description: t('page.description'),
  }
}

export default function RootLayout({
  children,
  params: {
    lng
  },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  },
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"  rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
