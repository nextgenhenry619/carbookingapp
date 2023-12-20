"use client"
import { Fragment, useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import { Listbox, Transition} from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ( { title, options, setFilter } : CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  

 

  return (
    <div className='w-fit text-blue-700 font-semibold'>
    <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e); // Update the selected option in state
        setFilter(e.value); // Update the URL search parameters and navigate to the new URL
      }}
    >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn ">
            <span className="block truncate">
              {selected.title}</span>
              <Image 
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                alt="down arrow"
              />
          </Listbox.Button>
          <Transition 
          as={Fragment}
          leave="transition ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
          <Listbox.Options className="custom-filter__options "
          >
            {options.map((option) => (
              <Listbox.Option
              key={option.title}
              value={option}
              className={({active}) =>`relative cursor-default select-none py-1 pl-3
              ${ active ? 'bg-primary-blue text-white rounded-md font-semibold' : 'text-gray-500'

              }`}
              >
                {({selected}) => (
                  <span className={`block truncate ${selected ? 'font-bold' : "font-medium"}`}
                  >{option.title}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
          </Transition>
        </div>
        </Listbox>  
    </div>
  )
}

export default CustomFilter