import { Metadata } from 'next';
import { PaymentInfo } from '~/components/payment-info';
import { Button } from '~/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Informasi Pembayaran | Pondok Kang Dilla',
  description:
    'Informasi pembayaran, harga, dan kontak untuk Pondok Kang Dilla.',
};

export default function PaymentPage() {
  return (
    <main className='min-h-screen mt-[40px] bg-gradient-to-b from-white via-gray-50 to-white'>
      <div className='container mx-auto px-4 py-8'>
        <Link
          href='/renting'
          className='inline-flex items-center gap-2 text-primary hover:underline mb-8 font-roboto'
        >
          <ArrowLeft className='h-4 w-4' />
          Kembali ke Halaman Utama
        </Link>
        <h1 className='text-4xl md:text-5xl font-bold mb-8 font-roboto'>
          Informasi Pembayaran
        </h1>
        <p className='text-lg text-muted-foreground mb-12 font-roboto font-light max-w-3xl'>
          Silakan temukan informasi lengkap tentang cara pembayaran, harga
          kamar, dan kontak untuk survey lokasi Pondok Kang Dilla di bawah ini.
        </p>
        <PaymentInfo />

        <div className='mt-16 mb-8'>
          <h2 className='text-2xl font-bold mb-6 font-roboto flex items-center gap-2'>
            <MapPin className='h-5 w-5 text-primary' />
            Lokasi Pondok Kang Dilla
          </h2>
          <div className='w-full rounded-lg overflow-hidden shadow-lg border border-gray-200'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.634900915547!2d107.65114597468748!3d-6.934236693067444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bfc6f18c0b%3A0x889af95327e0b484!2sPondok%20Kang%20Dilla!5e0!3m2!1sen!2sid!4v1694518946789!5m2!1sen!2sid'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='hover:opacity-95 transition-opacity duration-300'
              title='Lokasi Pondok Kang Dilla di Google Maps'
            ></iframe>
          </div>
          <p className='text-sm text-muted-foreground mt-3 font-roboto font-light text-center'>
            Jl. Sukamanah baru no.7 (cibalagung) RT.005/013 sukapura
            kiaracondong, Bandung
          </p>
        </div>
      </div>
    </main>
  );
}
