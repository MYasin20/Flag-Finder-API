/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import data from '../../data.json';

const CountryDetails = () => {
  const { countryName } = useParams();
  const displayCountry = data.filter(country => country.name === countryName)[0];
  return (
    <section className='dark:bg-[#202c37] px-7 pt-14 md:pt-20 md:px-20 h-auto min-h-screen bg-[#fafafa] md:bg-[#f3f3f3]'>
      <div className='max-w-[1540px] mx-auto'>
        <Link to="/" className='dark:bg-[#2b3945] dark:text-white w-[110px] max-w-40 h-9 shadow-md md:shadow-none md:hover:shadow-md bg-white flex items-center justify-center gap-4 rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" /></svg>
          Back
        </Link>
        <div className='grid grid-cols-1 h-auto gap-6 lg:gap-4 sm:grid-cols-2 max-[320px]:items-center min-[425px]:place-items-center w-full max-w-[1040px] mx-auto mt-16'>
          <img className='rounded-md sm:mb-4 md:mb-0 md:w-[25rem]' src={displayCountry.flags.png} alt={displayCountry.name} />

          <div>
            <h2 className='dark:text-white text-2xl lg:text-3xl font-extrabold mb-4'>{displayCountry.name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Native Name: </span>
                  {displayCountry.nativeName}
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Population: </span>
                  {displayCountry.population}
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Region: </span>
                  {displayCountry.region}
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Sub Region: </span>Western
                  {displayCountry.subregion}
                </p>
                <p className='dark:text-white font-light text-sm md:text-base'>
                  <span className='font-semibold'>Capital: </span>
                  {displayCountry.capital}
                </p>
              </div>
              <div>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Top level Domain: </span>
                  {displayCountry.topLevelDomain[0]}
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Currencies: </span>
                  {displayCountry.currencies ? displayCountry.currencies[0].code : 'Not Available'}
                </p>
                <p className='dark:text-white font-light text-sm md:text-base'>
                  <span className='font-semibold'>Language: </span>
                  {displayCountry.languages.reduce((arr, lang) => {
                    arr.push(lang.name);
                    return arr;
                  }, []).join(', ')}
                </p>
              </div>
            </div>

            <div className='my-6 md:mb-0 lg:flex gap-3 md:items-center justify-between'>
              <div className='dark:text-white text-base font-semibold mb-4 md:mb-0'>Border Countries:</div>
              <div className='flex gap-3 flex-1 text-center'>
                {displayCountry.borders ?
                  displayCountry.borders.map((border, idx) => {
                    if (idx < 3) {
                      return (
                        <a key={idx} href='/' className='dark:text-white dark:bg-[#2b3945] text-sm flex-1 shadow-sm hover:shadow-md rounded-md py-1 lg:py-2 bg-white'>
                          {border}
                        </a>
                      )
                    }
                    return null;
                  }) :
                  <a href='/' className='dark:text-white dark:bg-[#2b3945] text-sm flex-1 shadow-sm hover:shadow-md rounded-md py-1 lg:py-2 bg-white'>
                    Not Available
                  </a>
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails