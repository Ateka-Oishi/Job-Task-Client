import PageTitle from "../../components/PageTitle/PageTitile";
import useAOS from "../../hooks/useAOS";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  useAOS();

  const faqs = [
    {
      question: "What is SCC Technovision Inc.'s Task Management Platform?",
      answer:
        "SCC Technovision Inc.'s Task Management Platform is a collaborative tool developed using React.js for frontend development. It aims to enhance task management with a user-friendly interface and robust features.",
    },
    {
      question:
        "Which technologies are used in the development of this platform?",
      answer:
        "The platform utilizes React.js for frontend development, and for the backend, Express, Node.js, and MongoDB are employed. Firebase is also used as part of the technology stack.",
    },
    {
      question: "What are the key design elements of the landing page?",
      answer:
        "The landing page features a simple navbar with relevant routes, a visually appealing banner, and a prominent 'Let’s Explore' button that directs users to the login page. The design ensures responsiveness across various devices.",
    },
    {
      question: "How can users navigate through the platform after logging in?",
      answer:
        "Once logged in, users can access the task management dashboard. Here, they can create new tasks, view previous tasks, and utilize drag-and-drop functionality to manage tasks across to-do, ongoing, and completed lists.",
    },
    {
      question: "What functionalities are available for user authentication?",
      answer:
        "Users can log in, register, and log out. The platform supports Google sign-in and requires user authentication to access the task management dashboard.",
    },
    {
      question:
        "What information is displayed on a user's profile in the task management dashboard?",
      answer:
        "Each user has a profile with a profile picture. The dashboard displays personal task details, including tasks added, tasks in progress, and completed tasks.",
    },
    {
      question: "How can users create new tasks on the platform?",
      answer:
        "Users can create new tasks with titles, descriptions, deadlines, and priority levels. The React Hook Form is utilized for efficient task creation.",
    },
    {
      question: "How is task organization handled in the dashboard?",
      answer:
        "Tasks are organized into three lists: to-do, ongoing, and completed. The platform implements drag-and-drop functionality, allowing users to move tasks between these lists.",
    },
    {
      question:
        "Are there additional features such as notifications and animations?",
      answer:
        "Yes, the platform includes toast notifications for task assignments, updates, and deadlines. Additionally, there is an option to incorporate animations using libraries like Framer Motion, Spring.js, or AOS.",
    },
    {
      question: "Is there a bonus feature in the platform?",
      answer:
        "Yes, a bonus feature includes enabling task editing functionality. Users can click a button to edit task details and save the changes.",
    },
  ];

  return (
    <>
      <PageTitle title={"Home"} />
      <Banner />
      <AboutUs />
      <Features />

      <section data-aos="fade-up" className="relative pb-20 overflow-hidden">
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a2d9ff"
            fillOpacity="1"
            d="M0,288L30,288C60,288,120,288,180,288C240,288,300,288,360,272C420,256,480,224,540,218.7C600,213,660,235,720,250.7C780,267,840,277,900,240C960,203,1020,117,1080,85.3C1140,53,1200,75,1260,80C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="container mx-auto px-5 py-10">
          <div className="text-center my-10">
            <h2
              data-aos="fade-up"
              className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
            >
              FAQ <br /> Frequently Asked Questions
            </h2>

            <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="space-y-3">
              {faqs.slice(0, 5).map((faq, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-200"
                >
                  <div className="collapse-title text-md font-semibold">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {faqs.slice(5, 10).map((faq, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-200"
                >
                  <div className="collapse-title text-md font-semibold">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
