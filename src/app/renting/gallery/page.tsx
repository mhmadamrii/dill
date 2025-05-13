import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Fab } from '~/components/fab';

export const metadata: Metadata = {
  title: 'Galeri Foto | Pondok Kang Dilla',
  description: 'Lihat koleksi foto-foto kamar dan fasilitas Pondok Kang Dilla.',
};

export default function Gallery() {
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
          Galeri Foto
        </h1>

        <p className='text-lg text-muted-foreground mb-12 font-roboto font-light max-w-3xl'>
          Lihat koleksi foto-foto kamar dan fasilitas Pondok Kang Dilla untuk
          memberikan gambaran tentang kenyamanan yang akan Anda dapatkan.
        </p>

        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
          {Array.from({ length: 13 }).map((_, index) => (
            <div
              key={index}
              className='break-inside-avoid rounded-lg overflow-hidden hover:opacity-90 transition-all duration-300 hover:shadow-xl'
            >
              <div className='relative'>
                <Image
                  src={`/kost${index + 1}.jpeg`}
                  alt={`${index + 1} alternative`}
                  width={700}
                  height={500}
                  className='w-full h-auto'
                />
                <div className='absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end'>
                  <div className='w-full bg-black/60 text-white p-3'>
                    <p className='font-roboto text-sm'>Kost Kang Dilla</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Fab />
    </main>
  );
}
