import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HomeBtn = styled.button`
  position: fixed;
  top: 0;
  right: 90%;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

export const Card = styled.div`
  width: 800px;
  height: 400px;
  background: transparent;
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const CardLeft = styled.div`
  width: 40%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    -webkit-border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
  }
`;

export const CardRight = styled.div`
  width: 60%;
  background: #000000;
  height: auto;
  border-radius: 0 10px 10px 0;
  -webkit-border-radius: 0 10px 10px 0;
  -moz-border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 0;

    padding: 0 0 0 40px;
    letter-spacing: 1px;
  }
  p {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Gener = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`;

export const TextGenerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`;

//CAST Reviews

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;

export const ListItem = styled.li`
  margin: 12px;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444,
    inset -5px -5px 10px #222;
  font-family: 'Damion', cursive;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;

  &:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222,
      inset -5px -5px 10px #444;
    color: #d6d6d6;
    transition: 500ms;
  }
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const LinkBtn = styled(Link)`
  color: white;
  text-align: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
