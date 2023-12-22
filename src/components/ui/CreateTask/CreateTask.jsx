import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useState } from "react";

const CreateTask = ({ todoDataRefetch }) => {
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      .post("/todo", data)
      .then((response) => {})
      .catch((error) => {})
      .finally(() => {
        todoDataRefetch();
      });

    form.reset();
  };

  const isValidDate = (current) => {
    // Disable past dates
    return current.isAfter();
  };

  return (
    <form className="space-y-2 mb-10" onSubmit={handleTaskSubmit}>
      <h2 className="text-center pb-4 font-bold text-2xl">Create New Todo</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          className="input-field !mt-0"
          placeholder="Task Name"
          name="title"
        />

        <select className="input-field !mt-0" name="priority" id="" required>
          <option value="" disabled selected>
            Priority
          </option>
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
        Create
      </button>
    </form>
  );
};

export default CreateTask;
