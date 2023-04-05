import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title> 
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='flex'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p>About</p>
          <p>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p>Gmail</p>
          <p>Images</p>

          {/* Icon */}

          {/* Avatar */}
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </>
  )
}
