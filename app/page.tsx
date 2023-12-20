"use client"

import  {Hero}  from '@/components'
import { CarCard } from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

//make it async
//async means:  a process operates independently of other processes
export default function Home() {
  //removing use client
  const [allCars, setAllCars] = useState([]);
  const [loading,setLoading] = useState(false)

  //search states
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  //filter states
  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(2022)

  //page state
  const [limit, setLimit] = useState(8)

  const getCars = async() => {
    setLoading(true)
  try {
    const result = await fetchCars({
      manufacturer: manufacturer || '',
      year: year || 2022,
      fuel: fuel || '',
      limit: limit || 8,
      model: model || '',
    })

    setAllCars(result)
  } catch (error) {
    console.log(error)
    
  } finally {
    setLoading(false)
  }
}

  //when 1 property or more changes, do this
  useEffect(() => {
    console.log(fuel,year,model,manufacturer,limit)
    getCars ()
  },[fuel,year,limit,manufacturer,model])
 
  const isDataEmpty = 
  !Array.isArray(allCars) || 
  allCars.length < 1 ||
  !allCars;



  return (
    <main className="overflow-hidden pb-[250px]">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width"
      id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-bold text-blue-700"> Car Catalogue</h1>
        <p>Choose your next adventure</p>
      </div>
      <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer}
                     setModel={setModel}/>
        <div className="home__filter-container">
          <CustomFilter 
          title="fuel" options={fuels} setFilter={setFuel} />
          <CustomFilter 
          title="year" options={yearsOfProduction} setFilter={setYear} />
        </div>
      </div>
      {/* cars api spot */}
      {/* if not empty */}
      {allCars.length > 0 ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
            //creating individual cards for cars
            <CarCard
              car={car}
            />))}
          </div>
            {/* render loading  */}
            {loading && (
              <div className="mt-10 w-full flex-center">
                <Image 
                  src="/gas.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

          <ShowMore
          //get page number
          pageNumber={limit /8}
          isNext={limit  > allCars.length}
          setLimit={setLimit}
          />
        </section>
        //if no car to show... code below
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops no results😔</h2>
          <p>{allCars?.message}</p>
        </div>
      )}

      </div>
    </main>
  )
}
