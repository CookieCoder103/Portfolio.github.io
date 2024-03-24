
import "./styles/About.css";

function About() {
  return (
    <>
      <section className="aboutSection">
        <h1>More on Refreshed Solar</h1>

        <div className="theMission">
            <h2> Our Mission </h2>
          <div className="missionList">
            <div className="missionImg"><img /></div>
          <ul>
            <li>
              <strong>1.</strong> Empower individuals and businesses with sustainable energy
              solutions.
            </li>
            <li>
              <strong>2.</strong> Drive innovation in the renewable energy sector to mitigate
              climate change.
            </li>
            <li>
              <strong>3.</strong> Foster environmental stewardship and reduce carbon emissions.
            </li>
            <li>
              <strong>4.</strong> Enable communities to embrace clean, renewable energy for a
              brighter future.
            </li>
          </ul>
          </div>
        </div>

        <div className="companyOverview">
            <h2> Company Overview </h2>
          <p>
            Refreshed Solar is a leading provider of renewable energy solutions,
            specializing in the refurbishment and distribution of high-quality
            solar panels. Founded in 2000, our company has been at the forefront
            of the renewable energy industry, driving positive change towards a
            cleaner, more sustainable future.
          </p>

          <p>
            At Refreshed Solar, we believe in the power of solar energy to
            transform the way we generate and consume electricity. With a
            commitment to excellence and innovation, we offer a comprehensive
            range of products and services designed to meet the diverse needs of
            residential, commercial, and industrial customers.
          </p>

          <p>
            Our team of experts brings years of experience and expertise to
            every project, ensuring the highest standards of quality,
            reliability, and performance. From solar panel refurbishment and
            installation to battery backup solutions and energy efficiency
            audits, we are dedicated to providing tailored solutions that
            deliver maximum value and environmental impact.
          </p>

          <p>
            Join us in our mission to harness the power of the sun and create a
            brighter, more sustainable future for generations to come. Together,
            we can build a world powered by clean, renewable energy.
          </p>
        </div>

        <div className="foundersHeading"><h2>Our Founders Story</h2></div>
        <div className="foundersStory">
          <div className="foundersImg"><img /></div>
          <div className="foundersInfo">
            <p>
              John Doe, the visionary behind Refreshed Solar, began his journey
              in the construction industry, where he witnessed firsthand the
              wastage of perfectly usable solar panels. Working on various
              construction sites, he noticed that many solar panels were being
              discarded and left to waste due to minor defects or
              inefficiencies.
            </p>

            <p>
              Driven by a deep-seated concern for environmental sustainability
              and a desire to make a positive impact, John Doe saw an
              opportunity to repurpose these neglected solar panels and give
              them a new lease on life. With a strong belief in the potential of
              renewable energy to transform our world, he embarked on a mission
              to harness the power of the sun and make it accessible to
              everyone.
            </p>

            <p>
              Starting from humble beginnings, John Doe set out to refurbish and
              redistribute these discarded solar panels, breathing new life into
              them and offering affordable, sustainable energy solutions to
              individuals and businesses alike. Through hard work,
              determination, and a steadfast commitment to his vision, he built
              Refreshed Solar from the ground up, one solar panel at a time.
            </p>

            <p>
              Today, Refreshed Solar stands as a testament to John Doe's
              unwavering dedication to environmental stewardship and innovation
              in the renewable energy sector. His journey from construction
              worker to renewable energy pioneer is a shining example of how one
              person's vision and passion can spark a movement towards a
              greener, more sustainable future for all.
            </p>
          </div>
        </div>

            {/* CONTACT SECTION */}
        <div className="contactForm">
            <div className="contactBox">
              <h2> Contact Us! </h2>
              <form>
                  <div className="formElement">
                      <p>First Name:</p>
                      <input type="text" placeholder="First Name"/>
                  </div>

                  <div className="formElement">
                      <p>Last Name</p>
                      <input type="text" placeholder="Last Name"/>
                  </div>

                  <div className="formElement">
                      <p>Email:</p>
                      <input type="email" placeholder="Email"/>
                  </div>

                  <div className="formElement">
                      <p>Requirements & Questions:</p>
                      <textarea type="text" />
                  </div>
              </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default About;
