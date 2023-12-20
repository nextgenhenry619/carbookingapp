"use client";
import Image from 'next/image'

//for effects
import { Fragment } from 'react'
//dialog is page modal, transition adds to the fragment
import { Dialog, Transition} from '@headlessui/react'

import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/utils';


interface CarDetailsProps {
    isOpen:boolean;
    closeModal: () => void;
    car:CarProps;
}

const CarDetails = ( { isOpen, closeModal, car } : CarDetailsProps) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div"
        className="relative z-10 mr-[15px] pr-0"
        onClose={closeModal}
        >
        {/* shows after clicking on button ... semi black background */}
        {/* show a little slower  */}
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
        <div className="fixed inset-0 bg-blue-500 bg-opacity-25"/>
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100 "
        leave="ease-in duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
        >
        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto
        transform rounded-2xl bg-white text-left flex flex-col shadow-lg">
        <button
        type="button"
        className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-md"
        onClick={closeModal}
        >
            <Image 
            src="close.svg"
            alt="close"
            width={20}
            height={20}
            className="object-contain"
            />
        </button>
        {/* content of card */}
        <div className="flex-1 flex flex-col gap-3 p-2">
            <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-md">
                <Image src={generateCarImageUrl(car)} alt="car"
                fill priority
                className="object-contain" />
            </div>
            <div className="flex gap-2 p-2">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-md">
                <Image src={generateCarImageUrl(car,'29')} alt="car"
                fill priority
                className="object-contain" />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-md">
                <Image src={generateCarImageUrl(car,'33')} alt="car"
                fill priority
                className="object-contain" />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-md">
                <Image src={generateCarImageUrl(car,'13')} alt="car"
                fill priority
                className="object-contain" />
                </div>
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-2">
            <h2 className="text-xl font-semibold capitalize">{car.make} {car.model}</h2>
            {/* car spects */}
            <div className="mt-3 flex flex-wrap gap-3">
                {Object.entries(car).map(([key,value]) => (
                    <div className="flex justify-between gap-5 w-full text-right"
                    key={key}
                    >
                        <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                        <p className="font-semibold capitalize">{value}</p>
                    </div>
                ))}
            </div>
        </div>
        </Dialog.Panel>
        </Transition.Child>
            </div>
        </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails