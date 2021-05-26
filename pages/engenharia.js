import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';

import styles from '../styles/Timesheet.module.css'

export default function Engenharia() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="Portuguese"/>

        <meta name="title" content="Engenharia de Software - Quadro de Horários - Unifil"/>
        <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quadro-de-horarios.vercel.app/engenharia"/>
        <meta property="og:title" content="Engenharia de Software - Quadro de Horários - Unifil"/>
        <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>
        <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
        
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Engenharia de Software - Quadro de Horários - Unifil</title>
      </Head>
        <span className="background-text"><span>Engenharia</span> <span>de</span> <span>Software</span></span>
        <Link href="/">
            <span className={styles.backicon}><img src="/back.svg" alt="Voltar"/></span>
        </Link>
        <main>
            <Container>
                <section>
                    <img className="logo" src="/logo-unifil.png" width="150px" height="auto" alt="Logo Unifil"/>
                    <div className="content">
                        <h1 className="title">Quadro de Horários</h1>
                        <p className="subtitle">Clique em algum horário para acessar o respectivo link da aula.</p>
                        <div className={styles.tablecontainer}>
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
                                        <td className={styles.tablehour}>19h00 - 20h30</td>
                                        <td><a href="https://meet.google.com/jwg-tvwk-csy" target="_blank" rel="noopener noreferrer">Desenv. de Aplicativos Móveis<br/>Adail<br/>Lab 3 (6p2kfwf)</a></td>
                                        <td><a href="https://meet.google.com/jwg-tvwk-csy" target="_blank" rel="noopener noreferrer">Desenv. de Aplicativos Móveis<br/>Adail<br/>Lab 3 (6p2kfwf)</a></td>
                                        <td className={styles.backgreen}><a href="https://meet.google.com/ues-ydpb-nfq" target="_blank" rel="noopener noreferrer">Intro. a Computação e TGS<br/>Adail<br/>Sala 121 (ig4g7zs)</a></td>
                                        <td><a href="https://meet.google.com/sxo-bafn-dvj" target="_blank" rel="noopener noreferrer">Lógica e Prog. de Algoritmos<br/>Edson<br/>Lab 3 (j3mrf2i)</a></td>
                                        <td><a href="https://meet.google.com/icg-xion-poo" target="_blank" rel="noopener noreferrer">Lógica e Prog. de Algoritmos<br/>Edson<br/>Lab 3 (j3mrf2i)</a></td>
                                    </tr>
                                    <tr style={{backgroundColor: 'rgba(0,0,0,.03)'}}>
                                        <td className={styles.tablehour}>20h30 - 20h45</td>
                                        <td colspan="5">Intervalo</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tablehour}>20h45 - 22h15</td>
                                        <td className={styles.backgreen}><a href="https://meet.google.com/cfh-bvsj-quw" target="_blank" rel="noopener noreferrer">Gestão de Pessoas<br/>Sergio<br/>Sala 121 - (n2zjlzw)</a></td>
                                        <td className={styles.backgray}><a href="https://meet.google.com/iuu-sivp-kcq" target="_blank" rel="noopener noreferrer">Projeto Inter. I<br/>Tania<br/>(s7zjnf6)</a></td>
                                        <td><a href="https://meet.google.com/ucd-uqkr-djh" target="_blank" rel="noopener noreferrer">Gerência de Requi.<br/>Anderson<br/>Lab 3 (e4kepol)</a></td>
                                        <td><a href="https://meet.google.com/ucd-uqkr-djh" target="_blank" rel="noopener noreferrer">Gerência de Requi.<br/>Anderson<br/>Lab 3 (e4kepol)</a></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.subtitlescontainer}>
                            <ul className={styles.subtitlesul}>
                                <li>Legenda: </li>
                                <li className={styles.squaregreen}>Aulas ministradas virtualmente</li>
                                <li className={styles.squaregray}>Aulas agendadas previamente</li>
                            </ul>
                            <div className="course-title">Engenharia de Software</div>
                        </div>
                    </div>
                    <p className="copyright">Desenvolvido por <a target="_blank" rel="noreferrer noopener" href="https://github.com/leonardototti">Leonardo Totti</a></p>
                </section>
            </Container>
        </main>
    </>
  )
}
