import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from '@mui/material';
import {Task} from "../../entities/tasksSlice";

interface TaskEditDialogProps {
  task: Task;
  onClose: () => void;
  onSave: (editedTask: Task) => void;
}

const TaskEditDialog: React.FC<TaskEditDialogProps> = ({ task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState<Task>(task);

  const handleInputChange = (field: keyof Task, value: string) => {
    setEditedTask((prevTask) => ({
      ...prevTask,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={editedTask.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={editedTask.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
        <TextField
          label="Deadline"
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          value={editedTask.deadline}
          onChange={(e) => handleInputChange('deadline', e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Box>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default TaskEditDialog;
