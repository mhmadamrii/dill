import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';
import { Button } from '~/components/ui/button';
import { Testimonial } from '~/components/testimonial';
import { Pricing } from '~/components/pricing';
import { Faq } from '~/components/faq';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Home,
  RefrigeratorIcon,
  Car,
  Sun,
  Shield,
  Sofa,
  CreditCard,
  Phone,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://kangdilla.vercel.app/renting'),
  alternates: {
    canonical: '/',
  },
  title: 'Pondok Kang Dilla | Kost ekslusif ternyaman di Bandung',
  description:
    'Pondok Kang Dilla - Kost ekslusif dengan fasilitas lengkap di Bandung, nyaman dan aman',
  openGraph: {
    title: 'Kost Ekslusif, nyaman dan aman di Bandung',
    description:
      'Pondok Kang Dilla - Kost ekslusif dengan fasilitas lengkap di Bandung, nyaman dan aman',
    url: '',
    siteName: 'Pondok Kang Dilla',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Pondok Kang Dilla',
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function Renting() {
  const facilities = [
    {
      title: 'Ruang Kost yang Bersih',
      description:
        'Kamar kost yang selalu terjaga kebersihannya untuk kenyamanan penghuni',
      icon: Home,
    },
    {
      title: 'Kulkas Bersama',
      description:
        'Tersedia kulkas bersama untuk menyimpan bahan makanan dengan aman',
      icon: RefrigeratorIcon,
    },
    {
      title: 'Garasi Yang Aman',
      description: 'Garasi yang aman dan terlindungi untuk kendaraan Anda',
      icon: Car,
    },
    {
      title: 'Jemuran',
      description: 'Area jemuran yang luas untuk mengeringkan pakaian',
      icon: Sun,
    },
    {
      title: 'Penjaga Kostan',
      description:
        'Penjaga kost yang siap membantu 24/7 untuk keamanan dan kenyamanan',
      icon: Shield,
    },
    {
      title: 'Ruang Santai',
      description:
        'Ruang bersama yang nyaman untuk bersantai dan bersosialisasi',
      icon: Sofa,
    },
  ];

  return (
    <main className='min-h-screen flex flex-col mt-[50px]'>
      <section className='relative h-[70vh] w-full'>
        <div className='absolute inset-0 bg-black/40 z-10' />
        <Image
          src='/kangdilla.jpeg'
          alt='Luxury Villa Exterior'
          fill
          className='object-cover'
          priority
        />
        <div className='relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4'>
          <h1 className='text-4xl md:text-6xl text-white font-bold mb-4 font-roboto'>
            Pondok Kang Dilla
          </h1>
          <p className='text-xl text-white/90 max-w-2xl mb-6 font-roboto font-light'>
            Kost eksklusif dengan fasilitas lengkap dan lingkungan yang nyaman.
          </p>
          <p className='text-3xl text-white font-medium font-roboto mb-6'>
            Mulai dari 1 jutaan/bulan
          </p>
          <Link
            href='https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F'
            target='_blank'
            className='bg-white hover:bg-white/90 text-primary font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2 font-roboto'
          >
            <Phone className='h-5 w-5' /> Booking Sekarang
          </Link>
        </div>
      </section>
      <section className='flex items-center py-20 sm:py-0 min-h-[650px]'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-center font-roboto'>
            Fasilitas Pondok Kang Dilla
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index}>
                  <CardHeader className='flex flex-row items-center gap-4'>
                    <div className='p-2 bg-primary/10 rounded-lg'>
                      <IconComponent className='h-6 w-6 text-primary' />
                    </div>
                    <CardTitle className='font-roboto'>
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground font-roboto font-light'>
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Testimonial />
      <section className='flex min-h-[650px] flex-col gap-2'>
        <Faq />
      </section>
      <Pricing />
      <section className='py-16 min-h-[400px] flex items-center'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6 font-roboto'>
            Informasi Pembayaran
          </h2>
          <p className='text-lg text-muted-foreground mb-8 font-roboto font-light max-w-2xl mx-auto'>
            Silakan cek informasi lengkap tentang cara pembayaran, harga kamar,
            dan kontak untuk survey lokasi Pondok Kang Dilla.
          </p>
          <Link
            href='/renting/payment'
            className='flex justify-center'
            passHref
          >
            <Button className='font-roboto flex cursor-pointer items-center gap-2'>
              <CreditCard className='h-4 w-4' /> Lihat Informasi Pembayaran
            </Button>
          </Link>
        </div>
      </section>
      <div className='w-full px-2 sm:px-0 sm:max-w-7xl mx-auto mb-8'>
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
          Jl. Sukamanah baru no.7 (cibalagung) RT.005/013 sukapura kiaracondong,
          Bandung
        </p>
      </div>
    </main>
  );
}
