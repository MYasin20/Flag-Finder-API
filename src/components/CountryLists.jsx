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
    setSearchField(searchData);
    setCurrentPage(1);
    if (!isRegionSelected) { // no region was select
      const result = data.filter(country => country.name.toLowerCase().match(searchData, 'gi'));
      setDisplayCountriesData(result);
    } else if (isRegionSelected) {
      const result = temporaryStorageData.filter(country => country.name.toLowerCase().match(searchData, 'gi'));
      setDisplayCountriesData(result);
    }
  }

  const handleRegionData = (regionData) => {
    const result = data.filter(country => country.region.toLowerCase() === regionData);
    setTemporaryStorageData(result);
    regionData ? setRegionSelected(true) : setRegionSelected(false);
    setCurrentPage(1);

    if (result.length > 0 && searchField) { // result.length means that there is valid data to be displayed along with the searchField
      if (temporaryStorageData === result) {
        console.log(temporaryStorageData, '--- there is data');
        const newResult = temporaryStorageData.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
        setDisplayCountriesData(newResult);
      } else if (temporaryStorageData) {
        const newResult = result.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
        setDisplayCountriesData(newResult);
      } else if (!temporaryStorageData) {
        console.log(temporaryStorageData, '--- there is no data');
        const newResult = result.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
        setDisplayCountriesData(newResult);
      }
    } else {
      if (regionData && !searchField) {
        setDisplayCountriesData(result);
      } else if (!regionData && searchField) {
        const newResult = data.filter(country => country.name.toLowerCase().match(searchField, 'gi'));
        setDisplayCountriesData(newResult);
      }
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