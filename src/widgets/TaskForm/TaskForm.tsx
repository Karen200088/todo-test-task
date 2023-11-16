import {FC} from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Button, TextField, Typography, Box} from '@mui/material';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';
import {addTask} from "../../entities/tasksSlice";

const TaskForm: FC = () => {

  const dispatch = useDispatch();

  const initialValues = {title: '', description: '', deadline: ''};

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string(),
    deadline: Yup.date().nullable(),
  });

  const addTodo = (values: any, actions: any) => {
    dispatch(
      addTask({
        ...values,
        id: uuidv4(),
        status: 'Pending',
      })
    );
    actions.resetForm();
  };

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Add Task
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={addTodo}>
        <Form>
          <Box my={2}>
            <Field
              as={TextField}
              fullWidth
              label="Title"
              variant="outlined"
              name="title"
              sx={{mb: 2}}
            />
            <ErrorMessage name="title" component="div"/>
          </Box>

          <Box my={2}>
            <Field
              as={TextField}
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              name="description"
              sx={{mb: 2}}
            />
            <ErrorMessage name="description" component="div"/>
          </Box>

          <Box my={2}>
            <Field
              as={TextField}
              fullWidth
              variant="outlined"
              type="date"
              name="deadline"
              sx={{mb: 2}}
            />
            <ErrorMessage name="deadline" component="div"/>
          </Box>

          <Box my={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" type="submit">
              Add Task
            </Button>
          </Box>
        </Form>
      </Formik>
      <hr/>
    </Box>
  );
};

export default TaskForm;
