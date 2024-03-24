import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <>
      <nav className="sidebar">
        <ul>
          <li className="hamburgerMenuX" onClick={hideSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li>
            <Link
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              to="Art" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="Pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="topbar">
        <ul>
          <li>
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="heightOnMobile">
            <Link
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="heightOnMobile">
            <Link to="Art" spy={true} smooth={true} offset={50} duration={500}>
              My Work
            </Link>
          </li>
          <li className="heightOnMobile">
            <Link
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li className="heightOnMobile">
            <Link
              to="Pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <li className="heightOnMobile">
            <Link
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
          <li className="hamburgerMenu" onClick={showSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
