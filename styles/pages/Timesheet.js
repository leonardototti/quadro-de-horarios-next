import styled, { css } from 'styled-components'

export const BackIcon = styled.div`
    position: absolute;
    top: 70px;
    right: 70px;
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
        margin-right: 3px;
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
                color: white!important;
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
    background-color: #f7793d;

    ${props =>
    props.hour &&
    css`
        vertical-align: middle;
        font-weight: bold;
    `};

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