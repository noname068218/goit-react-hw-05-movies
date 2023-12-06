import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
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
  top: 50%;
  left: 50%;
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
