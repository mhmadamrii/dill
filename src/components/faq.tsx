'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '~/lib/utils';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '~/components/ui/accordion';

const faq = [
  {
    question: 'Apa saja fasilitas dalam kamar?',
    answer:
      'Setiap kamar dilengkapi dengan kasur, bantal, guling, lemari baju, cermin, dan dapur mini. Semua fasilitas dalam kondisi baik dan siap pakai.',
  },
  {
    question: 'Apakah ada fasilitas WiFi?',
    answer:
      'Ya, kami menyediakan WiFi gratis berkecepatan tinggi untuk semua penghuni kost. WiFi tersedia 24 jam dan sudah termasuk dalam biaya kost.',
  },
  {
    question: 'Apakah ada CCTV?',
    answer:
      'Ya, kami memasang CCTV 24 jam di area umum untuk keamanan penghuni. CCTV dipantau oleh penjaga kost kami.',
  },
  {
    question: 'Bagaimana dengan fasilitas air?',
    answer:
      'Kami menyediakan air bersih dan jernih gratis 24 jam menggunakan sistem siebeul. Air tersedia untuk semua penghuni tanpa biaya tambahan.',
  },
  {
    question: 'Bagaimana dengan pengelolaan listrik?',
    answer:
      'Setiap kamar memiliki meteran listrik token sendiri sehingga penghuni hanya membayar sesuai pemakaian masing-masing.',
  },
  {
    question: 'Apakah ada kamar mandi dalam?',
    answer:
      'Ya, setiap kamar dilengkapi dengan kamar mandi dalam yang bersih dan nyaman untuk privasi penghuni.',
  },
  {
    question: 'Apakah ada kulkas bersama?',
    answer:
      'Ya, kami menyediakan kulkas bersama yang bisa digunakan oleh semua penghuni dengan bijak.',
  },
  {
    question: 'Bagaimana dengan keamanan kost?',
    answer:
      'Keamanan terjamin dengan adanya pos security dan penjaga kost yang siaga 24 jam. Penghuni juga gratis iuran keamanan dan kebersihan.',
  },
  {
    question: 'Apakah ada garasi untuk parkir?',
    answer:
      'Ya, tersedia garasi khusus untuk motor yang aman dan terlindungi untuk kendaraan penghuni.',
  },
  {
    question: 'Apakah lokasi kost bebas banjir?',
    answer:
      'Ya, lokasi kost kami berada di area yang bebas banjir sehingga aman untuk tinggal sepanjang tahun.',
  },
  {
    question: 'Apakah masih ada kamar kosong?',
    answer:
      'Ketersediaan kamar berubah-ubah. Silakan hubungi kami untuk informasi terkini tentang kamar yang tersedia.',
  },
  {
    question: 'Apakah boleh untuk pasutri?',
    answer:
      'Ya, kami menerima pasutri dengan syarat dan ketentuan tertentu. Silakan hubungi kami untuk informasi lebih lanjut.',
  },
  {
    question: 'Apakah ada jam malam?',
    answer:
      'Ya, untuk keamanan kami menerapkan jam malam mulai pukul 23.00. Jika ada keperluan mendesak, silakan koordinasi dengan penjaga kost.',
  },
  {
    question: 'Bagaimana akses ke jalan raya?',
    answer:
      'Lokasi kost sangat strategis, hanya beberapa menit berjalan kaki ke jalan raya. Mudah mendapatkan transportasi umum.',
  },
  {
    question: 'Apakah boleh membawa hewan peliharaan?',
    answer:
      'Untuk menjaga kenyamanan bersama, kami tidak mengizinkan penghuni membawa hewan peliharaan di area kost.',
  },
];

export function Faq() {
  const [value, setValue] = useState<string>();

  return (
    <div className='flex items-center justify-center px-6 py-12 bg-gradient-to-br from-primary/5 via-white to-primary/5'>
      <div className='w-full max-w-screen-lg'>
        <h2 className='text-4xl font-bold tracking-tight text-center font-roboto mb-12'>
          FAQ
        </h2>

        <div className='mt-6 w-full grid md:grid-cols-2 gap-x-10'>
          <Accordion
            type='single'
            collapsible
            className='w-full'
            value={value}
            onValueChange={setValue}
          >
            {faq.slice(0, 5).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionPrimitive.Header className='flex'>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                      'text-start text-lg font-roboto',
                    )}
                  >
                    {question}
                    <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent>
                  <p className='text-muted-foreground font-roboto font-light'>
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion
            type='single'
            collapsible
            className='w-full'
            value={value}
            onValueChange={setValue}
          >
            {faq.slice(5, 10).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index + 5}`}>
                <AccordionPrimitive.Header className='flex'>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      'flex flex-1 items-center justify-between py-4 font-medium tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                      'text-start text-lg font-roboto',
                    )}
                  >
                    {question}
                    <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent>
                  <p className='text-muted-foreground font-roboto font-light'>
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
