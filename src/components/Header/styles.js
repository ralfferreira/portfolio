import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Container = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #fff;
`

export const Logo = styled.img`
    width: 50px;
    height: 40px;
`

export const Links = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 400px;
    margin-left: 100px;
`

export const Home = styled.a``

export const LinkItem = styled.li`
    list-style-type: none;
`

export const Link = styled(LinkS)`
    font-weight: 300;
    font-size: 18px;
    color: #383535;
    font-family: Poppins;
    cursor: pointer;
    text-decoration: none;
`