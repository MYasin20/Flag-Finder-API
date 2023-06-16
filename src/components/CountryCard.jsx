/* eslint-disable react/prop-types */

const CountryCard = ({ displayCountries }) => {
  return (
    <section className='my-16 grid gap-6 grid-cols-[repeat(auto-fill,_minmax(16.25rem,1fr))] max-w-[1540px] mx-auto'>
      {displayCountries.map((country, index) => (
        <article key={index} className='shadow-md w-full'>
          <img src={country.flags.png} className='object-fill w-full h-[168px]' />
          <div className='mt-4 px-6 pb-4'>
            <h3 className='text-lg font-extrabold mb-4 line-clamp-1'>{country.name}</h3>
            <p className='font-light pb-3 line-clamp-1'><span className='font-semibold'>Population: </span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            <p className='font-light pb-3 line-clamp-1'><span className='font-semibold'>Region: </span> {country.region}</p>
            <p className='font-light line-clamp-1'><span className='font-semibold'>Capital: </span> {country.capital}</p>
          </div>
        </article>
      ))}
    </section>

  )
}

export default CountryCard