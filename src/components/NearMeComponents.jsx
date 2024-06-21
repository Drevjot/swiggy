import React from 'react'
import CitiesCard from './CitiesCard';

const NearMeComponents = () => {
      const bestRestaurants = [
    'Best Restaurants in Bangalore',
    'Best Restaurants in Pune',
    'Best Restaurants in Mumbai',
    'Best Restaurants in Delhi',
    'Best Restaurants in Hyderabad',
    'Best Restaurants in Kolkata',
    'Best Restaurants in Chennai',
    'Best Restaurants in Chandigarh',
    'Best Restaurants in Ahmedabad',
    'Best Restaurants in Jaipur',
    'Best Restaurants in Nagpur'
];
const restaurantTypes = [
    'Chinese Restaurant Near Me',
    'South Indian Restaurant Near Me',
    'Indian Restaurant Near Me',
    'Kerala Restaurant Near Me',
    'Korean Restaurant Near Me',
    'North Indian Restaurant Near Me',
    'Seafood Restaurant Near Me',
    'Bengali Restaurant Near Me',
    'Punjabi Restaurant Near Me',
    'Italian Restaurant Near Me',
    'Andhra Restaurant Near Me'
];
const explorePhrases = [
    'Explore Restaurants Near Me',
    'Explore Top Rated Restaurants Near Me'
];
  return (
    <>
    <CitiesCard title='Best Places to Eat Across Cities' content={bestRestaurants}/>
<CitiesCard title='Best Cuisines Near Me' content={restaurantTypes}/>
<CitiesCard title='Explore Every Restaurants Near Me' colCount={2} content={explorePhrases}/>
    </>
  )
}

export default NearMeComponents