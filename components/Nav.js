import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//TO-DO: Links open in new tab

function Nav() {
    const router = useRouter();

    return (
        <div className='flex-shrink-0 h-24 flex justify-between items-center px-4 sm:px-40 sm:h-24 mt-4'>
            <div
                className='relative h-12 w-12 sm:h-20 sm:w-20 cursor-pointer'
                onClick={() => router.push('/')}
            >
                <Image
                    src='https://pbs.twimg.com/profile_images/1243674968598216707/5FbZ-22v_400x400.jpg'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                />
            </div>

            <div className='flex justify-between space-x-3 sm:space-x-12 font-bold text-lg'>
                <Link href='/about'>
                    <a className='hover:text-niceRed'>About</a>
                </Link>

                <Link href='/'>
                    <a className='hover:text-niceRed'>Blog</a>
                </Link>

                <Link href='https://www.instagram.com/brksck/'>
                    <a className='hover:text-niceRed'>Photos</a>
                </Link>

                <Link href='https://github.com/burakkisacik'>
                    <a className='hover:text-niceRed'>Github</a>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
