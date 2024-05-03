import test from "../../assets/images/hero2.webp";

const HeroSection = () => {
  return (
    <div
      className="lg:w-full h-64 lg:h-96 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${test})` }}
    >
      {/* Content here if needed */}
    </div>
  );
};

export default HeroSection;
