import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CreateTask = ({ todoDataRefetch }) => {
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const task_title = form.title.value;
    const task_description = form.description.value;

    console.log(task_title, task_description);

    if (task_title.length < 3) {
      return toast.error("Please enter a valid task name");
    }

    const data = {
      name: task_title,
      description: task_description,
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

  return (
    <form className="space-y-2 mb-10" onSubmit={handleTaskSubmit}>
      <h2 className="text-center pb-4 font-bold">Create New Todo</h2>
      <input
        type="text"
        className="input-field !mt-0"
        placeholder="Task Name"
        name="title"
      />
      <textarea
        name="description"
        className="input-field"
        placeholder="Task Description"
      ></textarea>
      <button className="btn btn-success text-white btn-block btn-sm">
        Create
      </button>
    </form>
  );
};

export default CreateTask;
