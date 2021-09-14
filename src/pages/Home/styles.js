import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 360px;
  height: 100vh;
  overflox-y: scroll;
`;

export const Search = styled.section`
  dysplay: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

export const Wrapper = styled.section`
  dysplay: flex;
  background-color: red;
`;

export const Map = styled.section`
  dysplay: flex;
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
