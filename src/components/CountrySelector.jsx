import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const CountrySelector = () => {
  return (
    <div className="md:flex md:w-full justify-between max-w-[1540px] mx-auto">
      <div className='flex items-center mb-10 md:mb-0 md:w-[480px]'>
        <FontAwesomeIcon className='absolute cursor-pointer px-5' icon={faMagnifyingGlass} />
        <input className="rounded-md py-4 pl-16 shadow-md w-full text-sm md:text-base mr-3"
          type="text" id="searchFlag" placeholder="Search" />
      </div>

      <select
        className="rounded-md text-sm md:text-base p-4 min-w-[200px] outline-none shadow-md"
        name="filter-by-region">
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Ocenia">Ocenia</option>
      </select>
    </div>
  )
}

export default CountrySelector