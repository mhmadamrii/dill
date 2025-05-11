import Link from 'next/link';
import { Phone } from 'lucide-react';

export function Fab() {
  return (
    <div className='fixed bottom-8 right-8'>
      <Link
        href='https://wa.me/628156002421?text=Halo%2C%20saya%20akan%20booking%2Fsurvey%20kost.%20Apakah%20masih%20tersedia%3F'
        target='_blank'
        className='bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-2 font-roboto'
      >
        <Phone className='h-5 w-5' /> Booking Sekarang
      </Link>
    </div>
  );
}
