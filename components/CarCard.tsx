"use client";

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import CustomButton from './CustomButton'
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

export const CarCard = ( { car }: CarCardProps) => {
    //destructure first
    const { city_mpg, year, make, model, transmission,drive
     } = car;
     //imaginary rental price
     const carRent = calculateCarRent(city_mpg,year)
     //for model pop out
     const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">{make} {model}</h2>
        </div>
        <p className="flex mt-4 text-[25px] font-bold text-primary-blue">
            <span className="self-start text-[15px] font-semibold">
                $
            </span>
            {carRent}
            <span className="self-end text-[15px] font-semibold text-black">
                /day{}
            </span>
        </p>
        {/* show image from another api source */}
        <div className="relative w-full h-40 my-3 object-contain">
            <Image 
                //call api Url function
                //add domain to root file ... next.config.js
                src={generateCarImageUrl(car)}
                alt="car model"
                fill priority
                className="object-contain"
            />
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full text-gray justify-between">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image 
                    src="steering-wheel.svg"
                    alt="steering wheel"
                    width={20} height={20}
                    />
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image 
                    src="tire.svg"
                    alt="tire"
                    width={20} height={20}
                    />
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image 
                    src="gas.svg"
                    alt="steering wheel"
                    width={20} height={20}
                    />
                    <p className="text-[14px]">
                        {city_mpg} MPG 
                    </p>
                </div>
            </div>
            <div className="car-card__btn-container">
                <CustomButton 
                    title="View More"
                    containerStyles='w-full bg-blue-600 rounded-full'
                    textStyles="text-white text-[15px] leading-[18px font-bold]"
                    handleClick={() => setIsOpen(true)}
                    rightIcon="/right-arrow.svg"
                />
            </div>           
        </div>
        <CarDetails isOpen={isOpen} 
        closeModal={() => setIsOpen(false)} 
        car={car}
        />
    </div>
  )
}
