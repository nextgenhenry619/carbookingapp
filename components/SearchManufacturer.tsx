//npm install @headlessui/react
//now add import code 

"use client";

import { Combobox, Transition } from '@headlessui/react' 
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import { useState , Fragment} from 'react'

import { manufacturers } from '@/constants';

const SearchManufacturer = ({ selected, setSelected}: SearchManufacturerProps) => {
    const [query,setQuery] = useState('');

    //filter ones matching user Search
    const filteredManufacturers = query === "" ? 
    //if empty return all manufacturers
    manufacturers : 
    //if existing filter the ones matching
    manufacturers.filter((item) => (
        item.toLowerCase().
    //replace empty spaces with an empty string
        replace(/\s+/g, "").
    //if found match it to our database
        includes(query.toLowerCase().replace(/\s+/g, ""))
    ))
  return (
    <div className="search-manufacturer">
        <Combobox value={selected}
                  onChange={setSelected}
        >
            <div className="relative w-full">
                <Combobox.Button
                    className="absolute top-[14px]"
                >
                <Image 
                    src="/car-logo.svg"
                    alt="car logo"
                    width={20}
                    height={20}
                    className="ml-5"
                />
                </Combobox.Button>
                <Combobox.Input 
                    className="search-manufacturer__input"
                    placeholder="Volkswagen (car make)"
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <Transition as = {Fragment}
                    leave="transition ease-in duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >    
                <Combobox.Options>
                {filteredManufacturers.map((manufacturer) => (
                    <Combobox.Option
                    key={manufacturer}
                    className={({active}) => `
                    relative search-manufacturer__option
                    ${active ? 'bg-primary-blue text-white': 'text-gray-900'}
                    `}
                    value={manufacturer}
                    >
                    {/* what is currently selected */}
                    {({selected, active}) => (
                        <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            
                          </span>
                        ) : null}
                      </>
                    )}
                    </Combobox.Option>
                    
                ))}
                </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer