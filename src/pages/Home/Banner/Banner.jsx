import { Link } from "react-router-dom";
import PatternDark from "../../../assets/images/pattern-dark.20747baf.svg";
import useAOS from "../../../hooks/useAOS";

const Banner = () => {
  useAOS()
  const handleMouseMove = (e) => {
    document.querySelectorAll(".banner-parallax").forEach((parallax) => {
      const speed = parseFloat(parallax.getAttribute("data-speed")) || 1;
      const x = (window.innerWidth - e.pageX) / speed;
      const y = (window.innerHeight - e.pageY) / speed;
      console.log(e.pageX);
      parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <section
      data-aos="fade-up"
      onMouseMove={handleMouseMove}
      className="md:-mt-20 border-b overflow-hidden relative  hover-effect-container"
      style={{
        background: `url(${PatternDark})`,
      }}
    >
      <div
        data-aos="fade-in"
        data-speed="11"
        className="banner-parallax w-56 h-56 border-8 border-purple-500 rounded-full absolute -top-10 -right-10 blur transition-transform "
      ></div>
      <div
        data-aos="fade-in"
        data-speed="17"
        className="banner-parallax w-56 h-56 border-8 border-purple-500 rounded-full absolute -bottom-10 -left-10 blur transition-transform"
      ></div>
      <div
        data-aos="fade-down"
        data-speed="-25"
        className="hidden md:block banner-parallax w-10 h-10 border-4 border-purple-500 rounded-full absolute top-56 left-56 transition-transform"
      ></div>
      <div
        data-aos="fade-down"
        data-speed="27"
        className="hidden md:block banner-parallax w-10 h-10 bg-purple-700 rounded-full absolute top-56 left-56 transition-transform blur-lg"
      ></div>

      <div
        data-aos="fade-down"
        data-speed="-25"
        className="hidden md:block banner-parallax w-10 h-10 bg-purple-700 rounded-full absolute top-56 right-56 transition-transform blur-lg"
      ></div>
      <div
        data-aos="fade-down"
        data-speed="25"
        className="hidden md:block banner-parallax w-10 h-10 border-4 border-purple-500 rounded-full absolute top-56 right-56 transition-transform"
      ></div>
      <img
        data-aos="fade-down"
        data-speed="40"
        src="https://i.imgur.com/jGIQKBP.png"
        className="hidden md:block banner-parallax w-1/6 rounded-full absolute bottom-32 right-40 transition-transform"
        alt=""
      />

      <div className="hero h-[80vh] sm:min-h-screen">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center ">
          <div className="max-w-2xl">
            <h2
              data-aos="fade-up"
              className="mb-5 text-2xl md:text-4xl font-bold"
            >
              Empower Your Productivity with Smart Task Management
            </h2>
            <p data-aos="fade-up" className="mb-5">
              Boost your productivity with our smart task management solution!
              Prioritize, collaborate seamlessly, and customize workflows
              effortlessly. Stay on top of deadlines with timely reminders and
              gain valuable insights into your work patterns. Empower your
              productivity journey today!
            </p>
            <Link to="/dashboard">
              <button
                data-aos="fade-down"
                className="custom-button active:scale-95"
              >
                Let&apos;s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
