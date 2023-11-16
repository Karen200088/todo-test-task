import {FC} from 'react';

import {useAppSelector} from "../shared/hooks/store";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Box,
  Container, List,
  ListItemText,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TrashPage: FC = () => {

  const trash = useAppSelector((state) => state.trashSlice.trash);

  if (!trash.length) return <Typography variant="h4" align="center" sx={{mt: 4}}>Empty trash</Typography>;

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <List>
          {trash && trash.map((trash) => (
            <Accordion key={trash.id} sx={{mt: 2, border: 1, borderRadius: 1, borderColor: 'grey.300'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <ListItemText primary={`${trash.title} - ${trash.status}`}/>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Description: {trash.description}</Typography>
                <Typography>Deadline: {trash.deadline}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TrashPage;