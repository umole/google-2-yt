import Head from 'next/head'
import Avatar from '../components/Avatar'

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

          {/* Avatar */}
          <Avatar url={'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </>
  )
}
