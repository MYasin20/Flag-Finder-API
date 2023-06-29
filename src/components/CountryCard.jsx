/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const CountryCard = ({ displayCountries, setDarkMode }) => {
  return (
    <section className='my-16 grid gap-6 grid-cols-[repeat(auto-fill,_minmax(16.25rem,1fr))] max-w-[1540px] mx-auto'>
      {displayCountries.map((country, index) => (
        <Link to={`/${country.name}`} key={index} className={`${setDarkMode ? 'dark:bg-[#2b3945] dark:text-white ' : ''} shadow-sm w-full h-[350px] hover:shadow-lg`}>
          <img src={country.flags.png} className='object-fill w-full h-[168px]' />
          <div className='mt-4 px-6 pb-4'>
            <h3 className='text-lg font-extrabold mb-4 line-clamp-1'>{country.name}</h3>
            <p className='font-light pb-3 line-clamp-1'><span className='font-semibold'>Population: </span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            <p className='font-light pb-3 line-clamp-1'><span className='font-semibold'>Region: </span> {country.region}</p>
            <p className='font-light line-clamp-1'><span className='font-semibold'>Capital: </span> {country.capital}</p>
          </div>
        </Link>
      ))}
    </section>

  )
}

export default CountryCard