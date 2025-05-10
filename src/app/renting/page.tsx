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
  Image as ImageIcon,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rental Property | Your Business Name',
  description:
    'Discover our beautiful rental property with modern amenities and stunning views.',
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
    <main className='min-h-screen flex flex-col gap-10 mt-[50px]'>
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
          <a 
            href='https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F'
            target='_blank'
            className='bg-white hover:bg-white/90 text-primary font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2 font-roboto'
          >
            <Phone className='h-5 w-5' /> Booking Sekarang
          </a>
        </div>
      </section>
      <section className='py-16'>
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
      <section className='flex flex-col gap-2'>
        <Faq />
      </section>

      {/* Payment Information Link Section */}
      <section className='py-16'>
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

      <Pricing />
    </main>
  );
}
