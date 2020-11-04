import React from 'react';
import Menu from '@material-ui/core/Menu';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core'
import { Link } from 'react-scroll';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const topMenuFontStyle = {textTransform: 'uppercase', color: '#3365A7'};
const topMenuLinkStyle = {textDecoration: 'none', display: 'inline-block', cursor: 'pointer'};

export default function TopMobileMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{margin: 0, padding: 0}}>
      <Fab size='small' style={{backgroundColor: 'white', color: '#3365A7'}}
           edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
           aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
      >
        <MenuIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{color: '#3365A7', borderRadius: 0}}
      >
        <MenuItem>
          <Link style={topMenuLinkStyle}
                activeClass="active"
                to="schedulesSection"
                spy
                smooth
                duration={500}
                isDynamic
                onClick={handleClose}
          >
            <Typography align="center" style={topMenuFontStyle}>
              Schedule
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={topMenuLinkStyle}
                activeClass="active"
                to="contactsSection"
                spy
                smooth
                duration={1000}
                isDynamic
                onClick={handleClose}
          >
            <Typography align="center" style={topMenuFontStyle}>
              Contacts
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={topMenuLinkStyle}
                activeClass="active"
                to="aboutUsSection"
                spy
                smooth
                duration={1500}
                isDynamic
                onClick={handleClose}
          >
            <Typography align="center" style={topMenuFontStyle}>
              About&nbsp;Us
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}