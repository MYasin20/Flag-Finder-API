import { useState, useMemo } from 'react';
import CountrySelector from './CountrySelector';
import Pagination from './Pagination/Pagination';
import data from '../../data.json';

let PageSize = 10;

const CountryLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesData, setCountriesData] = useState([...data]);

  const updateSearchData = (newData) => {
    const result = data.filter(country => country.name.toLowerCase().match(newData.toLowerCase()));
    setCountriesData(result);
    setCurrentPage(1);
  }

  const currentCountryData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return countriesData.slice(firstPageIndex, lastPageIndex);
  }, [countriesData, currentPage]);

  return (
    <main className="w-full h-full px-4 py-6 md:pt-12 md:px-20 dark dark:bg-[#202C36]">
      <CountrySelector countrySearch={updateSearchData} />

      <section className='my-16 grid gap-6 grid-cols-[repeat(auto-fill,_minmax(16.25rem,1fr))] max-w-[1540px] mx-auto'>
        {currentCountryData.map((country, index) => (
          <article key={index} className='shadow-md w-full'>
            <img src={country.flags.png} className='object-fill w-full h-[168px]' />
            <div className='mt-4 px-6 pb-4'>
              <h3 className='text-lg font-extrabold mb-4 line-clamp-1'>{country.name}</h3>
              <p className='font-light pb-3 line-clamp-1'><span className='font-semibold'>Population:</span>{country.population}</p>
              <p className='font-light pb-3 line-clamp-1'><span className='font-semibold'>Region:</span> {country.region}</p>
              <p className='font-light line-clamp-1'><span className='font-semibold'>Capital:</span> {country.capital}</p>
            </div>
          </article>
        ))}
      </section>
      {/* when button moved to other page and search result will be blank */}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={countriesData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}

      />
    </main>
  )
}

export default CountryLists