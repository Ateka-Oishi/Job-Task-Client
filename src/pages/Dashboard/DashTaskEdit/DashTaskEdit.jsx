import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DateTime from "react-datetime";
import PageTitle from "../../../components/PageTitle/PageTitile";

const DashTaskEdit = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const isValidDate = (current) => {
    // Disable past dates
    return current.isAfter();
  };

  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    axiosPublic.get(`/single-todo/${id}`).then((response) => {
      setTodoData(response.data);
    });
  }, [axiosPublic, id]);

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const task_title = form.title.value;
    const task_description = form.description.value;
    const task_priority = form.priority.value;

    console.log(task_title, task_description);

    if (task_title.length < 3) {
      return toast.error("Please enter a valid task name");
    }

    const data = {
      name: task_title,
      description: task_description,
      priority: task_priority,
      deadline: selectedDate._d,
      status: "todo",
      user: {
        name: user?.displayName,
        email: user?.email,
        uid: user?.uid,
      },
    };

    axiosPublic
      .patch(`/update-todo/${todoData?._id}`, data)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {})
      .finally(() => {
        toast.success("task updated successfully");
        // todoDataRefetch();
      });
  };

  return (
    <section>
      <PageTitle title="Task Edit" />
      <form className="space-y-2 mb-10" onSubmit={handleTaskSubmit}>
        <h2 className="text-center pb-4 font-bold text-2xl">Update To-Do</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            className="input-field !mt-0"
            placeholder="Task Name"
            name="title"
            defaultValue={todoData?.name}
          />

          <select
            className="input-field !mt-0"
            name="priority"
            id=""
            required
            defaultValue={todoData?.priority}
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <textarea
            name="description"
            className="input-field"
            placeholder="Task Description"
            defaultValue={todoData?.description}
          ></textarea>
          <div>
            <DateTime
              className="input-field outline-none [&>*]:outline-none"
              value={selectedDate}
              onChange={handleDateChange}
              inputProps={{ placeholder: "Select Date and Time" }}
              isValidDate={isValidDate}
            />
          </div>
        </div>
        <button className="btn btn-success text-white btn-block btn-sm">
          Update
        </button>
      </form>
    </section>
  );
};

export default DashTaskEdit;
