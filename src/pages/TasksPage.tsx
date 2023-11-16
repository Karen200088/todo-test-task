import {FC} from 'react';

import {Loading} from "../shared/ui";
import {useAppSelector} from "../shared/hooks/store";
import TaskForm from "../widgets/TaskForm/TaskForm";
import TaskList from "../widgets/TaskList/TaskList";
import {Container} from "@mui/material";

const TasksPage: FC = () => {

  const tasks = useAppSelector((state) => state.tasksSlice);

  if (!tasks) return <Loading/>;

  return (
    <Container maxWidth="md">
      <TaskForm />
      <TaskList />
    </Container>
  );
};

export default TasksPage;