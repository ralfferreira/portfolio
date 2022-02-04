import styled from 'styled-components';
import img from '../../assets/hero.png';
import { Link as LinkS } from 'react-scroll';

export const Container = styled.div`
    height: 88vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeroTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 92px;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const HeroText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 30px;
`

export const HeroDescriptionText = styled.p`
    width: 45%;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    text-align: center;
    color: #fff;
`

export const ScrollImage = styled.img`
    width: 100px;
    width: 100px;
    transform: rotate(180deg);

`

export const Scroll = styled.div`
    bottom: 7%;
    position: absolute;
    :hover {
        cursor: pointer;
    }
`

export const Link = styled(LinkS)``