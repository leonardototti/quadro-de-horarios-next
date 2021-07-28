import styled, { css } from 'styled-components'

export const Logo = styled.img`
    margin: 20px;
    user-select: none;
`;

export const Title = styled.h1`
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    width: 100%;
    user-select: none;
    z-index: 2;

    @media(max-width: 576px) {
        font-size: 42px!important;
    }
`;

export const SubTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    user-select: none;
    z-index: 2;
    color: whitesmoke;
    margin-left: 5px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 50px 0px;
    z-index: 2;
    gap: 15px;
`;

export const ButtonCourse = styled.button`
    outline: none;
    border: 1px solid white;
    background-color: white;
    border-radius: 6px;
    padding: 12px 30px;
    color: #f39200;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
    z-index: 2;
    transition: .1s;

    ${props =>
    props.outline &&
    css`
        background: transparent;
        color: white;
    `};

    &:active {
        transform: scale(0.99);
        filter: brightness(0.9);
    }
`;

export const CourseIcon = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    opacity: .1;
    z-index: 1;
`;
