import React from "react";
// import { setState } from "react-dom";
import { Collapse, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function SubList(props) {
  const [open, setOpen] = React.useState(true);

  const collapse = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={collapse}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText primary={props.name} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {props.drills.map((drill) => {
            return (
              <ListItemButton disablePadding onClick = {props.onClickSubList}>
                <ListItemIcon>
                  <SportsSoccerIcon />
                </ListItemIcon>
                <ListItemText primary={drill} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default SubList;
