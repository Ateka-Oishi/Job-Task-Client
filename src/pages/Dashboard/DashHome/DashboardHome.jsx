import { useEffect, useState } from "react";
import CreateTask from "../../../components/ui/CreateTask/CreateTask";
import ListTasks from "../../../components/ui/ListTasks/ListTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useTodoData from "../../../hooks/useTodoData";

const DashboardHome = () => {
  const [tasks, setTasks] = useState([]);
  const [todoData, todoDataPending, todoDataRefetch] = useTodoData();
  
  return (
    <section>
      <DndProvider backend={HTML5Backend}>
        <div className="">
          <CreateTask todoDataRefetch={todoDataRefetch} />
          <ListTasks
            tasks={todoData?.data}
            setTasks={setTasks}
            todoDataRefetch={todoDataRefetch}
          />
        </div>
      </DndProvider>
    </section>
  );
};

export default DashboardHome;
