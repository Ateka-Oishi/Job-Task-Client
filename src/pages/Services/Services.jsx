import { GoTasklist } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-16">
        <div className="py-10">
          <h2 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our
            <span className="text-blue-500"> Services</span>
          </h2>
          <div className="mt-2 text-center">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* <iframe
            className="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden"
            src="https://vimeo.com/showcase/7060635/video/525707984/embed"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowfullscreen=""
          ></iframe> */}

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <GoTasklist />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                  Task Creation
                </h4>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Create new tasks effortlessly by providing titles,
                  descriptions, deadlines, and priority levels. Stay organized
                  with our intuitive task creation process.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <FaTasks />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                  Task Organization
                </h4>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Efficiently manage tasks with our drag-and-drop functionality.
                  Organize tasks into to-do, ongoing, and completed lists for a
                  clear overview.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <MdOutlineDeleteSweep />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                  Task Deletion
                </h4>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Maintain a clutter-free dashboard by easily deleting tasks you
                  no longer need. Your control over your tasks is just a click
                  away.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <IoMdNotificationsOutline />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                  Notifications
                </h4>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Stay informed with our instant toast notifications. Receive
                  updates on task assignments, important updates, and
                  approaching deadlines to never miss a beat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
