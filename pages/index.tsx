import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BillboardCard from '../components/BillboardCard'

const Home: NextPage = () => {
	return (
		<div className="">

			{/* container for large cards */}
			<div className='space-y-8'>
				<BillboardCard 
					backgroundColor='bg-[#1e3932]'
					title='More sips, more trips'
					subtitle='Join Starbucks and link your Delta SkyMiles account by 3/31 to earn 200 Stars, 500 miles -or both!'
					buttonText='Join + Link'
					buttonLink=''
					imagePath='/img/home-1.jpg'
					textColor='text-white'
					buttonColor='border-white' />

				<BillboardCard 
					backgroundColor='bg-[#a0c292]'
					title='Brighten your day'
					subtitle='Enjoy a cheery Pink Drink or Dragon Drink Starbucks Refreshers beverage'
					buttonText='Order now'
					buttonLink='menu'
					imagePath='/img/home-2.jpg'
					imageFirst={true}
					textColor="text-starbucks"
					buttonColor='border-starbucks' />

				<BillboardCard 
					backgroundColor='bg-[#f6bfd9]'
					title='Uplifting anytime'
					subtitle='Recarge with a lively Brown Sugar Oatmilk or Toasted Vanilla Oatmilk Shaken Espresso - 140 calories or less in a grande'
					buttonText='Order now'
					buttonLink='menu'
					imagePath='/img/home-3.jpg'
					imageFirst={false}
					textColor="text-starbucks"
					buttonColor='border-starbucks' />

				<BillboardCard 
					backgroundColor='bg-[#fff4d4]'
					title='Hearty on the go'
					subtitle='Grab a deliciously filling Double-Smoked Bacon, Cheddar & Egg Sandwich or Bacon & Gruyere Egg Bites'
					buttonText='Order now'
					buttonLink='menu'
					imagePath='/img/home-4.jpg'
					imageFirst={true}
					textColor="text-starbucks"
					buttonColor='border-starbucks' />

				<BillboardCard 
					backgroundColor='bg-[#d4e9e2]'
					title='Delivery from our place to yours'
					subtitle='Keep doing you, we’re on the way. Place your Starbucks order for delivery—now on DoorDash. See the DoorDash app for availability and restrictions.'
					buttonText='Order now'
					buttonLink='menu'
					imagePath='/img/home-5.jpg'
					imageFirst={false}
					textColor="text-starbucks"
					buttonColor='border-starbucks' />
			</div>
		</div>
	)
}

export default Home
