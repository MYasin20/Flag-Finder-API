import { useState, useMemo } from 'react';
import CountryCard from './CountryCard';
import CountrySelector from './CountrySelector';
import Pagination from './Pagination/Pagination';
import data from '../../data.json';

let PageSize = 10;

const CountryLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCountriesData, setDisplayCountriesData] = useState([...data]);
  const [temporaryStorageData, setTemporaryStorageData] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [isRegionSelected, setRegionSelected] = useState(false);

  const handleSearchData = (searchData) => {
    console.log(searchData);
    if (!isRegionSelected) { // no region was select
      const result = data.filter(country => country.name.toLowerCase().match(searchData, 'gi'));
      console.log(result);
      setDisplayCountriesData(result);
      setCurrentPage(1);
    } else {
      const result = temporaryStorageData.filter(country => country.name.toLowerCase().match(searchData, 'gi'));
      setDisplayCountriesData(result);
    }
    setSearchField(searchData);
  }

  const handleRegionData = (regionData) => {
    console.log(regionData);
    const result = data.filter(country => country.region.toLowerCase() === regionData);
    if (regionData && searchField) {
      const newResult = result.filter(country => country.region.toLowerCase().match(searchField, 'gi'));
      setDisplayCountriesData(newResult);
    } else if (regionData) {
      setTemporaryStorageData(result);
      setRegionSelected(true);
      setDisplayCountriesData(result);
      setCurrentPage(1);
    } else if (!regionData) {
      setRegionSelected(false);
      setDisplayCountriesData([...data]);
    }
  }

  const currentCountryDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return displayCountriesData.slice(firstPageIndex, lastPageIndex);
  }, [displayCountriesData, currentPage]);

  return (
    <main className="w-full h-full px-4 py-6 md:pt-12 md:px-20 dark dark:bg-[#202C36]">
      <CountrySelector search={handleSearchData} region={handleRegionData} />
      <CountryCard displayCountries={currentCountryDisplay} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={displayCountriesData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}

      />
    </main>
  )
}

export default CountryLists