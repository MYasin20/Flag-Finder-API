import CountryCard from './CountryCard';
import CountrySelector from './CountrySelector';

const CountryLists = () => {
  return (
    <main className="w-full h-full px-4 py-6 md:pt-12 md:px-20 dark dark:bg-[#202C36]">
      <CountrySelector />
      <CountryCard />
    </main>
  )
}

export default CountryLists