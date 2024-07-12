import { dir } from 'i18next';
import type { Metadata } from "next";
import { IBM_Plex_Mono, Ubuntu } from "next/font/google";
import "~/assets/styles/styles.scss";
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-mono",
  subsets: ["latin"],
});
const ubuntu = Ubuntu({
  weight: ["300", "400"],
  style: ["normal"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});


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
      </head>
      <body className={`${ibmPlexMono.variable} ${ubuntu.variable}`}>{children}</body>
    </html>
  );
}
