import { Link } from "react-router-dom";
import PatternDark from "../../../assets/images/pattern-dark.20747baf.svg";

const Banner = () => {
  return (
    <section
      className="md:-mt-20 border-b"
      style={{
        background: `url(${PatternDark})`,
      }}
    >
      <div className="animate-bounce bg-blue-300 w-96 h-56 absolute top-0 left-0 blur-3xl"></div>
      <div className="animate-bounce bg-blue-300 w-96 h-56 absolute bottom-0 right-0 blur-3xl"></div>

      <div className="hero min-h-screen">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center ">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-2xl md:text-4xl font-bold">
              Empower Your Productivity with Smart Task Management
            </h1>
            <p className="mb-5">
              Boost your productivity with our smart task management solution!
              Prioritize, collaborate seamlessly, and customize workflows
              effortlessly. Stay on top of deadlines with timely reminders and
              gain valuable insights into your work patterns. Empower your
              productivity journey today!
            </p>
            <Link to="/dashboard">
              <button className="custom-button active:scale-95">
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
