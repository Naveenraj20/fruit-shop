
import Fruit from "../components/Fruit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Fruits() {
  return (
    <>    
        <Navbar />
      <div className="min-w-full ">
        <Fruit />
      </div>
      <Footer />
    </>
  );
}
