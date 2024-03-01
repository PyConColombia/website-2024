import { Poppins } from 'next/font/google';

export const poppinsInit = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const poppins = poppinsInit.className;
