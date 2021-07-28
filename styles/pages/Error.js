import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
`;

export const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    z-index: -1;
    opacity: .04;
    width: 25vw;

    @media(max-width: 576px) {
        width: 90%;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 3rem;
`;

export const SubTitle = styled.p`
    font-family: Roboto,sans-serif;
`;

export const Button = styled.button`
    outline: none;
    border: 0;
    background-color: #f1641f;
    border-radius: 6px;
    padding: 12px 40px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px;
    z-index: 2;
    transition: .1s;
    margin-top: 30px;
    font-weight: bold;

    &:active {
        transform: scale(0.99);
        filter: brightness(0.9);
    }
`;