import { useState } from "react"
import CountryDetails from "../components/CountryDetails"
import CountryLists from "../components/CountryLists"
import Header from "./Header"
import { Routes, Route } from "react-router-dom"

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    return setDarkMode(!isDarkMode);
  }
  return (
    <div className="h-full w-full">
      <Header darkMode={handleDarkMode} setDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<CountryLists setDarkMode={isDarkMode} />} />
        <Route path="/:countryName" element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default Home