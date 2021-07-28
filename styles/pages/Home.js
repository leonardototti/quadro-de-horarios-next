import styled, { css } from 'styled-components'

export const Section = styled.section`
    padding: 30px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex!important;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 1200px) {
        justify-content: unset!important;
    }

    @media(max-width: 768px) {
        padding: 0!important;
    }
`;

export const Content = styled.div`
    .content {
        width: 100%;
        background-image: linear-gradient(to right top, #f1641f, #ef5f19, #ed5912, #eb5309, #e94d00);
        padding: 40px;
        border-radius: 15px;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
        position: relative;
    }

    @media(max-width: 576px) {
        padding: 30px!important;
    }
`;

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

export const Copyright = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 20px;
    color: #706f6f;
    user-select: none;

    a {
        color: #f39200;
        text-decoration: none;
        transition: .2s;

        &:hover {
            color: #f1641f;
            text-decoration: none;
        }
    }
`;