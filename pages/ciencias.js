import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'

import ls from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';

import { Container, Offcanvas, Form } from 'react-bootstrap'

import * as styles from '../styles/pages/Timesheet'

export default function Ciencias() {

    const [show, setShow] = useState(false);
    const [emailPos, setEmailPos] = useState(0);

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
            <styles.IconList>
                <li>
                    <Link href="/">
                        <styles.Icon back>
                            <img src="/back.svg" alt="Voltar"/>
                        </styles.Icon>
                    </Link>
                </li>
                <li>
                    <styles.Icon config onClick={() => setShow(true)}>
                        <img src="/config.svg" alt="Configurações"/>
                    </styles.Icon>
                </li>
            </styles.IconList>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <OffCanvasConfiguration show={show} onHide={() => { setShow(false); setEmailPos(getEmail()); }} placement='end' />
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
                                                <a href={`https://meet.google.com/byp-mbdf-ucn${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Matemática Discreta<br/>
                                                    Tania
                                                </a><br/>
                                                Sala 121
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjA0NzkzMzUy?cjc=jq65hfu" target="_blank" rel="noopener noreferrer">(jq65hfu)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href={`https://meet.google.com/vez-vcrt-kiy${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Arq. e Org. de Computadores<br/>Kleber
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcyNjQwODIxNDgy?cjc=nh5wvkg" target="_blank" rel="noopener noreferrer">(nh5wvkg)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href={`https://meet.google.com/vdm-vhvb-qtv${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Ling. de Prog. Orientada a Obj.<br/>Edson
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjQ0MTE3NTg4?cjc=ske6jjv" target="_blank" rel="noopener noreferrer">(ske6jjv)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href={`https://meet.google.com/zjv-iunf-sce${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Alg. e Estruturas de Dados<br/>Mario
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzY3Nzc4OTUxNDY2?cjc=ebz6llr" target="_blank" rel="noopener noreferrer">(ebz6llr)</a>
                                            </styles.Td>
                                            <styles.Td gray>
                                                <a href={`https://meet.google.com/${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
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
                                                <a href={`https://meet.google.com/fry-bfxo-zdo${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Arq. e Org. de Computadores<br/>Kleber
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcyNjQwODIxNDgy?cjc=nh5wvkg" target="_blank" rel="noopener noreferrer">(nh5wvkg)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href={`https://meet.google.com/zjv-iunf-sce${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Alg. e Estruturas de Dados<br/>Mario
                                                </a><br/>
                                                Lab 3
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzY3Nzc4OTUxNDY2?cjc=ebz6llr" target="_blank" rel="noopener noreferrer">(ebz6llr)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href={`https://meet.google.com/byp-mbdf-ucn/${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
                                                    Matemática Discreta<br/>
                                                    Tania
                                                </a><br/>
                                                Sala 121
                                                <a className="classroom-link" href="https://classroom.google.com/c/MzcwNjA0NzkzMzUy?cjc=jq65hfu" target="_blank" rel="noopener noreferrer">(jq65hfu)</a>
                                            </styles.Td>
                                            <styles.Td>
                                                <a href={`https://meet.google.com/dxx-cfeq-pjs${'?authuser=' + emailPos}`} target="_blank" rel="noopener noreferrer">
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

function OffCanvasConfiguration(props) {
    const [emailPos, setEmailPos] = useState(0);

    const notify = () => toast(`✔ Seu email foi definido para ${emailPos}.`);

    return (
        <Offcanvas {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Configurações</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={(e) => { e.preventDefault(); setEmail(emailPos); props.onHide(); notify();  }}>
                    <Form.Group className="mb-3">
                        <h5 style={{ fontSize: '16px' }}>Qual seu email da faculdade?</h5>
                        <Form.Text className="text-muted">
                            Informe a posição do seu email educacional na lista de seus emails logados do google, sendo o primeiro começando em 0.
                        </Form.Text>
                        <Form.Select defaultValue={getEmail()} onChange={(e) => { setEmailPos(e.target.value) }} aria-label="Informe o número" required placeholder="Informe o número" style={{marginTop: '10px'}}>
                            <option value="" disabled hidden>Informe o número</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </Form.Select>
                        <styles.ConfigButton type="submit">Salvar <img src="/save.svg" /></styles.ConfigButton>
                        <styles.ConfigButton cancel type="button" onClick={() => { props.onHide() }}>Cancelar</styles.ConfigButton>
                    </Form.Group>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

function setEmail(emailPos) {
    ls.set("email", emailPos)
}

function getEmail() {
    if(ls.get("email")) {
        return ls.get("email")
    } else {
        return ""
    }
}