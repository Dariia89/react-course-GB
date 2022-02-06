import { ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import '../App.scss';

const useStyles = makeStyles(() => {
  return {
    item: {
      width: '100px',
    },
  };
});

export function Chat({ title, selected, deleteChatByName }) {
  const s = useStyles();

  return (
    <>
      <ListItem
        className={s.item}
        button={true}
        selected={selected}
      >        
        <span className="delete" onClick={() => deleteChatByName(title)}>x</span>
        <div>
          <ListItemText className={s.chat} primary={title} />
        </div>
      </ListItem>
    </>
  );
}