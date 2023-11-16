import {useState, FC} from 'react';

import {useAppDispatch, useAppSelector} from "../../shared/hooks/store";
import {addToTrash} from "../../entities/trashSlice";
import {editTask, markAsComplete, markAsOverdue, removeTask, Task} from "../../entities/tasksSlice";

import {
  List,
  ListItemText,
  Button,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskEditDialog from "../../feature/TaskEditDialog/TaskEditDialog";

const TaskList: FC = () => {

  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasksSlice.tasks);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleRemoveTask = (task: Task) => {
    dispatch(removeTask(task.id));
    dispatch(addToTrash(task));
  };

  const handleMarkAsComplete = (taskId: number) => {
    dispatch(markAsComplete(taskId));
  };

  const handleMarkAsOverdue = (taskId: number) => {
    dispatch(markAsOverdue(taskId));
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
  };

  const handleEditDialogClose = () => {
    setSelectedTask(null);
  };

  const handleSaveEditedTask = (editedTask: Task) => {
    dispatch(editTask(editedTask));
    setSelectedTask(null);
  };

  if (!tasks.length) return <Typography variant="h4" align="center" sx={{mt: 4}}>No tasks</Typography>;

  return (
    <Box my={4}>
      <List>
        {tasks.map((task) => (
          <Accordion key={task.id} sx={{mt: 2, border: 1, borderRadius: 1, borderColor: 'grey.300'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color={task.status === 'Completed' ? "success" : "disabled"}/>}>
              <ListItemText primary={`${task.title} - ${task.status}`}/>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Description: {task.description}</Typography>
              <Typography>Deadline: {task.deadline}</Typography>
            </AccordionDetails>
            <AccordionDetails sx={{display: 'flex', gap: "10px", fontSize: "10px"}}>
              <Button variant="outlined" color="primary" onClick={() => handleEditTask(task)}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveTask(task)}
              >
                Remove
              </Button>
              {task.status === 'Pending' && (
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => handleMarkAsComplete(task.id)}
                >
                  Mark as Complete
                </Button>
              )}
              {task.status === 'Pending' && (
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={() => handleMarkAsOverdue(task.id)}
                >
                  Mark as Overdue
                </Button>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
      {selectedTask && (
        <TaskEditDialog
          task={selectedTask}
          onClose={handleEditDialogClose}
          onSave={handleSaveEditedTask}
        />
      )}
    </Box>
  );
};

export default TaskList;
