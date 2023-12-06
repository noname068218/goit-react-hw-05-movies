import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
`;
export const SliderMenu = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export const SliderMenuItem = styled.li`
  display: inline-flex;
  padding: 14px;
  margin-left: 2px;
  font-family: 'Quicksand', sans-serif;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: 0.3s linear all;
  user-select: none;

  &:hover {
    color: ${props => props.theme.colors.hoverColor};
    box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
  }
`;

export const Header = styled.header`
  position: relative;
  width: ${props => props.theme.geometry.headerWidth};
  min-width: ${props => props.theme.geometry.headerMinWidth};
  height: ${props => props.theme.geometry.headerHeight};
  border: 10px solid transparent;
  border-top: 10px solid ${props => props.theme.colors.borderColor};
  border-left: 10px solid ${props => props.theme.colors.borderColor};
  box-shadow: 4px 4px 5px ${props => props.theme.colors.insetShadowColor} inset;
  z-index: 10000;
  &:hover {
    border-color: antiquewhite;
    transition: ease-in;
    transition-duration: 700ms;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30%;
    height: 49px;
    border: 10px solid transparent;
    border-bottom: 10px solid #fffa;
    border-right: 10px solid #fffa;
    transition: 0.3s linear all;
  }
`;
