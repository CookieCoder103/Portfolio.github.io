import "./Header.css";

function Header() {
  return (
    <>
      <section className="headerSection" id="Home">
        <div className="heroImage"></div>
        <div className="heroSection">
          <h1 className="headerTitle"> John's Photography </h1>

          <p className="hook">
            Capturing life's precious moments through the lens of experience!
          </p>
        </div>
      </section>
    </>
  );
}

export default Header;
