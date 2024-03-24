import './styles/Testimonials.css'

function Testimonials() {
  return (
    <>
      <section className="testimonialSection">
        <h1>Testimonials</h1>
        <div className="testimonialsContainer">
          
        <div className="testimonialContainer test1">
          <div className='testimonialImage customer1'></div>
            <div className='testimonialInfo'>
              <p className="testimonial">
              "As a sustainable construction firm, we rely on high-quality solar panels for our projects. The solar panels provided by Refreshed Solar have consistently exceeded our expectations in terms of performance and durability. Their professional service and attention to detail make them our go-to supplier for renewable energy solutions."
              </p>
              <p className="customerNames name1">- GreenTech Solutions, LLC</p>
          </div>
        </div>

        <div className="testimonialContainer test2">
          <div className='testimonialImage customer2'></div>
            <div className='testimonialInfo'>
              <p className="testimonial">
              "Our farm has been powered by solar energy from Refreshed Solar for over three years now. The solar panels have significantly reduced our energy costs and carbon footprint while providing reliable power for our operations. We highly recommend Refrershed Solar for their exceptional products and outstanding customer service."
              </p>
              <p className="customerNames name2">- Sunrise Farms</p>
          </div>
        </div>

        <div className="testimonialContainer test3">
          <div className='testimonialImage customer3'></div>
            <div className='testimonialInfo'>
              <p className="testimonial">
              "Switching to solar panels from Refreshed Solar was one of the best decisions we've made for our home. Not only have we seen a significant decrease in our electricity bills, but we also feel good knowing we're contributing to a cleaner environment. The installation process was seamless, and the team at Refreshed Solar was professional and knowledgeable throughout."              </p>
              <p className="customerNames name3">- Sarah Thompson, Homeowner</p>
          </div>
        </div>

        <div className="testimonialContainer test4">
          <div className='testimonialImage customer4'></div>
            <div className='testimonialInfo'>
              <p className="testimonial">
              "We've been enjoying the benefits of solar energy with panels from Refreshed Solar for over two years now. Our system has performed flawlessly, even during the hottest summer months. Refreshed Solar provided excellent customer service from the initial consultation to the final installation. We couldn't be happier with our decision to go solar!"              </p>
              <p className="customerNames name4">- John and Lisa Michaels, Homeowners</p>
          </div>
        </div>

        <div className="testimonialContainer test5">
          <div className='testimonialImage customer5'></div>
            <div className='testimonialInfo'>
              <p className="testimonial">
              "I've been impressed with the performance of the solar panels installed by Refreshed Solar on my home. Not only am I saving money on my electricity bills, but I also feel good knowing I'm doing my part for the environment. The team at Refreshed Solar was friendly, professional, and attentive to my needs throughout the entire process. I highly recommend them to anyone considering solar energy."
              </p>
              <p className="customerNames name5">- David Rodriguez, Homeowner</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
