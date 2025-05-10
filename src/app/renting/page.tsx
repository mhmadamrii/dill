import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '~/components/ui/button';
import { Testimonial } from '~/components/testimonial';
import { Pricing } from '~/components/pricing';
import { Faq } from '~/components/faq';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Home, RefrigeratorIcon, Car, Sun, Shield, Sofa } from 'lucide-react';

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
    <main className='min-h-screen mt-[40px]'>
      {/* Hero Section */}
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
            Lokasi strategis, keamanan 24 jam, dan suasana yang tenang
            menjadikan Pondok Kang Dilla pilihan tepat untuk tempat tinggal
            Anda.
          </p>
          <p className='text-3xl text-white font-medium font-roboto'>
            Mulai dari 1 jutaan/bulan
          </p>
        </div>
      </section>

      {/* Property Features */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center font-roboto'>
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
                    <CardTitle className="font-roboto">{facility.title}</CardTitle>
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

      {/* FAQ */}
      <section className='flex flex-col gap-2'>
        <h2 className='text-3xl font-bold mb-12 text-center font-roboto'>
          FAQ (Frequently Asked Question)
        </h2>
        <div className='w-full flex flex-col sm:flex-row justify-center gap-0 sm:gap-[20px]'>
          <Faq />
        </div>
      </section>

      {/* Testimonial */}
      <Testimonial />

      {/* Pricing */}
      <Pricing />

      {/* Booking CTA */}
      <section className='bg-gray-900 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6 font-roboto'>Ready to Book Your Stay?</h2>
          <p className='mb-8 text-gray-300 font-roboto font-light'>
            Contact us now to check availability and make your reservation
          </p>
          <Button className='cursor-pointer text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
            Book Now
          </Button>
        </div>
      </section>
    </main>
  );
}
