import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="testimonialSection" id="Testimonials">
        <h2>Testimonials</h2>
        <div className="testimonialContainer test1">
          <div className="testimonialImage Couple1"></div>
          <div className="testimonialInfo">
            <p className="testimonial">
              "We can't say enough good things about John as our wedding
              photographer. He went above and beyond to capture all of the
              special moments throughout our big day. John has such an eye for
              lighting and composition - every photo he took was
              magazine-worthy! He was able to direct large groups as well as
              candid shots seamlessly. Our photos allow us to relive our wedding
              day over and over. We couldn't be happier that we chose John. Our
              photos are timeless treasures."
            </p>
            <p className="coupleNames name1">- Sarah and Matt Johnson</p>
          </div>
        </div>

        <div className="testimonialContainer test2">
          <div className="testimonialImage Couple2"></div>
          <div className="testimonialInfo">
            <p className="testimonial">
              "I don't think there are enough positive adjectives to describe
              our experience with John as our wedding photographer. His artistic
              vision, technical skills, and creative perspectives resulted in
              the most stunning wedding photos we've ever seen! John captured
              the emotion, joy, and special details of our wedding in a way that
              tells the story of the best day of our lives. He was professional,
              calm, and enthusiastic which allowed him to fade into the
              background yet still get magnificent candid shots. We will cherish
              our wedding photos and the memories they invoke for the rest of
              our lives. John is truly talented at what he does."
            </p>
            <p className="coupleNames name2">- Emily and Ryan Wilson</p>
          </div>
        </div>

        <div className="testimonialContainer test3">
          <div className="testimonialImage Couple3"></div>
          <div className="testimonialInfo">
            <p className="testimonial">
              "John was referred to us by several friends as their wedding
              photographer, and we could not have been happier with him as ours
              as well! He has a way of making you feel comfortable and relaxed
              while bringing out your natural smiles and joy. Our wedding photos
              exude the romance and happiness we felt on our big day. John
              perfectly balanced posed shots with artistic, candid photos that
              we never realized he was taking! His photos showcase the love and
              magic we felt. We will be reminiscing over these photos for
              anniversaries to come."
            </p>
            <p className="coupleNames name3">- Olivia and David Anderson</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
