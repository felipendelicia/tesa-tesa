import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 50px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const TopInputs = styled.div`
  display:flex;
  gap: 5px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
