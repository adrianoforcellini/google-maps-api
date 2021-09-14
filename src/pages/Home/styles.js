import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 90%;
  padding: grey;
  height: 10vh;
  border: 0px;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  margin-left: 17%;
  margin-top: 5%;
`;

export const Map = styled.div`
  background-color: red;
  height: 500px;
  width: 500px;
`;
