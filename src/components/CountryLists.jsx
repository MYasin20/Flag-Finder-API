import { useState, useMemo } from 'react';
import CountryCard from './CountryCard';
import CountrySelector from './CountrySelector';
import Pagination from './Pagination/Pagination';
import data from '../../data.json';

let PageSize = 10;

const CountryLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCountries, setDisplayCountries] = useState([...data]);
  const [regionSelectedCountries, setRegionSelectedCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [isRegionSelected, setRegionSelected] = useState(false);

  const handleSearchData = (searchData) => {
    setSearchField(searchData);
    setCurrentPage(1);
    if (!isRegionSelected) { // no region was select
      const result = data.filter(country => country.name.toLowerCase().match(searchData, 'gi'));
      setDisplayCountries(result);
    } else if (isRegionSelected) {
      const result = regionSelectedCountries.filter(country => country.name.toLowerCase().match(searchData, 'gi'));
      setDisplayCountries(result);
    }
  }

  const handleRegionData = (regionData) => {
    let result;
    if (regionData) { // if there is value
      setRegionSelected(true);
      result = data.filter(country => country.region.toLowerCase() === regionData);
    } else {
      setRegionSelected(false);
      result = [...data];
    }
    setRegionSelectedCountries(result);
    setCurrentPage(1);

    if (searchField) {
      const newResult = result.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
      setDisplayCountries(newResult);
      // if (temporaryStorageData === result) {
      //   console.log(temporaryStorageData, '--- there is data');
      //   const newResult = temporaryStorageData.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
      //   setDisplayCountriesData(newResult);
      // } else if (temporaryStorageData) {
      //   const newResult = result.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
      //   setDisplayCountriesData(newResult);
      // } else if (!temporaryStorageData) {
      //   console.log(temporaryStorageData, '--- there is no data');
      //   const newResult = result.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
      //   setDisplayCountriesData(newResult);
      // }
    } else {
      setDisplayCountries(result);
    }
  }

  const currentCountryDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return displayCountries.slice(firstPageIndex, lastPageIndex);
  }, [displayCountries, currentPage]);

  return (
    <main className="w-full h-full px-4 py-6 md:pt-12 md:px-20 dark dark:bg-[#202C36] bg-[#fafafa]">
      <CountrySelector search={handleSearchData} region={handleRegionData} />
      <CountryCard displayCountries={currentCountryDisplay} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={displayCountries.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </main>
  )
}

export default CountryLists