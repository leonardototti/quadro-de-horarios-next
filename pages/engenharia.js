import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'

import Container from 'react-bootstrap/Container';

import * as styles from '../styles/pages/Timesheet'

export default function Engenharia() {

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if(e.code === "ArrowLeft" || e.code === "Backspace") {
                Router.push('/');
            }
        });
    }, []);

    return (
        <>
        <Head>
            <meta name="robots" content="index, follow"/>

            <meta name="title" content="Engenharia de Software - Quadro de Horários - Unifil"/>
            <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://quadro-de-horarios.vercel.app/engenharia"/>
            <meta property="og:title" content="Engenharia de Software - Quadro de Horários - Unifil"/>
            <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>
            <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
            
            <title>Engenharia de Software - Quadro de Horários - Unifil</title>
        </Head>
            <span className="background-text"><span>Engenharia</span> <span>de</span> <span>Software</span></span>
            <Link href="/">
                <styles.BackIcon>
                    <img src="/back.svg" alt="Voltar"/>
                </styles.BackIcon>
            </Link>
            <main>
                <Container>
                    <styles.Section>
                        <styles.Logo src="/logo-unifil.png" width="150px" height="auto" alt="Logo Unifil"></styles.Logo>
                        <styles.Content>
                            <styles.Title>Horários de <span>Engenharia</span></styles.Title>
                            <styles.SubTitle>Clique em algum horário para acessar o respectivo link da aula.</styles.SubTitle>
                            <styles.TableContainer>
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>ENSW302K</th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <styles.Td hour>19h00 - 20h30</styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/byp-mbdf-ucn" target="_blank" rel="noopener noreferrer">
                                                    Matemática Discreta<br/>
                                                    Tania
                                                </a><br/>
                                                Sala 121
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjA0NzkzMzUy?cjc=jq65hfu" target="_blank" rel="noopener noreferrer">(jq65hfu)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/vez-vcrt-kiy" target="_blank" rel="noopener noreferrer">
                                                    Arq. e Org. de Computadores<br/>Kleber
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcyNjQwODIxNDgy?cjc=nh5wvkg" target="_blank" rel="noopener noreferrer">(nh5wvkg)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/vdm-vhvb-qtv" target="_blank" rel="noopener noreferrer">
                                                    Ling. de Prog. Orientada a Obj.<br/>Edson
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjQ0MTE3NTg4?cjc=ske6jjv" target="_blank" rel="noopener noreferrer">(ske6jjv)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/zjv-iunf-sce" target="_blank" rel="noopener noreferrer">
                                                    Alg. e Estruturas de Dados<br/>Mario
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzY3Nzc4OTUxNDY2?cjc=ebz6llr" target="_blank" rel="noopener noreferrer">(ebz6llr)</a>
                                            </styles.Td>
                                            <styles.Td gray>
                                                <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">
                                                    Projeto Inter. II<br/>Tania
                                                </a><br/>
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjExODM3MDE1?cjc=qljgz2c" target="_blank" rel="noopener noreferrer">(qljgz2c)</a>
                                            </styles.Td>
                                        </tr>
                                        <tr style={{backgroundColor: 'rgba(0,0,0,.03)'}}>
                                            <styles.Td hour>20h30 - 20h45</styles.Td>
                                            <styles.Td colSpan="5">Intervalo</styles.Td>
                                        </tr>
                                        <tr>
                                            <styles.Td hour>20h45 - 22h15</styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/fry-bfxo-zdo" target="_blank" rel="noopener noreferrer">
                                                    Arq. e Org. de Computadores<br/>Kleber
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcyNjQwODIxNDgy?cjc=nh5wvkg" target="_blank" rel="noopener noreferrer">(nh5wvkg)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/zjv-iunf-sce" target="_blank" rel="noopener noreferrer">
                                                    Alg. e Estruturas de Dados<br/>Mario
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzY3Nzc4OTUxNDY2?cjc=ebz6llr" target="_blank" rel="noopener noreferrer">(ebz6llr)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/byp-mbdf-ucn/" target="_blank" rel="noopener noreferrer">
                                                    Matemática Discreta<br/>
                                                    Tania
                                                </a><br/>
                                                Sala 121
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjA0NzkzMzUy?cjc=jq65hfu" target="_blank" rel="noopener noreferrer">(jq65hfu)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href="https://meet.google.com/dxx-cfeq-pjs" target="_blank" rel="noopener noreferrer">
                                                    Ling. de Prog. Orientada a Obj.<br/>Edson
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjQ0MTE3NTg4?cjc=ske6jjv" target="_blank" rel="noopener noreferrer">(ske6jjv)</a>
                                            </styles.Td>
                                            <styles.Td></styles.Td>
                                        </tr>
                                    </tbody>
                                </table>
                            </styles.TableContainer>
                            <styles.SubtitlesContainer>
                                <ul>
                                    <li>Legenda: </li>
                                    <styles.SubtitlesLi green>Aulas ministradas virtualmente</styles.SubtitlesLi>
                                    <styles.SubtitlesLi gray>Aulas agendadas previamente</styles.SubtitlesLi>
                                </ul>
                                <div className="course-title">Engenharia de Software</div>
                            </styles.SubtitlesContainer>
                        </styles.Content>
                        <styles.Copyright>Desenvolvido por <a target="_blank" rel="noreferrer noopener" href="https://github.com/leonardototti">Leonardo Totti</a></styles.Copyright>
                    </styles.Section>
                </Container>
            </main>
        </>
    )
}
