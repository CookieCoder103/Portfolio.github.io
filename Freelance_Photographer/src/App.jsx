import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import PriceCard from "./Components/PriceCard.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Art from "./Components/Art.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <div className="appContainer">
        <Navbar />
        <Header />
        <AboutMe />
        <Art />
        <Testimonials />

        <div className="pricingSection" id="Pricing">
          <h2>Pricing</h2>
          <div className="pricecardDiv">
            
            <PriceCard
              header="The 'Daydream' Package"
              detail1="Full wedding day coverage"
              detail2="Online gallery of all edited high-resolution photos"
              detail3="Print release for personal printing"
              price="£1,500"
            />

            <PriceCard
              header="The 'Eternity' Package"
              detail1="Wedding day and reception coverage"
              detail2="10x10 custom wedding album"
              detail3="Photoshoots for the guests and family"
              price="£2,500"
            />

            <PriceCard
              header="The 'Happily Ever After' Package"
              detail1="Film crew to record the whole event"
              detail2="Engagement photo session"
              detail3="Custom wedding day slideshow & movie"
              price="£5,000"
            />

          </div>
        </div>
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
export default App;
