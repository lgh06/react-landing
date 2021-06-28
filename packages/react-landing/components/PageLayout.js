import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { VERSION } from '@react-page/editor';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    main: {
      flexGrow: 1,
      padding: theme.spacing(4),
      backgroundColor: '#eee',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      backgroundColor: 'white',
      maxWidth: 1280,
      margin: 'auto',
    },
  })
);

const PageLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              React Page {VERSION}
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          <div className={classes.toolbar} />
          <div className={classes.content}>{children}</div>
        </main>
      </div>
    </>
  );
};
export default PageLayout;