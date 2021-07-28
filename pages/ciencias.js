import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'

import Container from 'react-bootstrap/Container';

import * as styles from '../styles/pages/Timesheet'

export default function Ciencias() {

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

            <meta name="title" content="Ciências da Computação - Quadro de Horários - Unifil"/>
            <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Ciências da Computação."/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://quadro-de-horarios.vercel.app/ciencias"/>
            <meta property="og:title" content="Ciências da Computação - Quadro de Horários - Unifil"/>
            <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Ciências da Computação."/>
            <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
            
            <title>Ciências da Computação - Quadro de Horários - Unifil</title>
        </Head>
            <span className="background-text"><span>Ciências</span> <span>da</span> <span>Computação</span></span>
            <Link href="/">
                <styles.BackIcon>
                    <img src="/back.svg" alt="Voltar"/>
                </styles.BackIcon>
            </Link>
            <main>
                <Container>
                    <styles.Section>
                        <img className="logo" src="/logo-unifil.png" width="150px" height="auto" alt="Logo Unifil"/>
                        <styles.Content>
                            <styles.Title>Horários de <span>Ciências</span></styles.Title>
                            <styles.SubTitle>Clique em algum horário para acessar o respectivo link da aula.</styles.SubTitle>
                            <styles.TableContainer>
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>ENSW301K</th>
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
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Matemática Discreta<br/>Tania<br/>Sala 121 (jq65hfu)</a></styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Arq. e Org. de Computadores<br/>Kleber<br/>Lab 3 (nh5wvkg)</a></styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Ling. de Prog. Orientada a Obj.<br/>Edson<br/>Lab 3 (ske6jjv)</a></styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Alg. e Estruturas de Dados<br/>Mario<br/>Lab 3 (ebz6llr)</a></styles.Td>
                                            <styles.Td gray><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Projeto Inter. II<br/>Tania<br/>(qljgz2c)</a></styles.Td>
                                        </tr>
                                        <tr style={{backgroundColor: 'rgba(0,0,0,.03)'}}>
                                            <styles.Td hour>20h30 - 20h45</styles.Td>
                                            <styles.Td colSpan="5">Intervalo</styles.Td>
                                        </tr>
                                        <tr>
                                            <styles.Td hour>20h45 - 22h15</styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Arq. e Org. de Computadores<br/>Kleber<br/>Lab 3 (nh5wvkg)</a></styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Alg. e Estruturas de Dados<br/>Mario<br/>Lab 3 (ebz6llr)</a></styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Matemática Discreta<br/>Tania<br/>Sala 121 (jq65hfu)</a></styles.Td>
                                            <styles.Td><a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">Ling. de Prog. Orientada a Obj.<br/>Edson<br/>Lab 3 (ske6jjv)</a></styles.Td>
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
                                <div className="course-title">Ciências da Computação</div>
                            </styles.SubtitlesContainer>
                        </styles.Content>
                        <styles.Copyright>Desenvolvido por <a target="_blank" rel="noreferrer noopener" href="https://github.com/leonardototti">Leonardo Totti</a></styles.Copyright>
                    </styles.Section>
                </Container>
            </main>
        </>
    )
}
