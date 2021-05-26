import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="Portuguese"/>

        <meta name="title" content="Quadro de Horários - Unifil"/>
        <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quadro-de-horarios.vercel.app"/>
        <meta property="og:title" content="Quadro de Horários - Unifil"/>
        <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>
        <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
        
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Quadro de Horários - Unifil</title>
      </Head>
      <span className="background-text"><span>Escolha</span> <span>seu</span> <span>Curso</span></span>
      <main>
        <Container>
          <section>
            <img className="logo" src="/logo-unifil.png" width="150px" height="auto" alt="Logo Unifil"/>
            <div className="content js-tilt">
                <h1 className="title">Escolha seu curso</h1>
                <p className="subtitle">Clique em um dos botões para acessar o respectivo quadro de horários.</p>
                <div className="row buttons-container">
                <Link href="/ciencias">
                  <button className={styles.buttoncourse}>Ciências da Computação</button>
                </Link>
                <Link href="/engenharia">
                  <button className={styles.buttoncourse}>Engenharia de Software</button>
                </Link>
                </div>
            <img className={styles.courseicon} width="auto" height="65%" src="/icon.png" alt="Curso"/>
            </div>
            <p className="copyright">Desenvolvido por <a target="_blank" rel="noreferrer noopener" href="https://github.com/leonardototti">Leonardo Totti</a></p>
          </section>
        </Container>
      </main>
    </>
  )
}
