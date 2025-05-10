import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Property | Your Business Name',
  description:
    'Discover our beautiful rental property with modern amenities and stunning views.',
};

const RentalPropertyPage = () => {
  // Mock data - replace with your actual property data
  const propertyDetails = {
    name: 'Luxury Villa',
    description:
      'A stunning modern villa with panoramic views, perfect for your next getaway.',
    price: '$200/night',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: [
      'Free WiFi',
      'Swimming Pool',
      'Air Conditioning',
      'Fully Equipped Kitchen',
      'Private Parking',
      'Smart TV',
      'Garden',
      'BBQ Area',
    ],
    features: [
      {
        title: 'Spacious Living',
        description: 'Open-concept living area with contemporary furnishings',
      },
      {
        title: 'Modern Kitchen',
        description: 'State-of-the-art appliances and cooking essentials',
      },
      {
        title: 'Outdoor Space',
        description: 'Private garden with lounging and dining areas',
      },
    ],
  };

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[70vh] w-full'>
        <div className='absolute inset-0 bg-black/40 z-10' />
        <Image
          src='/placeholder-house.jpg'
          alt='Luxury Villa Exterior'
          fill
          className='object-cover'
          priority
        />
        <div className='relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4'>
          <h1 className='text-4xl md:text-6xl text-white font-bold mb-4'>
            {propertyDetails.name}
          </h1>
          <p className='text-xl text-white/90 max-w-2xl mb-6'>
            {propertyDetails.description}
          </p>
          <p className='text-3xl text-white font-semibold'>
            {propertyDetails.price}
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className='bg-white py-8 border-b'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-8 text-center'>
            <div className='flex items-center gap-2'>
              <span className='text-xl'>🛏️</span>
              <p>{propertyDetails.bedrooms} Bedrooms</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xl'>🚿</span>
              <p>{propertyDetails.bathrooms} Bathrooms</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xl'>👥</span>
              <p>Up to {propertyDetails.maxGuests} Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Property Features
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {propertyDetails.features.map((feature, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Amenities</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {propertyDetails.amenities.map((amenity, index) => (
              <div
                key={index}
                className='flex items-center gap-2 p-4 bg-gray-50 rounded'
              >
                <span className='text-green-500'>✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className='bg-gray-900 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Book Your Stay?</h2>
          <p className='mb-8 text-gray-300'>
            Contact us now to check availability and make your reservation
          </p>
          <button className='bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
            Book Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default RentalPropertyPage;
