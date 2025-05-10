import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Property Gallery | Your Business Name',
  description:
    'Browse through our collection of property images showcasing our beautiful rental home.',
};

const GalleryPage = () => {
  // Mock data - replace with your actual gallery images
  const galleryImages = [
    {
      src: '/gallery/living-room.jpg',
      alt: 'Spacious Living Room',
      caption: 'Modern and comfortable living space',
    },
    {
      src: '/gallery/kitchen.jpg',
      alt: 'Modern Kitchen',
      caption: 'Fully equipped kitchen with modern appliances',
    },
    {
      src: '/gallery/master-bedroom.jpg',
      alt: 'Master Bedroom',
      caption: 'Luxurious master bedroom with en-suite bathroom',
    },
    {
      src: '/gallery/bathroom.jpg',
      alt: 'Bathroom',
      caption: 'Modern bathroom with premium fixtures',
    },
    {
      src: '/gallery/pool.jpg',
      alt: 'Swimming Pool',
      caption: 'Private pool with lounging area',
    },
    {
      src: '/gallery/garden.jpg',
      alt: 'Garden',
      caption: 'Beautiful landscaped garden',
    },
    {
      src: '/gallery/exterior.jpg',
      alt: 'House Exterior',
      caption: 'Stunning exterior view',
    },
    {
      src: '/gallery/dining.jpg',
      alt: 'Dining Area',
      caption: 'Elegant dining space',
    },
    // Add more images as needed
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>
          Property Gallery
        </h1>
        <p className='text-gray-600 text-center max-w-2xl mx-auto mb-12'>
          Take a virtual tour through our beautiful property. Each image
          showcases the attention to detail and premium quality of our rental
          home.
        </p>

        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='relative h-64 w-full'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-4'>
                <h3 className='font-semibold text-lg mb-2'>{image.alt}</h3>
                <p className='text-gray-600'>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Like what you see?</h2>
          <p className='text-gray-600 mb-8'>
            Book your stay now and experience our beautiful property in person.
          </p>
          <a
            href='/renting/booking'
            className='inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors'
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
