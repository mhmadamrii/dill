import Link from 'next/link';
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react';

export function Footer() {
  return (
    <div className='flex flex-col border-t'>
      <footer>
        <div className='max-w-screen-xl mx-auto'>
          <div className='py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0'>
            <span className='text-muted-foreground'>
              &copy; {new Date().getFullYear()}{' '}
              <Link href='/' target='_blank'>
                Pondok Kang Dilla
              </Link>
              . All rights reserved.
            </span>

            <div className='flex items-center gap-5 text-muted-foreground'>
              <Link href='#' target='_blank'>
                <TwitterIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <DribbbleIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <TwitchIcon className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
