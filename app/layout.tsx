import './globals.css';

export const metadata = {
  title: 'Book Store',
  description:
    'Choose an author of your liking and create an e-commerce bookstore using Next.js and TypeScript',
};

import { Inter } from 'next/font/google';
import Link from 'next/link';
import Header from '@/components/Header';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={'min-h-screen flex flex-col relative ' + inter.className}
      >
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
        </Providers>

        <footer className="flex items-left flex-wrap justify-left border-t border-solid border-slate-300 p-4 md:p-8">
          <Link href={'https://joytaba.com/blogs'} target="_blank">
            © Designed by Jane He, 2023&nbsp;
          </Link>
        </footer>
      </body>
    </html>
  );
}
