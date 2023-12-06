import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const ContainerListImage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  margin: 0 -10px;
`;

export const Container = styled.div`
  display: flex;
`;

export const List = styled.ul`
  max-width: 25%;
  list-style-type: none;
  padding: 0;
`;
export const Listli = styled.li`
  list-style-type: none;
  flex-basis: calc(25% - 20px);
  margin-bottom: 20px;
`;
export const ImageCard = styled.img`
  object-fit: cover;
  width: calc(50% - 10px);
  height: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
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
  background: url('https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
