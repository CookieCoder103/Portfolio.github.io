import "./AboutMe.css";

function AboutMe() {
  return (
    <>
    <section id="AboutMe">
      <h2 className="aboutMeHeader">
        About Me
      </h2>

      <div className="aboutMeSection">
        <div className="profileImage"></div>

        <div className="bioSection">
          <p className="bio bio1">
            I'm John, a wedding photographer based in the UK who is passionate
            about capturing the magic of your special day. Discreet, calm, and
            creative, I use a blend of timeless portraiture and modern
            photojournalism to craft natural images that tell the unique story
            of your wedding celebrations. My expertise and artistic vision
            ensure you receive a prized collection of photographs that you and
            your loved ones will treasure for generations
          </p>

          <p className="hook hook3"> Capturing the art of 'I do.' </p>

          <p className="bio bio2">
            Based in the UK, I'm John, a passionate wedding photographer devoted
            to elegantly preserving the precious memories of your special day.
            Please explore my website portfolio to see how I can make your
            wedding day unforgettable. I'd be honored to learn more about you
            and bring your photographic vision to life.
          </p>
          <p className="hook hook2">
            Let's immortalise your most important memories together!
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
export default AboutMe;
