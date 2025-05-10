import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { StarIcon } from 'lucide-react';
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    designation: 'Mahasiswa',
    company: 'Universitas Indonesia',
    testimonial:
      'Kost ini bersih dan nyaman banget! Fasilitas lengkap dan lokasi strategis dekat kampus. WiFi kenceng, cocok buat ngerjain tugas.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    designation: 'Karyawan Swasta',
    company: 'Bank BCA',
    testimonial:
      'Lingkungan kost tenang dan aman. Ibu kostnya ramah dan selalu responsive kalau ada masalah. Worth it dengan harganya!',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 3,
    name: 'Ahmad Ridwan',
    designation: 'Fresh Graduate',
    company: 'Startup Tech',
    testimonial:
      'Kamar luas dan ada AC-nya. Dekat dengan minimarket dan warung makan. Parkiran motor juga luas dan tertutup.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    designation: 'Guru',
    company: 'SMA Negeri 1',
    testimonial:
      'Sudah 2 tahun ngekost disini dan betah banget. Security 24 jam dan ada CCTV, jadi merasa aman terutama untuk cewek.',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Reza Prakasa',
    designation: 'Wirausaha',
    company: 'Online Shop',
    testimonial:
      'Kamar mandi dalam dan air lancar. Dapur bersama juga bersih dan lengkap peralatannya. Recommended banget!',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Nina Safitri',
    designation: 'Perawat',
    company: 'RS Medika',
    testimonial:
      'Akses gampang ke mana-mana, banyak angkutan umum. Tiap kamar ada meja dan lemari besar. Pemilik kost sangat pengertian.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

export function Testimonial() {
  return (
    <div className='min-h-screen flex justify-center items-center py-12 px-6'>
      <div>
        <h2 className='mb-8 sm:mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight font-roboto'>
          Testimonials
        </h2>
        <div className='w-full max-w-screen-xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border-r border-background'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='flex flex-col outline outline-1 outline-border px-6 py-8'
              >
                <div className='flex items-center justify-center gap-2'>
                  <StarIcon className='w-6 h-6 fill-yellow-500 stroke-yellow-500' />
                  <StarIcon className='w-6 h-6 fill-yellow-500 stroke-yellow-500' />
                  <StarIcon className='w-6 h-6 fill-yellow-500 stroke-yellow-500' />
                  <StarIcon className='w-6 h-6 fill-yellow-500 stroke-yellow-500' />
                  <StarIcon className='w-6 h-6 fill-yellow-500 stroke-yellow-500' />
                </div>
                <p className='my-6 text-[17px] text-center max-w-md font-roboto font-light'>
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div className='mt-auto flex items-center justify-center gap-3'>
                  <Avatar>
                    <AvatarFallback className='text-xl font-medium bg-primary text-primary-foreground'>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-lg font-medium font-roboto'>{testimonial.name}</p>
                    <p className='text-sm text-gray-500 font-roboto'>
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
