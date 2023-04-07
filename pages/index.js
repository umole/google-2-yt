import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
//import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
//import { MagnifyingGlassIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title> 
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-300' />

          {/* Avatar */}
          <Avatar url={'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        </div>
      </header>

      {/* Body */}
      <form>
        <Image 
          src={'https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png'} 
          height={100}
          width={300}
        />
        <div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6 mr-3 text-gray-500"
          >
            <path 
              fillRule="evenodd" 
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" 
              clipRule="evenodd" 
            />
          </svg>
          <input type='text' className='focus:outline-none bg-red-500' />

        </div>
      </form>

      {/* Footer */}
    </>
  )
}
