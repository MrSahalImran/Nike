import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from'../assets/icons/'

const SpecialOffer = () => {
  return (
<section className='flex items-center justify-wrap max-xl:flex-col-reverse gap-10 max-container'>
  <div className='flex-1'>
    <img src={offer} width={773} height={687} className='object-contain w-full' alt="" />
  </div>
  <div className='flex flex-1 flex-col'>
  <h2 className='mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className='text-coral-red'> Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         Ensuring premium comfort and atyle, our meeticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovatio, and a touch of elegance. 
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellance ensures your satisfaction</p>

        <div className='mt-11 flex gap-10'>
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button label='learn more' bgColor={'bg-transparent'} textColor={'text-slate-gray'} brColor={'border-slate-gray'}/>
        </div>
  </div>
</section>  )
}

export default SpecialOffer