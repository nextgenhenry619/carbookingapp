"use client"
import React, { useState } from "react"

import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchButton = ({ otherClasses } : { otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
      />
  </button>
)

const SearchBar = ( {setManufacturer, setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

//change url params 
//get search to work
const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//prevents broswer to refresh once submitting form
  e.preventDefault();
  if(searchManufacturer === '' && searchModel === '') {
    return alert ('Please fill out search bar')
  }
  setModel(searchModel)
  setManufacturer(searchManufacturer)
}



  return (
    <form className="searchbar gap-2"
    onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchManufacturer
        selected={searchManufacturer}
        setSelected={setSearchManufacturer}/>
                                  {/* small and above doesnt show  */}
      <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="ml-4 absolute w-[20px] h-[20px]"
        />
        <input 
        type="text" 
        name="model" 
        value={searchModel}
        onChange={(e) => setSearchModel(e.target.value)}
        placeholder="Tiguan"
        className="searchbar__input"
        />
                                  {/* small and above doesnt show  */}
      <SearchButton otherClasses= "sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
                                  {/* small and above SHOW */}
    </form>
  )
}

export default SearchBar