import styled from 'styled-components';

export const Navbar = styled.div`
    background-color: #000;
    height: 50px;
    weight: 100%;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        text-decoration: none;
        color: #fff;
        margin: 20px;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #000;
        padding: 10px;
        border-radius: 20px;

        &:hover{
            color: #000;
            background-color:#fff;
            transition: 0.5s all;
        }
    }
`;