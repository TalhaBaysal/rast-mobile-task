import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Menu } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const drawerWidth = 240;
const pages = [
  "Hakkımızda",
  "Jüri - Yarışma Yazılımı",
  "Word Ninja",
  "Word Pyramids",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ display: "flex", minHeight: 83 }}>
        <Container sx={{ maxWidth: "none !important", margin: "auto" }}>
          <AppBar
            component="nav"
            elevation={0}
            color="secondary"
            position="static"
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "block", md: "none" } }}
              >
                <Menu />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <Logo />
              </Box>
              <Box
                sx={{
                  flexGrow: 0.7,
                  display: { xs: "none", sm: "none", md: "flex" },
                  justifyContent: "space-around",
                }}
              >
                {pages.map((page) => (
                  <Button key={page} sx={{ color: "black" }}>
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { sm: "block" } }}>
                <YouTubeIcon sx={{ marginRight: "10px" }} color="primary" />
                <InstagramIcon sx={{ marginRight: "10px" }} color="primary" />
                <FontAwesomeIcon
                  icon={faBehanceSquare}
                  size="xl"
                  style={{
                    marginRight: "10px",
                    color: "#744bfc",
                    verticalAlign: "0",
                  }}
                />
                <LinkedInIcon color="primary" />
              </Box>
            </Toolbar>
          </AppBar>
        </Container>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                <Logo />
              </Typography>
              <Divider />
              <List>
                {pages.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
