import heroVideo from "../../../videos/hero-video.mp4";
import heroImage from "../../../images/heroBackground.jpg";

const Hero = () => {
  return (
    <div className="hero position-relative">
      <div className="h-100 w-50 overflow-hidden video-bac">
        <video className="h-100" loop autoPlay muted src={heroVideo} />
      </div>
      <div className="title-bac pt-4">
        <h1 className="htitle">
          Natural <br /> ingredients
        </h1>
        <h4 className="mt-5 text-white">PALEO BRINGS</h4>
        <p style={{ color: "var(--cpink)" }} className="mb-5">
          They do not advance, they are at fault who{" "}
          <span className="text-white">
            <br />
            abandon their duties
          </span>
          , it weakens the soul, that is.
        </p>
        <div className="d-flex gap-5 my-5 pt-4">
          <h2 className="text-white fs-1">§23</h2>
          <button className="hero-buy">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
