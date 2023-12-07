import styled from 'styled-components';

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
  margin: 0;
`;
