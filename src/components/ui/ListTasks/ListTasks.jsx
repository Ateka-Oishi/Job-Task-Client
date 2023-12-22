/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ListTasks = ({ tasks, setTasks, todoDataRefetch }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    // Ensure tasks is an array before filtering
    if (Array.isArray(tasks)) {
      const fTodos = tasks.filter((task) => task.status === "todo");
      const fInProgress = tasks.filter((task) => task.status === "inprogress");
      const fClosed = tasks.filter((task) => task.status === "closed");

      setTodos(fTodos);
      setInProgress(fInProgress);
      setClosed(fClosed);
    }
  }, [tasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
          todoDataRefetch={todoDataRefetch}
        />
      ))}
    </div>
  );
};

export default ListTasks;

const Section = ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
  todoDataRefetch,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = `${isOver ? "bg-stone-800" : "bg-stone-500"}`;
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In Progress";
    bg = `${isOver ? "bg-purple-800" : "bg-purple-500"}`;
    tasksToMap = inProgress;
  }
  if (status === "closed") {
    text = "Closed";
    bg = `${isOver ? "bg-green-800" : "bg-green-500"}`;
    tasksToMap = closed;
  }

  const axiosPublic = useAxiosPublic();

  const addItemToSection = (id) => {
    axiosPublic
      .patch(`/todo/${id}`, { status })
      .then((response) => {
        // Handle success if needed
        // console.log(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        // console.error(error);
      })
      .finally(() => {
        todoDataRefetch();
      });
  };

  return (
    <div ref={drop} className="w-full mt-5">
      <Header text={text} bg={bg} count={tasksToMap.length} />
      <div className="space-y-1">
        {tasksToMap?.map((task) => (
          <Task
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            todoDataRefetch={todoDataRefetch}
          />
        ))}
      </div>
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} transition-all flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white mb-5`}
    >
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, todoDataRefetch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const axiosPublic = useAxiosPublic();

  const handleRemoveTask = (id) => {
    axiosPublic.delete(`/todo/${id}`).then((res) => {
      console.log(res.data?.deletedCount);
      if (res.data?.deletedCount === 1) {
        toast("Task removed", { icon: "😥" });
        todoDataRefetch();
      }
    });
  };

  return (
    <>
      <div ref={drag} tabIndex={0} className="collapse bg-base-200 relative">
        <div className="collapse-title text-sm font-medium">{task?.name} </div>
        <div className="collapse-content">
          <p className="text-sm">
            {task?.description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <button
          type="submit"
          onClick={() => handleRemoveTask(task._id)}
          className="absolute right-2 bottom-2 btn btn-outline btn-xs btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
      </div>
    </>
  );
};
