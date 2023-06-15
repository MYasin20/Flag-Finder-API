import { useState, useMemo } from 'react';
import CountryCard from './CountryCard';
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
      <CountryCard displayCountries={currentCountryData} />
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