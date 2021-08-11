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
    width: 100%;
    background-image: linear-gradient(to right top, #f1641f, #ef5f19, #ed5912, #eb5309, #e94d00);
    padding: 40px;
    border-radius: 15px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
    position: relative;

    @media(max-width: 576px) {
        padding: 30px!important;
    }
`;

export const IconList = styled.ul`
    position: absolute;
    top: 30px;
    right: 70px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;

    @media(max-width: 768px) {
        top: 30px;
        right: 20px;
    }
`;

export const Icon = styled.div`
    background-color: #f1641f;
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
    cursor: pointer;
    transition: .3s;

    &:active {
        transform: scale(0.99);
        filter: brightness(0.9);
    }

    &:hover {
        background-color: #e94d00;
    }

    @media(max-width: 576px) {
        top: 25px!important;
        right: 25px!important;
    }

    img {
        height: 25px;
        max-height: 25px;
    }

    ${props =>
    props.back &&
    css`
        img {
            margin-right: 3px;
        }
    `};
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

    span {
        text-decoration: underline;
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

export const TableContainer = styled.div`
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    table {
        color: white;
        margin-bottom: 0!important;
        border: 2px solid white;

        thead {
            tr {
                background-color: white;
                color: #706f6f;
                border-radius: 15px;
                text-transform: uppercase;
            }

            th {
                width: 16.6666666667%;
            }
        }

        tbody {
            * {
                font-size: 15px;
            }

            td a {
                color: white;
            }
        }

        th, td {
            text-align: center;
            padding: .75rem .3rem!important;
            min-width: 140px;
        }
    }
`;

export const Td = styled.td`
    vertical-align: middle!important;
    background-color: #f7793d!important;

    .classroom-link {
        color: #f0f0ff;
        margin: 0 5px;
        padding: 2px 8px;
        border-radius: 6px;
        background-color: #f7a984!important;
        font-size: 12px;
    }

    ${props =>
    props.hour &&
    css`
        vertical-align: middle;
        font-weight: bold;
    `};

    ${props =>
    props.green &&
    css`
        background-color: #12a038!important;

        .classroom-link {
            background-color: #50bb6d!important;
        }
    `};

    ${props =>
    props.gray &&
    css`
        background-color: #706F6F!important;

        .classroom-link {
            background-color: #928f8f!important;
        }
    `};
`;

export const SubtitlesContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    ul {
        display: flex;
        margin-bottom: 0!important;
        column-gap: 15px;
        flex-wrap: wrap;
        padding-left: 0!important;

        li {
            list-style: none;
        }
    }
`;

export const SubtitlesLi = styled.li`
    &::before {
        content: "";
        display: inline-block;
        margin-right: 5px;
        min-width: 15px;
        min-height: 15px;
        width: 15px;
        height: 15px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        
        ${props =>
        props.green &&
        css`
            background-color: #12a038;
        `};

        ${props =>
        props.gray &&
        css`
            background-color: #706F6F;
        `};
    }
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

export const ConfigButton = styled.button`
    outline: none;
    border: 1px solid #f1641f;
    border-radius: 6px;
    padding: 12px 30px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 15px;
    z-index: 2;
    transition: all 0.1s ease 0s;
    margin-bottom: 15px;
    background: #f1641f;
    color: white;
    margin-top: 20px;

    img {
        max-width: 20px;
        max-height: 20px;
        margin-left: 3px;
    }

    &:active {
        transform: scale(0.98);
    }

    ${props =>
    props.cancel &&
    css`
        background-color: transparent;
        border: 0;
        color: #f1641f;
        box-shadow: unset;
        margin-top: 0px;
    `};
`;

export const NewsModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    
    h4 {
        margin-bottom: 15px!important;
        margin-top: 10px;
        font-weight: bold;
        width: 100%;
    }
`;