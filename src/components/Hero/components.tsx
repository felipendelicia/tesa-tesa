import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column-reverse;
        padding-bottom: 50px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const Text = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const Title = styled.h2`
    font-family: ${theme.alternativeFont};
`

export const Paragraph = styled.p`
    
`

export const LinkButton = styled(Link)`
    font-family: ${theme.alternativeFont};
    align-self: flex-start;
    padding: 5px 20px;
    border-radius: ${theme.borderRadius};
    color: ${theme.white};
    background-color: ${theme.black};
    font-size: 1em;
`