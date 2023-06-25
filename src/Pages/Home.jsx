// import CountryDetails from "../components/CountryDetails"
import CountryLists from "../components/CountryLists"
import Header from "./Header"

const Home = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <CountryLists />
      {/* <CountryDetails /> */}
    </div>
  )
}

export default Home