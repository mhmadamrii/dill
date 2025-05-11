'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import {
  MapPin,
  Phone,
  CreditCard,
  Info,
  Clock,
  Home,
  ExternalLink,
} from 'lucide-react';

export function PaymentInfo() {
  return (
    <div className='py-8'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Payment Information Card */}
          <Card className='border border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50/80'>
            <CardHeader className='border-b pb-4'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg'>
                  <CreditCard className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='font-roboto text-xl'>
                  Informasi Pembayaran
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='pt-6 space-y-4'>
              <div className='space-y-1'>
                <p className='font-medium font-roboto flex items-center gap-2'>
                  <Info className='h-4 w-4 text-primary' /> Pembayaran hanya
                  kepada pemilik kos
                </p>
                <p className='text-muted-foreground font-light font-roboto pl-6'>
                  WA:{' '}
                  <Link
                    href='https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F'
                    className='text-primary hover:underline transition-colors duration-300 inline-flex items-center'
                    target='_blank'
                  >
                    +628156002421 <ExternalLink className='mr-1 h-3 w-3' />{' '}
                    <span> (Dedi Suhedi S.H, pemilik kost)</span>
                  </Link>
                </p>
              </div>

              <div className='space-y-1'>
                <p className='font-medium font-roboto flex items-center gap-2'>
                  <CreditCard className='h-4 w-4 text-primary' /> Rekening
                  Pembayaran
                </p>
                <p className='font-semibold font-roboto pl-6'>
                  BCA 6395136252 (TETI ROHETI)
                </p>
              </div>

              <Separator className='my-4' />

              <div className='space-y-1'>
                <p className='font-medium font-roboto flex items-center gap-2'>
                  <MapPin className='h-4 w-4 text-primary' /> Alamat Lengkap
                </p>
                <p className='text-muted-foreground font-light font-roboto pl-6'>
                  Jl. Sukamanah baru no.7 (cibalagung) RT.005/013 sukapura
                  kiaracondong
                </p>
                <p className='text-muted-foreground font-light font-roboto pl-6'>
                  Bisa lihat di Google Maps: PONDOK KANGDILLA
                </p>
              </div>

              <div className='mt-6'>
                <Button
                  className='w-full font-roboto hover:bg-primary/10 transition-colors duration-300'
                  variant='outline'
                  onClick={() =>
                    window.open(
                      'https://maps.google.com/?q=PONDOK+KANGDILLA+Jl.+Sukamanah+baru+no.7+cibalagung+sukapura+kiaracondong',
                      '_blank',
                    )
                  }
                >
                  <MapPin className='mr-2 h-4 w-4' /> Buka di Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Rules Card */}
          <Card className='border border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50/80'>
            <CardHeader className='border-b pb-4'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg'>
                  <Info className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='font-roboto text-xl'>
                  Informasi Harga & Kontak
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='pt-6 space-y-4'>
              <div className='space-y-1'>
                <p className='font-medium font-roboto flex items-center gap-2'>
                  <Home className='h-4 w-4 text-primary' /> Harga Kamar
                </p>
                <ul className='text-muted-foreground font-light font-roboto pl-6 space-y-2 list-disc ml-4'>
                  <li>
                    Untuk lt.1 harga Rp 1.000.000/untuk 1 org, jika berdua jadi
                    Rp 1.250.000
                  </li>
                  <li>
                    Untuk lt.2 harga Rp 1.250.000 untuk 1 org, jika berdua jadi
                    Rp 1.500.000
                  </li>
                </ul>
              </div>

              <Separator className='my-4' />

              <div className='space-y-1'>
                <p className='font-medium font-roboto flex items-center gap-2'>
                  <Phone className='h-4 w-4 text-primary' /> Informasi Kontak
                </p>
                <p className='text-muted-foreground font-light font-roboto pl-6'>
                  Konfirmasi survey lokasi ke wa:{' '}
                  <Link
                    href='https://wa.me/6285739241108'
                    className='text-primary hover:underline transition-colors duration-300 inline-flex items-center'
                    target='_blank'
                  >
                    +6285739241108 <ExternalLink className='ml-1 h-3 w-3' />
                  </Link>{' '}
                  (Atep, penjaga kost)
                </p>
              </div>

              <div className='space-y-1 mt-4'>
                <p className='font-medium font-roboto flex items-center gap-2'>
                  <Clock className='h-4 w-4 text-primary' /> Jam Survey
                </p>
                <p className='text-muted-foreground font-light font-roboto pl-6'>
                  Senin - Minggu: 08.00 - 20.00 WIB
                </p>
              </div>

              <div className='mt-6'>
                <Button
                  className='w-full font-roboto hover:bg-primary/90 transition-colors duration-300'
                  onClick={() =>
                    window.open(
                      'https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F',
                      '_blank',
                    )
                  }
                >
                  <Phone className='mr-2 h-4 w-4' /> Hubungi via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
