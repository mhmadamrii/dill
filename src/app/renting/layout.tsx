import Link from 'next/link';

import { Metadata } from 'next';
import { Footer } from '~/components/footer';
import { DialogMessage } from '~/components/dialog-message';

export const metadata: Metadata = {
  title: 'Rental Property',
  description: 'Explore our beautiful rental properties',
};

export default function RentingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-white'>
      <nav className='fixed top-0 w-full flex gap-2 items-center z-50 bg-white/80 backdrop-blur-sm shadow-sm'>
        <div className='container mx-auto px-4 py-4 flex items-center gap-1.5 justify-between'>
          <div className='flex w-full items-center justify-between'>
            <Link
              href='/renting'
              className='text-xl flex items-center gap-1 font-bold'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='#000'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9.778V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311 2.3 2.3 0 0 1-.494.18M5 9.778V16.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311q.224.115.494.18M21 12l-5.433-6.036c-1.236-1.373-1.854-2.06-2.581-2.313a3 3 0 0 0-1.974 0c-.728.254-1.345.94-2.58 2.313L3 12m4.132 8.854a5.002 5.002 0 0 1 9.736 0m-9.736 0C7.722 21 8.515 21 9.8 21h4.4c1.285 0 2.079 0 2.668-.146M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0'
                ></path>
              </svg>
              <span>Kang Dilla</span>
            </Link>
            <div className='flex items-center gap-6'>
              <Link href='/renting/gallery' className='hover:underline'>
                Gallery
              </Link>
              <Link href='/renting/payment' className='hover:underline'>
                Pembayaran
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
}
