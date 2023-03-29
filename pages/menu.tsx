import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Menu: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>Starbucks 2 - Menu</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className='text-xl'>MENU</h1>
      </main>

      
    </div>
  )
}

export default Menu
