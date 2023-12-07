import styled from 'styled-components';

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

export const CardBack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageCard = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
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
