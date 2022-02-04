import { ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    item: {
      width: "100px",
      "&.Mui-selected": {
        backgroundColor: "lightsteelblue",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "lightsteelblue",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick }) {
  const s = useStyles();

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <div>
        <ListItemText primary={title} />
      </div>
    </ListItem>
  );
}