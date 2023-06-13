import { useEffect, useState } from 'react';
import data from '../../data.json';

const CountryCard = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const res = data.filter((country, index) => {
      return index < 10 && country;
    })
    setCountries([...res]);
  }, [])
  return (
    <section className='my-16 grid gap-6 grid-cols-[repeat(auto-fill,_minmax(16.25rem,1fr))] max-w-[1540px] mx-auto'>
      {countries.map((country, index) => (
        <article key={index} className='shadow-md w-full'>
          <img src={country.flags.png} className='object-fill w-full h-[168px]' />
          <div className='mt-4 px-6 pb-7'>
            <h3 className='text-lg font-extrabold'>{country.name}</h3>
            <p className='font-light'><span className='font-semibold'>Population:</span>{country.population}</p>
            <p className='font-light'><span className='font-semibold'>Region:</span> {country.region}</p>
            <p className='font-light'><span className='font-semibold'>Capital:</span> {country.capital}</p>
          </div>
        </article>
      ))}
    </section>

  )
}

export default CountryCard