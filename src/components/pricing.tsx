'use client';

import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { CircleCheck, Phone } from 'lucide-react';
import { cn } from '~/lib/utils';
import { PulsatingButton } from './magicui/pulsating-button';

const plans = [
  {
    name: 'Pasutri',
    price: '1.500.000',
    normal_price: '2.000.000',
    description:
      'Kamar bersih dan nyaman khusus pasutri tersedia di lantai bawah dan atas, dapatkan sekarang!',
    features: [
      'Khusus pasutri sah',
      'Tidak membawa anak kecil',
      'Bukti surat nikah',
    ],
    buttonText: 'Booking Sekarang',
    is_promo: true,
  },
  {
    name: 'Promo Karyawan/Mahasiswa',
    price: '1.250.000',
    normal_price: '1.400.000',
    isRecommended: true,
    description:
      'Dapatkan kamar dengan harga terjangkau dengan diskon khusus karyawan/mahasiswa',
    features: [
      'Kamar khusus penyewa',
      'Lawan jenis dilarang masuk kamar',
      'Jam malam untuk tamu',
    ],
    buttonText: 'Booking Sekarang',
    isPopular: true,
    is_promo: true,
  },
  {
    name: 'Diskon Akhir Tahun',
    price: '0',
    normal_price: '0',
    description:
      'Diskon sementara tidak aktif, silahkan cek secara berkala setiap bulan untuk dapatkan cashback 30%',
    features: ['Promo akhir tahun', 'Khusus mahasiswa/karyawan', 'Diskon 50%'],
    buttonText: 'Get 100 portraits in 1 hour',
    is_promo: false,
  },
];

export function Pricing() {
  return (
    <div className='flex flex-col items-center py-20 sm:py-0 justify-center min-h-[700px]'>
      <h1 className='text-5xl font-bold text-center tracking-tight font-roboto'>
        Harga & Promo
      </h1>
      <div className='mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {plans.map((plan) => (
          <div key={plan.name} className='border rounded-lg p-6'>
            <h3 className='text-lg font-medium font-roboto'>{plan.name}</h3>
            <p className='mt-2 text-2xl line-through decoration-red-500 font-bold font-roboto'>
              Rp {plan.normal_price}
            </p>
            <p className='mt-2 text-4xl font-bold font-roboto'>
              Rp {plan.price}
            </p>
            <p className='mt-4  text-muted-foreground font-roboto font-light'>
              {plan.description}
            </p>
            <Separator className='my-4' />
            <ul className='space-y-2'>
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className='flex items-start gap-2 font-roboto'
                >
                  <CircleCheck className='h-4 w-4 mt-1 text-green-600' />{' '}
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? 'default' : 'outline'}
              size='lg'
              className={cn('w-full mt-6 font-roboto', {})}
              disabled={!plan.is_promo}
              onClick={() =>
                plan.is_promo &&
                window.open(
                  'https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F',
                  '_blank',
                )
              }
            >
              {plan.is_promo ? plan.buttonText : 'Diskon Kadaluarsa'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
