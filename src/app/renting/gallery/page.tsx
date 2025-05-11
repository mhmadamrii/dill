import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galeri Foto | Pondok Kang Dilla',
  description: 'Lihat koleksi foto-foto kamar dan fasilitas Pondok Kang Dilla.',
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    alt: 'Kamar dengan jendela besar',
    width: 600,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457',
    alt: 'Dapur minimalis',
    width: 600,
    height: 400,
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    alt: 'Ruang santai',
    width: 600,
    height: 750,
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    alt: 'Area kerja',
    width: 600,
    height: 500,
  },
  {
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
    alt: 'Kamar mandi',
    width: 600,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    alt: 'Tempat tidur',
    width: 600,
    height: 400,
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
    alt: 'Ruang depan',
    width: 600,
    height: 700,
  },
  {
    src: 'https://images.unsplash.com/photo-1459535653751-d571815e906b',
    alt: 'Lemari',
    width: 600,
    height: 450,
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    alt: 'Meja belajar',
    width: 600,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
    alt: 'Garasi',
    width: 600,
    height: 500,
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    alt: 'Ruang tamu',
    width: 600,
    height: 600,
  },
  {
    src: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da',
    alt: 'Tampak depan',
    width: 600,
    height: 750,
  },
];

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

        {/* Masonry Grid Layout */}
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='break-inside-avoid rounded-lg overflow-hidden hover:opacity-90 transition-all duration-300 hover:shadow-xl'
            >
              <div className='relative'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className='w-full h-auto'
                />
                <div className='absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end'>
                  <div className='w-full bg-black/60 text-white p-3'>
                    <p className='font-roboto text-sm'>{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='fixed bottom-8 right-8'>
        <Link
          href='https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F'
          target='_blank'
          className='bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-2 font-roboto'
        >
          <Phone className='h-5 w-5' /> Booking Sekarang
        </Link>
      </div>
    </main>
  );
}
