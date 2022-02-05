import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  Container,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

const useStyles = makeStyles(() => {
  return {
    link: {
      color: "white",
      "&:active": {
        color: "lightslategray",
      }
    },
  };
});

const pages = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
];

export function Header() {
  const s = useStyles();
  const { themeSetter, theme } = useContext(ThemeContext);
  
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Checkbox
              icon={<NightlightOutlinedIcon color="white" />}
              checkedIcon={<LightModeOutlinedIcon color="white" />}
              onClick={() => themeSetter(theme.name === 'dark' ? 'light' : 'dark')}
            />
            {pages.map(({ to, title }) => (
              <Button
                key={title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className={s.link} to={to}>
                  {title}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to={'/profile'}>
              <IconButton sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}