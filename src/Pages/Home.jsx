import CountryDetails from "../components/CountryDetails"
import CountryLists from "../components/CountryLists"
import Header from "./Header"
import { Routes, Route } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <Routes>
        <Route path="/" element={<CountryLists />} />
        <Route path="/:countryName" element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default Home