import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from './MenuIcon';
import MenuDense from './MenuDense';
import { Stack } from '@mui/material';
import MenuAccount from './MenuAccount';
import MenuCustom from './MenuCustom';
import MenuMaxHeight from './MenuMaxHeight';
import MenuLimitation from './MenuLimitation';
import MenuContext from './MenuContext';

export default function () {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <h1>Menu</h1>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Click 하세요
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Stack spacing={2} sx={{my:3}}>
        <MenuIcon />
        <MenuDense />
        <MenuAccount/>
        <MenuCustom />
        <MenuMaxHeight/>
        <MenuLimitation/>
        <MenuContext/>
      </Stack>
    </div>
  );
}
