import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';

export const GloalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #333;
}

h1 {
  color: #fff;
};
`


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background-color: #022c16;
  margin-bottom: 3em;
  
  h1 {
    color: ${props => props.theme.textColor};
  }
`;

export const Container = styled.div`
width: 80%;
max-width: 800px;
margin: 0 auto;
font-size: 1.2em;
font-family: sans-serif;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;

  &:hover {
    background-color: #024c16;
  }
`;

export const Card = styled.div`
  background-color: lightgray;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: darkblue;
    padding: 10;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: black;
    text-align: center;
  }
`;

export  const Title = styled.h1`
  border: 2px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.textColor};
  margin: 5px auto;
  padding: 10px 20px;
`
