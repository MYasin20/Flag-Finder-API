import { useState, useMemo } from 'react';
import CountryCard from './CountryCard';
import CountrySelector from './CountrySelector';
import Pagination from './Pagination/Pagination';
import data from '../../data.json';

let PageSize = 10;

const CountryLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesData, setCountriesData] = useState([...data]);
  const [filteredSearchCountry, setFilteredSearchCountry] = useState([]);
  const [searchField, setSearchField] = useState('');

  const updateData = (newData, methodFilter) => {
    if (methodFilter === 'region') {
      if (!newData) { // empty string
        setCountriesData([...data]);
        setCurrentPage(1);
        if (searchField) {
          const result = data.filter(country => country.name.toLowerCase().match(searchField.toLowerCase()));
          setCountriesData(result);
          return setCurrentPage(1);
        }
      } else {
        const resultRegion = data.filter(country => country.region.toLowerCase() === newData);
        if (searchField) {
          const result = resultRegion.filter(country => country.name.toLowerCase().match(searchField.toLowerCase()));
          setCountriesData(result);
          return setCurrentPage(1);
        }
        setCountriesData(resultRegion);
        setCurrentPage(1);
      }
    }

    if (methodFilter === 'search') {
      setSearchField(newData);
      const result = countriesData.filter(country => country.name.toLowerCase().match(newData.toLowerCase()));
      setFilteredSearchCountry(result);
      setCurrentPage(1);
    }
  }

  // const updateSearchData = (newData) => {
  //   const result = countriesData.filter(country => country.name.toLowerCase().match(newData.toLowerCase()));
  //   setCountriesData(result);
  //   setCurrentPage(1);
  // }

  // const handlefilteredCountry = (filteredCountry) => {
  //     const result = data.filter(country => country.region.toLowerCase() === filteredCountry)
  //     setCountriesData(result);
  //     setCurrentPage(1);
  // }

  const currentCountryDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (filteredSearchCountry.length) {
      return filteredSearchCountry.slice(firstPageIndex, lastPageIndex);
    } else {
      return countriesData.slice(firstPageIndex, lastPageIndex);
    }

  }, [countriesData, currentPage, filteredSearchCountry]);

  return (
    <main className="w-full h-full px-4 py-6 md:pt-12 md:px-20 dark dark:bg-[#202C36]">
      <CountrySelector updateData={updateData} />
      <CountryCard displayCountries={currentCountryDisplay} />
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