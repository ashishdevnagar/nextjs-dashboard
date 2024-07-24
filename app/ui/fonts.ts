import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
// import lusitana and export it

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '400'
});
 
export const inter = Inter({ subsets: ['latin'] });