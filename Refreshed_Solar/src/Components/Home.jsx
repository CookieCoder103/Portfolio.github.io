import { Link } from "react-router-dom";
import "./styles/Home.css";

// =========== Other COMPS Imported =============\\

import Card from "./Card";
import Card2 from "./Card2";

// =========== Images Imported =============\\

import cardImg1 from "./assets/SolarPanel.jpg";
import cardImg2 from './assets/SolarInstalation.jpg'
import cardImg3 from './assets/BatteryPhoto.jpg'
import cardImg4 from './assets/SolarKits.jpg'
import cardImg5 from './assets/EnergyAudits.jpg'

import card2Img1 from "./assets/Quotes.jpg";
import card2Img2 from "./assets/Consultation.jpg";
import card2Img3 from "./assets/Newsletter.jpg";

export default function Home() {
  return (
    <>

      {/* HERO SECTION */}

    <section>
      <div className="heroSection">
        <h1 className="heroTitle">Refreshed Solar</h1>
      </div>

      <div className="briefDescription">
        <p>
          Refreshed Solar is your trusted partner in renewable energy
          solutions. Specializing in high-quality solar panels, we're
          committed to pioneering sustainable technologies for a greener
          future. With our expertise and dedication, we're driving positive
          change towards cleaner, more sustainable energy sources. Join us on
          our journey towards a brighter tomorrow, powered by the sun.
        </p>
      </div>

        {/* FEATURED PROJECTS */}

      <div className="featuredProducts">
        <h2 className="featuredHeader">Featured Products and Services</h2>
        <ul className="featuredInfo">
          <div className="anotherCardContainer">
            <Link to="/Products" className="link">
              <Card
                cardImg={cardImg1}
                cardTitle="Refurbished Solar Panels:"
                cardText="Explore our selection of premium refurbished solar panels."
              />
            </Link>

            <Link to="/Products" className="link">
              <Card
                cardImg={cardImg2}
                cardTitle="Solar Panel Installation:"
                cardText="Let our experienced team handle the installation of your solar
                        panel system."
              />
            </Link>

            <Link to="/Products" className="link">
              <Card
                cardImg={cardImg3}
                cardTitle="Battery Backup Solutions:"
                cardText="Keep the lights on even when the sun isn't shining with our
                        reliable battery backup solutions."
              />
            </Link>

            <Link to="/Products" className="link">
              <Card
                cardImg={cardImg4}
                cardTitle="Solar Panel Kits:"
                cardText="Discover our hassle-free installation convenient solar panel kits"
              />
            </Link>

            <Link to="/Products" className="link">
              <Card
                cardImg={cardImg5}
                cardTitle="Energy Efficiency Audits:"
                cardText="Energy Audits designed to identify opportunities for
                        savings and sustainability"
              />
            </Link>
          </div>
        </ul>
      </div>

      <div className="callToAction">
        <h2 className="ctaHeader">
          Take the Next Step Towards Sustainable Energy
        </h2>
        <p>
          Ready to make the switch to clean, renewable energy? Get started
          today by exploring our range of solar solutions and services:
        </p>

        <div className="thirdCardContainer">
          <Link to="/Pricing" className="link">
            <Card2
              card2Img={card2Img1}
              card2Title="Request a Quote:"
              card2Text="Receive a personalized quote tailored to your energy needs and
                          budget requirements. Let us help you find the perfect solar
                          solution for your home or business."
            />
          </Link>

          <Link to="/Pricing" className="link">
            <Card2
              card2Img={card2Img2}
              card2Title="Schedule a Consultation:"
              card2Text="Speak with one of our experts to discuss your solar options, ask
                          questions, and learn more about the benefits of renewable energy."
            />
          </Link>

          <Link to="/Pricing" className="link">
            <Card2
              card2Img={card2Img3}
              card2Title="Sign Up for Updates:"
              card2Text="Stay informed about the latest news, promotions, and industry
                          insights by subscribing to our newsletter. Join our community of
                          eco-conscious individuals and businesses committed to a
                          sustainable future."
            />
          </Link>
        </div>
        <p className="homeHook">
          Ready to take the next step towards a cleaner, greener tomorrow?
          Contact us today to get started!
        </p>
      </div>
    </section>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}


