import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainBackground = styled.div`
  width: 100%;
  height: 100vh;
`;

export const VideoFrame = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
`;
export const OverlayVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Conein = styled.section`
  background-color: aliceblue;
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 1px gray;
  font-size: 18px;
  transition: width 0.3s;
  font-family: Consolas, monaco, monospace;
  &:focus {
    outline: 1px solid blue;
    box-shadow: none;
    width: 230px;
  }

  ::placeholder {
    color: blue;
  }
`;

export const BntSearch = styled.button`
  position: relative;
  top: 0;
  left: 0;
  margin-top: 30px;
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
export const WraperContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Search = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const LinkPoster = styled(Link)`
  width: 100%;
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

export const Listli = styled.li`
  list-style-type: none;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardBack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardFront = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const ImageCard = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
