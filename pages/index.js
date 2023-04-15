import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
//import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
//import { MagnifyingGlassIcon } from '@heroicons/react/outline'
import Footer from '@/components/Footer' 


export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen'>
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
      <form className='flex flex-col items-center mt-1'> 
        <Image 
          src={'https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png'} 
          height={100}
          width={300}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full px-5 py-2.5 border border-gray-200 items-center sm:max-w-xl lg:max-w-2xl'>
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
          <input type='text' className=' flex-grow focus:outline-none' />

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="w-6 h-6 cursor-pointer"
          >
            <path 
              d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z"    
            />
            <path 
              d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" 
            />
          </svg>
        </div>

        <div className='flex flex-col justify-center mt-2  sm:flex-row sm:space-x-4'>
          <button className='btn h-10'>Google Search</button>
          <button className='btn h-10'>I'm Feeling Lucky</button>
        </div>

      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
