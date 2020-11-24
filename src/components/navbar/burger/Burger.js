import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import { useTheme  } from '@emotion/react'

const Burger = ({ open, setOpen }) => {
    const theme = useTheme()
  return (
    <StyledBurger  theme={theme} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;