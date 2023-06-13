import CountryLists from "../components/CountryLists"
import Header from "./Header"

const Home = () => {
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <CountryLists />
    </div>
  )
}

export default Home