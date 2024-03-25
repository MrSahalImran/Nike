import React from 'react'
import { thumbnailBackground } from '../assets/images'

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg!==imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg===imgURL.bigShoe?'border-coral-red':'border-transparent'} cursor-pointer ax-sm:flex-1`}
    onClick={handleClick}>
        <div className='flex itemx-center justify-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4 sm:w-40'><img className='object-contain' src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} /></div>
    </div>
  )
}

export default ShoeCard