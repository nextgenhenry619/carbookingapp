//from api website code below
// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3cc4358455msh221ae940cc4cc7dp1fbe39jsne953d87d9872',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };
//end of api website code above

import { CarProps, FilterProps } from "@/types";

//function to call api
//api for car details
export async function fetchCars(filters: FilterProps){
    //destructure
    const { manufacturer, year, model, limit, fuel} = filters

    const headers = {
		'X-RapidAPI-Key': '3cc4358455msh221ae940cc4cc7dp1fbe39jsne953d87d9872',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch 
    (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
    {
        //allows to get key, as well
        headers:headers,
    });
    const result = await response.json();

    //return cars
    return result;
}
//api for car images
export const generateCarImageUrl = (car:CarProps, angle: string) => {
    //specify api endpoint
       const url= new URL ('https://cdn.imagin.studio/getimage');

    //destructure
       const { make,year, model } = car;
       
       url.searchParams.append('customer', 'hrjavascript-mastery')
       url.searchParams.append('make', make)
       url.searchParams.append('modelFamily', model.split(' ')[0])
       url.searchParams.append('zoomType', 'fullscreen')
       url.searchParams.append('modelYear', `${year}`)
       url.searchParams.append('angle', `${angle}`)
    return `${url}`
}

export const updateSearchParams = (type:string, value:string) => {
//get current search parameters
const searchParams = new URLSearchParams(window.location.search);

searchParams.set(type,value)

//when we have new search parameters
const newPathname=`${window.location.pathname}?${searchParams.toString()}`

return newPathname
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };