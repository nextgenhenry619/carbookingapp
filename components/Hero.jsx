"use client"

import Image from 'next/image'
import  CustomButton from '/components/CustomButton.tsx'


const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-16 padding-x">
            <h1 className="hero__title">
                Quickly find a car to buy or rent! <br/>
                Help support 24/7 📞
            </h1>
            <p class="hero__subtitle text-blue-600">
                Know your worth, you deserve the best.
            </p>
            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-md mt-8"
                handleClick={handleScroll}
             />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image
                    src="/hero.png"
                    alt="hero car image"
                    fill
                    className="object-contain"
                />
                </div>
                <div className="hero__image-overlay"/>
            
        </div>
    </div>
  )
}

export default Hero