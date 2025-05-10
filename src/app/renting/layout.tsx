import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Property',
  description: 'Explore our beautiful rental properties',
};

export default function RentingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-white'>
      <nav className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <a href='/' className='text-xl font-bold'>
              Kang Dilla
            </a>
            <div className='flex gap-6'>
              <a href='/renting' className='hover:text-gray-600'>
                Property
              </a>
              <a href='/renting/gallery' className='hover:text-gray-600'>
                Gallery
              </a>
              <a href='/renting/booking' className='hover:text-gray-600'>
                Book Now
              </a>
              <a href='/renting/contact' className='hover:text-gray-600'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
              <p>Email: contact@yourbrand.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='/renting' className='hover:text-gray-300'>
                    Property
                  </a>
                </li>
                <li>
                  <a href='/renting/gallery' className='hover:text-gray-300'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='/renting/booking' className='hover:text-gray-300'>
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Location</h3>
              <p>123 Property Street</p>
              <p>City, State 12345</p>
              <p>Country</p>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
            <p>
              &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
