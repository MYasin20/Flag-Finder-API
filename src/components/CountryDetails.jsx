import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const CountryDetails = () => {
  return (
    <section className='dark:bg-[#202c37] px-7 pt-14 md:pt-20 md:px-20 h-full bg-[#fafafa] md:bg-[#f3f3f3]'>
      <div className='max-w-[1540px] mx-auto'>
        <a href="/#" className='dark:bg-[#2b3945] dark:text-white w-[110px] max-w-40 h-9 shadow-md md:shadow-none md:hover:shadow-md bg-white flex items-center justify-center gap-4 rounded'>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </a>
        <div className='grid grid-cols-1 h-[400px] gap-6 lg:gap-4 sm:grid-cols-2 max-[320px]:items-center min-[425px]:place-items-center w-full max-w-[1040px] mx-auto mt-16'>
          <img className='rounded-md sm:mb-4 md:mb-0 md:w-[25rem]' src='https://flagcdn.com/w320/be.png' alt='country {name}' />

          <div>
            <h2 className='dark:text-white text-2xl lg:text-3xl font-extrabold mb-4'>Belgium</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Native Name: </span>
                  België
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Population: </span>
                  11,319,511
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Region: </span>
                  Europe
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Sub Region: </span>Western
                  Europe
                </p>
                <p className='dark:text-white font-light text-sm md:text-base'>
                  <span className='font-semibold'>Capital: </span>
                  Brussels
                </p>
              </div>
              <div>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Top level Domain: </span>
                  .be
                </p>
                <p className='dark:text-white font-light text-sm md:text-base mb-2'>
                  <span className='font-semibold'>Currencies: </span>
                  Euro
                </p>
                <p className='dark:text-white font-light text-sm md:text-base'>
                  <span className='font-semibold'>Language: </span>
                  Dutch, French, German
                </p>
              </div>
            </div>

            <div className='my-6 md:mb-0 lg:flex gap-3 md:items-center justify-between'>
              <div className='dark:text-white text-base font-semibold mb-4 md:mb-0'>Border Countries:</div>
              <div className='flex gap-3 flex-1 text-center'>
                <a className='dark:text-white dark:bg-[#2b3945] text-sm flex-1 shadow-sm hover:shadow-md rounded-md py-1 lg:py-2 bg-white' href='/#'>France</a>
                <a className='dark:text-white dark:bg-[#2b3945] text-sm flex-1 shadow-sm hover:shadow-md rounded-md py-1 lg:py-2 bg-white' href='/#'>Germany</a>
                <a className='dark:text-white dark:bg-[#2b3945] text-sm flex-1 shadow-sm hover:shadow-md rounded-md py-1 lg:py-2 bg-white' href='/#'>Netherlands</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails