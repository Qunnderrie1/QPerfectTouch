import React from "react";
import QuoteForm from "../Components/QuoteForm";


const About = () => {

  return (
    <div className="aboutContainer ">
      <div className="pageTitleContainer">
        <div className="pageTitleBackgroundCover"></div>
        <div className="pageTextContainer container">
          <h2 className="pageTitle">Q Perfect Touch</h2>
          <h3 className="pageSubTitle">About Us</h3>
        </div>
      </div>
      <div className="aboutContent container">
        <h3>Q PERFECT TOUCH MOBILE</h3>
      <p className="aboutText">
        Q Perfect Touch is a premium mobile detailing service based in Columbus,
        Georgia, committed to enhancing your vehicle's appearance while offering
        unparalleled convenience. We understand that life can get busy, which is
        why we bring our professional services directly to you—whether you're at
        home, at work, or anywhere else, we come fully equipped to get the job
        done right on-site. We specialize in a variety of detailing services
        designed to keep your vehicle looking pristine: Seat Shampoo: Deep
        cleaning to remove stains, odors, and grime from your vehicle's
        upholstery. Carpet Shampoo: Refreshes and restores your carpets,
        eliminating dirt, stains, and allergens. Full Interior Detailing: A
        comprehensive cleaning that covers every inch of your vehicle’s
        interior, from dashboards to door panels, leaving your car’s cabin
        spotless and rejuvenated. Basic In and Out Cleaning: A quick yet
        thorough clean, inside and out, to keep your vehicle looking its best on
        a regular basis. At Q Perfect Touch, we pride ourselves on delivering
        exceptional results with the highest attention to detail. Our
        experienced team uses high-quality products and industry-leading
        techniques to ensure your vehicle gets the care it deserves. We cater to
        all vehicle types, from cars and trucks to SUVs, and strive to exceed
        your expectations with every service. No more waiting at the car wash or
        struggling to find time for a full detailing—our mobile service brings
        the solution to your doorstep. Experience the ease and excellence of Q
        Perfect Touch, where your convenience and satisfaction are our top
        priorities.
      </p>
      </div>
      <QuoteForm />
    </div>
  );
};

export default About;
