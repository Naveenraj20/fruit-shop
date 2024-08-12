import Vegetable from "../components/Vegetable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Vegetables() {
  return (
    <>    
        <Navbar />
      <div className="min-w-full ">
        <Vegetable/>
      </div>
      <Footer />
    </>
  );
}
