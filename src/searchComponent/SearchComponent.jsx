
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchingComponent from "../components/SearchingComponent";


export default function SearchComponent() { 

  return (
    <>
      <Navbar />
      <div className="mt-5 text-center">
        <a href="" className="btn">Search</a>      
      </div>
      <div className="mx-9 grid grid-cols-3 ">
        <SearchingComponent />
      </div>
      <Footer />
    </>
  );
}

