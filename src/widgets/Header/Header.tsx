import {FC} from 'react';
import {AppBar, Toolbar, Typography, IconButton, Container, Badge} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../shared/hooks/store";

const Header: FC = () => {
  const trash = useAppSelector((state) => state.trashSlice.trash);
  const trashCount = trash.length;

  return (
    <AppBar position="static" style={{width: '100%'}} color={"primary"}>
      <Container>
        <Toolbar>
          <Link to={"/"}>
            <Typography variant="h3" color={"whitesmoke"}>Task List</Typography>
          </Link>
          <IconButton color="inherit" aria-label="delete" style={{marginLeft: 'auto'}}>
            <Link to={"/trash"}>
              <Badge badgeContent={trashCount} color="warning">
                <DeleteIcon color="action"/>
              </Badge>
            </Link>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
